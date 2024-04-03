import React from "react";
import { Form } from "react-bootstrap";

const BasicDetails = ({ basicDetails, setBasicDetails }) => {
  const handleBasicDetailsChange = (e) => {
    setBasicDetails({
      ...basicDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleBasicDetailsChange}
          value={basicDetails.name}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleBasicDetailsChange}
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          onChange={handleBasicDetailsChange}
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="address"
          onChange={handleBasicDetailsChange}
        />
      </Form.Group>
      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          onChange={handleBasicDetailsChange}
        />
      </Form.Group>
      <Form.Group controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          onChange={handleBasicDetailsChange}
        />
      </Form.Group>
      <Form.Group controlId="pincode">
        <Form.Label>Pincode</Form.Label>
        <Form.Control
          type="text"
          name="pincode"
          onChange={handleBasicDetailsChange}
        />
      </Form.Group>
      <Form.Group controlId="intro">
        <Form.Label>Introductory Paragraph</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="intro"
          onChange={handleBasicDetailsChange}
        />
      </Form.Group>
    </Form>
  );
};

export default BasicDetails;
