import React, { useState, useEffect, useRef  } from "react";
import Select from "react-select";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from 'axios';
import html2pdf from 'html2pdf.js'; // Importa html2pdf

export const Dish = () => {
  const options = {
    Pizza: {
      Style: ["Thin", "Thick", "Deep Dish"],
      State: ["Frozen", "Fresh", "Reheat"],
      Crust: ["Regular", "Self-rising", "Stuffed crust", "Pre-baked"]
    },
    Casserole: {
      Dish: ["Lasagna", "Green bean", "Mac & cheese", "Mashed potatoes"],
      Size: ["8x8", "8x12 (2qt)", "9x13 (3 qt)"],
      Material: ["Glass", "Metal", "Foil", "Steel", "Pizza stone", "Pan"]
    },
    Poultry: {
      Poultry: ["Chicken", "Turkey", "Duck", "Quail"],
      Proportion: ["Whole", "Quarters", "White", "Dark", "Mixed"],
      Stuffed: ["Unstuffed", "Stuffed"]
    },
    Vegetables: {
      Vegetables: ["Carrots", "potatoes ", "Brussels sprouts", "Zucchini", "Egg plant","Cauliflower", "Peppers", "Tomato"],
      Crispy: ["Medium", "Crispy", "Extra crispy"],
      Recipient: ["Metal", "Glass", "Foil", "Mesh"]
    },
    Cookies: {
      Options: ["Chocolate chip", "Peanut butter", "Sugar cookies", "Gingerbread"],
      Type: ["Regular", "Chunky"],
      State: ["Frozen", "Refrigerated", "Fresh"]
    }
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [selections, setSelections] = useState({});
  const [isCardVisible, setCardVisibility] = useState(false); // Estado para controlar la visibilidad de la tarjeta
  const [isLoading, setLoading] = useState(false);

  const componentRef = useRef(); // Define la referencia para tu componente
  
  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
    setSelections({});
    setCardVisibility(true); // Mostrar la tarjeta cuando se selecciona una opción
  };

  const handleFormChange = (fieldName, selected) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [fieldName]: selected,
    }));
  };

  const renderForm = () => {
    if (selectedOption) {
      const formFields = options[selectedOption.value];
  
      return (
        <Row>
          {Object.keys(formFields).map((fieldName) => (
            <Col key={fieldName} md={4}>
              <Form.Group>
                <Form.Label name="fileName">{fieldName}</Form.Label>
                <Select
                  name="value"
                  isMulti
                  options={formFields[fieldName].map((option) => ({ value: option, label: option }))}
                  onChange={(selected) => handleFormChange(fieldName, selected)}
                  value={selections[fieldName] || []}
                />
              </Form.Group>
            </Col>
          ))}
        </Row>
      );
    }
    return null;
  };
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const [post, setPost] = useState({
    fileName:'',
    value:'',
  })

  const handleSubmit = () => {
    setLoading(true);

    // Utiliza html2pdf.js para imprimir el componente en un PDF
    generatePDF();

    const formData = {
      // Datos a enviar a la API aquí
      selectedOption,
      selections,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', formData) // Reemplaza 'URL_DE_LA_API' con la URL real de tu API
      .then((response) => {
        // Maneja la respuesta exitosa de la API aquí
        console.log('Respuesta de la API:', response.data);
        setLoading(false);



      })

      .catch((error) => {
        // Maneja cualquier error que ocurra durante la llamada a la API
        console.error('Error en la llamada a la API:', error);
        setLoading(false);
      });
  };

  const generatePDF = () => {
    const content = componentRef.current; // Obtiene el contenido HTML a convertir en PDF

    const pdfOptions = {
      margin: 10,
      filename: 'menu.pdf', // Nombre del archivo PDF
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(content).set(pdfOptions).outputPdf((pdf) => {
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'menu.pdf'; // Nombre del archivo para descargar
      a.click();
      URL.revokeObjectURL(url);
      setLoading(false);
    });
  };

  return (
    <Container>
      <Row>
        <Col className="text-center"> 
          <h2>Menu</h2>
          <Select
            options={Object.keys(options).map((option) => ({ value: option, label: option }))}
            onChange={handleDropdownChange}
            value={selectedOption}
            className="btn btn-md w-50 mx-auto"
          />
        </Col>
      </Row>
    
      {isCardVisible && selectedOption && (
      <Row>
          <Col className="mt-5">
            {renderForm()}
          </Col>
     </Row>
      )}

      <Row>
      <Col>
        {isCardVisible &&(
                  <Card className="text-center mx-auto mt-5 w-50" ref={componentRef}>
                  <Card.Body>
                    <h4 className="text-center">Selections</h4>
                    {Object.keys(selections).map((fieldName) => (
                      <div key={fieldName}>
                        <strong>{fieldName}:</strong>
                        {selections[fieldName].map((selected) => (
                          <span key={selected.value}>{selected.value}, </span>
                        ))}
                      </div>
                    ))}
                  </Card.Body>
                  <Row>
                    <Col>                  
                      <Button
                      className="mt-4"
                      variant="primary"
                      disabled={isLoading}
                      onClick={!isLoading ? handleSubmit : null}
                      >
                    {isLoading ? 'Loading…' : 'Download'}
                    </Button>
                    </Col>
                    <Col> 
                      <Button
                    className="mt-4"
                    variant="primary"
                    disabled={isLoading}
                    
                    >Upload to CMS Dishes
                    </Button>
                    </Col>
                  </Row>

                </Card>
                
        )}

      </Col>

      </Row>

    </Container>
  ); 
};
