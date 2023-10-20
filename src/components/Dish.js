import React, { useState } from "react";
import Select from "react-select";
import { Form, Container, Row, Col } from "react-bootstrap";
import SelectedInfo from "./SelectedInfo";

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
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [selections, setSelections] = useState({});
  const [selectedForm, setSelectedForm] = useState(null);

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
    setSelectedForm(null);
    setSelections({});
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

      return Object.keys(formFields).map((fieldName) => (
        <Form.Group key={fieldName}>
          <Form.Label>{fieldName}</Form.Label>
          <Select
            isMulti
            options={formFields[fieldName].map((option) => ({ value: option, label: option }))}
            onChange={(selected) => handleFormChange(fieldName, selected)}
            value={selections[fieldName] || []}
          />
        </Form.Group>
      ));
    }
    return null;
  };

  return (
    <Container>
      <Row>
        <Col className="text-center"> {/* Aplicamos la clase text-center aquí */}
          <h2>Menu</h2>
          <Select
            options={Object.keys(options).map((option) => ({ value: option, label: option }))}
            onChange={handleDropdownChange}
            value={selectedOption}
            className="btn btn-md w-50 mx-auto"
          />
        </Col>
      </Row>
      {selectedOption && (
        <Row>
          <Col>
            <h3>Form</h3>
            {renderForm()}
          </Col>
          <Col>
            <h3>Selections</h3>
            {Object.keys(selections).map((fieldName) => (
              <div key={fieldName}>
                <strong>{fieldName}:</strong>
                {selections[fieldName].map((selected) => (
                  <span key={selected.value}>{selected.value}, </span>
                ))}
              </div>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};
