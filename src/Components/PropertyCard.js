import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Card.css';

const PropertyCard = ({ ...props }) => {
    let sqftMo = (parseInt((props.property.baseRent.replace(/[\$|\,]/g, '')))/props.property.sqft).toFixed(2)
    let sqftYear = (sqftMo*12).toFixed(2)

    return (
    <div class="property-card" style={{}} onClick={() => {props.handleClick(props.property.id)}}>
        <Container className="upper-card">
            <Row>
                <Col>
                    <h5>{props.property.name}</h5>
                </Col>
            </Row>
        </Container>
        <Container className="lower-card">
            <Row className="top-row">
                <Col xs={8}>
                    <p className="text-left">
                    <strong>
                        {props.property.address1}<br/>
                        {props.property.address2}
                    </strong>
                    </p>
                </Col>
                <Col xs={4}>
                    <p className="text-right">
                        <strong>{props.property.baseRent}</strong>
                    </p>
                </Col>
            </Row>
            <Row className="bottom-row">
                <Col xs={4}>
                    <p className="text-left">
                        <strong>{props.property.sqft} sqft.</strong>
                    </p>
                </Col>
                <Col xs={4}>
                    <p className="text-center">
                        <strong>{sqftMo} sqft/mo</strong>
                    </p>
                </Col>
                <Col xs={4}>
                    <p className="text-right">
                        <strong>{sqftYear} sqft/year</strong>
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
    );
  };

  export default PropertyCard;

