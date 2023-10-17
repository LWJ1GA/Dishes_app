import React from 'react'
import './categories.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


export const Categories = () => {
    
  const [value, setValue] = useState([]);
  const handleChange = (val) => setValue(val);

  return (
    <>
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
              <ToggleButton id="tbg-check-1" value={1}>
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

        <DropdownButton
          as={ButtonGroup}
          title="-Casserole"
          id="bg-vertical-dropdown-4"
          size="lg"
          variant='secondary'
          autoClose={false}
        >
          Vegetables  <br></br>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`reverse-${type}`} className="mb-3">
                <Form.Check
                  reverse
                  label="Carrots"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-1`}
                />
                <Form.Check
                  reverse
                  label="Potatoes"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-2`}
                />
                <Form.Check
                  reverse
                  label="Brussels"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-3`}
                />
                <Form.Check
                  reverse
                  label="Sprouts"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-4`}
                />
                 <Form.Check
                  reverse
                  label="Zucchini"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-5`}
                />
                 <Form.Check
                  reverse
                  label="Egg plant "
                  name="group1"
                  type={type}
                  id={`reverse-${type}-6`}
                />
                 <Form.Check
                  reverse
                  label="Coliflower "
                  name="group1"
                  type={type}
                  id={`reverse-${type}-7`}
                />
                  <Form.Check
                  reverse
                  label="Peppers "
                  name="group1"
                  type={type}
                  id={`reverse-${type}-8`}
                />
                 <Form.Check
                  reverse
                  label="Tomatoes "
                  name="group1"
                  type={type}
                  id={`reverse-${type}-9`}
                />

              </div>
            ))}
          </Form>
                
          
          <Dropdown.Item eventKey="2">
            <br></br>

              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                Medium
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                Crispy 
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                Extra Crispy
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>
          
          <Dropdown.Item eventKey="3">
          Material  <br></br>

              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                 Metal
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                Glass 
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                Foil 
                </ToggleButton>
                <ToggleButton id="tbg-check-4" value={4}>
                Mesh 
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>
          
        </DropdownButton>

        <DropdownButton
          as={ButtonGroup}
          id="bg-vertical-dropdown-5"
          size="lg"
          variant='secondary'
          title="-Cookies"
          autoClose={false}
        >
        <Dropdown.Item eventKey="1">
          Flavors  <br></br>

              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                Chocolate chip
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                Peanut butter 
                </ToggleButton>
                <ToggleButton id="tbg-check-3" value={3}>
                Sugar cookies
                </ToggleButton>
                <ToggleButton id="tbg-check-4" value={4}>
                Gingerbread 
                </ToggleButton>
              </ToggleButtonGroup>
          </Dropdown.Item>

          <Dropdown.Item eventKey="2">
            <br></br>

              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                Regular
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                Chunky
                </ToggleButton> 
              </ToggleButtonGroup>
          </Dropdown.Item>

          <Dropdown.Item eventKey="3">
            State:<br></br>

              <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="mb-2">
                <ToggleButton id="tbg-check-1" value={1}>
                Frozen
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2}>
                Refrigerated
                </ToggleButton> 
                <ToggleButton id="tbg-check-3" value={3}>
                Fresh
                </ToggleButton> 
              </ToggleButtonGroup>
          </Dropdown.Item>
        </DropdownButton>
     </ButtonGroup>
   
    
    </>
  )
}
