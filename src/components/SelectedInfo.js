import React from "react";
import Button from 'react-bootstrap/Button';
import { Card, Col, Container, Row } from 'react-bootstrap';

const SelectedInfo = ({ selectedOption, selectedValues }) => {
  return (
    <div>
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title> </Card.Title>
              <Card.Text>
                    {/*<h4>Información seleccionada:</h4>*/}
                    {selectedValues.map((selected, index) => (
                        <div key={index}>
                        {selectedOption}: {selected.label}
                        </div>
                    ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    </div>
  );
};

export default SelectedInfo;
