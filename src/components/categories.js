import React from 'react'
import './categories.css';
import { Link } from 'react-router-dom';
import './Caracteristics.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Categories = () => {
    
    const [activeItem, setActiveItem] = useState(null);
    //new
    const [selectedInfo, setSelectedInfo] = useState({}); // Estado para almacenar la información seleccionada

    const [selectValues, setSelectValues] = useState({
      item1: { select1: '', select2: '', select3: '' },
      item2: { select1: '', select2: '', select3: '' },
      item3: { select1: '', select2: '', select3: '' },
      item4: { select1: '', select2: '', select3: '' },
      item5: { select1: '', select2: '', select3: '' },
    });

    const handleSelectChange = (item, select, value) => {
      setSelectValues((prevValues) => ({
        ...prevValues,
        [item]: {
          ...prevValues[item],
          [select]: value,
        },
      }));
    };

    const handleSave = (item) => {
      setSelectedInfo({
        ...selectedInfo,
        [item]: selectValues[item],
      });
    };

      // Función para renderizar la tarjeta con los valores seleccionados
    const renderSelectedValuesCard = () => {
      const { select1, select2, select3 } = selectValues.item1;
      

      return (
        <Card>
          <Card.Body>
            <Card.Title>Dish Properties</Card.Title>
            {/*<Card.Title>{`Valores Seleccionados - ${item}`}</Card.Title>*/}
            <Card.Text>
              <strong>Pizza Crust:</strong> {select1 || 'No selected'}
              <br />
              <strong>State:</strong> {select2 || 'No selected'}
              <br />
              <strong>Pizza Edge:</strong> {select3 || 'No selected'}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    };

    const handleAccordionSelect = (selectedItem) => {
      setActiveItem(selectedItem);

      setSelectValues({
        item1: { select1: '', select2: '', select3: '' },
        item2: { select1: '', select2: '', select3: '' },
        item3: { select1: '', select2: '', select3: '' },
        item4: { select1: '', select2: '', select3: '' },
        item5: { select1: '', select2: '', select3: '' },
      });
            // Reiniciar la información del item anterior
    if (activeItem) {
      setSelectedInfo((prevSelectedInfo) => ({
        ...prevSelectedInfo,
        [activeItem]: {},
      }));
    }
    setActiveItem(selectedItem);
      
      
      
    };

          // Función para renderizar la tarjeta con los valores seleccionados
        const renderSelectedValuesCard2 = () => {
            const { select1, select2, select3 } = selectValues.item2;
            
      
            return (
              <Card>
                <Card.Body>
                  <Card.Title>Dish Properties</Card.Title>
                  {/*<Card.Title>{`Valores Seleccionados - ${item}`}</Card.Title>*/}
                  <Card.Text>
                    <strong>Type of stew:</strong> {select1 || 'No selected'}
                    <br />
                    <strong>Size:</strong> {select2 || 'No selected'}
                    <br />
                    <strong>Material:</strong> {select3 || 'No selected'}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          };


  return (
    <>
      <Accordion activeKey={activeItem} onSelect= {handleAccordionSelect}>

            <Accordion.Item eventKey="item1" >

                <Accordion.Header>-Pizza</Accordion.Header>
                <Accordion.Body>
                <Form >
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                      <Form.Label>Pizza Crust</Form.Label>
                      <Form.Select
                        value={selectValues.item1.select1}
                        onChange={(e) => handleSelectChange('item1', 'select1', e.target.value)}
                      >
                        <option value="">Choose</option>
                        <option value="Thin">Thin</option>
                        <option value="Thik">Thik</option>
                        <option value="Deep Dish">Deep Dish</option>
                      </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="">
                    <Form.Label>State</Form.Label>
                    <Form.Select
                        value={selectValues.item1.select2}
                        onChange={(e) => handleSelectChange('item1', 'select2', e.target.value)}
                      >
                      <option value="">Choose...</option>
                      <option value="Frozen">Frozen</option>
                      <option value="Fresh">Fresh</option>
                      <option value="Reheat">Reheat</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="">
                    <Form.Label>Pizza edge</Form.Label>
                    <Form.Select
                        value={selectValues.item1.select3}
                        onChange={(e) => handleSelectChange('item1', 'select3', e.target.value)}
                      >
                      <option value=" ">Choose...</option>
                      <option value="Regular ">Regular</option>
                      <option value="Self-rising ">Self-rising</option>
                      <option value="Stuffed crust ">Stuffed crust</option>
                      <option value="Pre-backed">Pre-backed</option>
                    </Form.Select>
                  </Form.Group>
                  </Row>

                  <Button onClick={() => handleSave('item1')} variant="primary">Save</Button>{' '}
                </Form>
                  
                </Accordion.Body>
            </Accordion.Item >
            <Accordion.Item eventKey="item2">
              <Accordion.Header>-Casserole</Accordion.Header>
              <Accordion.Body>
              <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                      <Form.Label>Type of stew</Form.Label>
                      <Form.Select
                        value={selectValues.item2.select1}
                        onChange={(e) => handleSelectChange('item2', 'select1', e.target.value)}
                      >
                        <option value="Choose">Choose</option>
                        <option value="Lasagna">Lasagna</option>
                        <option value="Green bean">Green bean</option>
                        <option value="Mac & cheese">Mac & cheese</option>
                        <option value="Mashed potatoes">Mashed potatoes</option>
                      </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="">
                    <Form.Label>Size</Form.Label>
                    <Form.Select
                        value={selectValues.item2.select2}
                        onChange={(e) => handleSelectChange('item2', 'select2', e.target.value)}
                      >
                      <option value="">Choose...</option>
                      <option value="8x8">8x8</option>
                      <option value="8x12 (2qt)">8x12 (2qt)</option>
                      <option value="9x13 (3 qt)">9x13 (3 qt)</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="">
                    <Form.Label>Material</Form.Label>
                    <Form.Select
                        value={selectValues.item2.select3}
                        onChange={(e) => handleSelectChange('item2', 'select3', e.target.value)}
                      >
                      <option value="">Choose...</option>
                      <option value="Glass">Glass</option>
                      <option value="Metal">Metal</option>
                      <option value="Foil">Foil</option>
                      <option value="Steel">Steel</option>
                      <option value="Pizza Stone">Pizza Stone</option>
                      <option value="Pan">Pan</option>
                   </Form.Select>
                  </Form.Group>

                  </Row>
                  <Button onClick={() => handleSave('item2')} variant="primary">Save</Button>{' '}

                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="item3" >
              <Accordion.Header>-Poultry</Accordion.Header>
              <Accordion.Body>
                <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="">
                        <Form.Label>Meat</Form.Label>
                        <Form.Select
                        value={selectValues.item3.select1}
                        onChange={(e) => handleSelectChange('item3', 'select1', e.target.value)}
                        >
                          <option value="">Choose</option>
                          <option value="Chicken">Chicken</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Duck">Duck</option>
                          <option value="Quail">Quail</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                      <Form.Label>...</Form.Label>
                      <Form.Select
                        value={selectValues.item3.select2}
                        onChange={(e) => handleSelectChange('item3', 'select2', e.target.value)}
                        >
                        <option value="">Choose...</option>
                        <option value="Whole">Whole</option>
                        <option value="Quarters">Quarters</option>
                        <option value="White">White</option>
                        <option value="Dark">Dark</option>
                        <option value="Mixed">Mixed</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                      <Form.Label>Stuffed</Form.Label>
                      <Form.Select
                        value={selectValues.item3.select3}
                        onChange={(e) => handleSelectChange('item3', 'select3', e.target.value)}
                        >
                        <option value="">Choose...</option>
                        <option value="Unstuffed">Unstuffed</option>
                        <option value="Stuffed">Stuffed</option>
                      </Form.Select>
                    </Form.Group>
                    </Row>
                  </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="item4">
              <Accordion.Header>-Vegetables</Accordion.Header>
              <Accordion.Body>
              <Form>
                    <Row className="mb-3">
                      <Form.Group as={Row} className="mb-2" controlId="">
                        <Form.Label>Vegetables</Form.Label>
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label="Carrots" />
                        </Col>
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label="Potatoes" />
                        </Col>
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label="Brussels sprouts" />
                        </Col>
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label="Zucchini" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2" controlId="formCrust">
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label="Carrots" />
                        </Col>
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label="Potatoes" />
                        </Col>
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label="Brussels sprouts" />
                        </Col>
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Form.Check label="Zucchini" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        value={selectValues.item4.select2}
                        onChange={(e) => handleSelectChange('item2', 'select1', e.target.value)}
                      >
                        <option value="">Choose...</option>
                        <option value="Medium">Medium</option>
                        <option value="Crispy">Crispy</option>
                        <option value="Extra Crispy">Extra Crispy</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                      <Form.Label>Container</Form.Label>
                      <Form.Select
                        value={selectValues.item4.select3}
                        onChange={(e) => handleSelectChange('item2', 'select1', e.target.value)}
                      >
                        <option value="">Choose...</option>
                        <option value="Metal">Metal</option>
                        <option value="Glass">Glass</option>
                        <option value="Foil">Foil</option>
                        <option value="Mesh">Mesh</option>
                      </Form.Select>
                    </Form.Group>
                    </Row>
                  </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="item5">
              <Accordion.Header>-Cookies</Accordion.Header>
              <Accordion.Body>
              <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                      <Form.Label>Flavor</Form.Label>
                      <Form.Select
                        value={selectValues.item5.select1}
                        onChange={(e) => handleSelectChange('item5', 'select1', e.target.value)}
                      >
                        <option value="">Choose</option>
                        <option value="Chocolate chip">Chocolate chip</option>
                        <option value="Peanut butter">Peanut butter</option>
                        <option value="Sugar cookies">Sugar cookies</option>
                        <option value="Gingerbread">Gingerbread</option>
                      </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="">
                    <Form.Label>Size</Form.Label>
                    <Form.Select
                        value={selectValues.item5.select2}
                        onChange={(e) => handleSelectChange('item5', 'select2', e.target.value)}
                      >
                      <option value="">Choose...</option>
                      <option value="Regular">Regular</option>
                      <option value="Chunky">Chunky</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="">
                    <Form.Label>Texture</Form.Label>
                    <Form.Select
                        value={selectValues.item5.select3}
                        onChange={(e) => handleSelectChange('item5', 'select3', e.target.value)}
                      >
                      <option value="">Choose...</option>
                      <option value="Frozen">Frozen</option>
                      <option value="Refrigerated">Refrigerated</option>
                      <option value="Fresh">Fresh</option>

                   </Form.Select>
                  </Form.Group>
                  </Row>
                </Form>

              </Accordion.Body>
            </Accordion.Item>
         
      </Accordion>
     <br></br> 

     <Card>
        <Card.Body>
          <Card.Title>Información Seleccionada</Card.Title>
          {selectedInfo[activeItem] && Object.keys(selectedInfo).map((item) => (
          <Card.Text>
              <div key={item}>
                <strong>{item}:</strong>
                <br />
                <strong>Pizza Crust:</strong> {selectedInfo[item].select1 || 'No selected'}
                <br />
                <strong>State:</strong> {selectedInfo[item].select2 || 'No selected'}
                <br />
                <strong>Pizza Edge:</strong> {selectedInfo[item].select3 || 'No selected'}
                <br />
              </div>
          </Card.Text>
                      ))}

        </Card.Body>
      </Card>

     {/*{renderSelectedValuesCard()}*/}
     {/*{renderSelectedValuesCard2()}*/}

     {/*{Object.keys(initialSelectValues).map((item) => renderSelectedValuesCard(item))}*/}

     <div className="container">

{      /*
      <div className='box'> Number of variants - 50 </div><br></br>
      <div className='box'> Dish Properties</div>*/}

        <div className='buttons'>
          <br></br>
        <button className="opc"> Download </button>
        <Link to='/selection'><button className="opc">Selection</button></Link>

        </div>

    </div>


{      /*
      <ButtonGroup vertical>
        <DropdownButton
          as={ButtonGroup}
          title="-Pizza"
          id="bg-vertical-dropdown-1"
          size="lg"
          variant='secondary'
          autoClose={false}
        >
          <Dropdown.Item eventKey="1" >
            Thickness <br></br>
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
              <ToggleButton variant="outline-secondary" id="tbg-check-1" value={1}>
                Thin
              </ToggleButton>
              <ToggleButton id="tbg-check-2" value={2}>
                Thick 
              </ToggleButton>
              <ToggleButton id="tbg-check-3" value={3}>
                Deep Dish
              </ToggleButton>
            </ToggleButtonGroup>
          </Dropdown.Item>

          <Dropdown.Item eventKey="2">
            State <br></br>
              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                 Frozen
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                 Fresh 
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                Reheat
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>

            <Dropdown.Item eventKey="3">
              Kind <br></br>
                <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                  <ToggleButton id="tbg-check-1" value={1}>
                    Regular
                  </ToggleButton>
                  <ToggleButton id="tbg-check-2" value={2}>
                    Self-rising 
                  </ToggleButton>
                  <ToggleButton id="tbg-check-3" value={3}>
                    Stuffed crust
                  </ToggleButton>
                  <ToggleButton id="tbg-check-4" value={4}>
                    Pre-baked
                  </ToggleButton>
                </ToggleButtonGroup>
            </Dropdown.Item>

          </DropdownButton>

        <DropdownButton
          as={ButtonGroup}
          title="-Casserole"
          id="bg-vertical-dropdown-2"
          size="lg"
          variant='secondary'
          autoClose={false}
        >
          <Dropdown.Item eventKey="1">
          State: <br></br>
              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                 Frozen
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                 Fresh 
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                Reheat
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            Size :  <br></br>
              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                  8x8
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                  8x12 (2qt)
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                 9x13 (3 qt)
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
          Material  <br></br>
              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                 Glass
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                 Metal 
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                 Foil
                </ToggleButton>
                <ToggleButton id="tbg-check-4" value={4}>
                 Steel
                </ToggleButton>
                <ToggleButton id="tbg-check-5" value={5}>
                 Pizza Stone 
                </ToggleButton>
                <ToggleButton id="tbg-check-6" value={6}>
                 Pan
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>

        </DropdownButton>

        <DropdownButton
          as={ButtonGroup}
          id="bg-vertical-dropdown-3"
          size="lg"
          variant='secondary'
          title="-Poultry"
          autoClose={false}
        >
          <Dropdown.Item eventKey="1">
          Cra  <br></br>

              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                Chicken
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                Turkey 
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                Duck
                </ToggleButton>
                <ToggleButton id="tbg-check-4" value={4}>
                Quail
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>

          <Dropdown.Item eventKey="2">
          Preferred  <br></br>

              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                Whole
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                Quarters 
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                White
                </ToggleButton>
                <ToggleButton id="tbg-check-4" value={4}>
                Dark
                </ToggleButton>
                <ToggleButton id="tbg-check-5" value={5}>
                Mixed
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>

          <Dropdown.Item eventKey="3">
          Stuffed  <br></br>

              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                Unstuffed
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                Stuffed 
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>

        </DropdownButton>

       
     </ButtonGroup>
   */}
     
   
    
    </>
  )
}
