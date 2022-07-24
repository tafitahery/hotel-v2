import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ type, label, min, max, value, setValue }) => {
  const capitalLabel = label[0].toUpperCase() + label.slice(1);
  const id = label.split(' ').join('-');

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{capitalLabel}</Form.Label>
      <Form.Control
        type={type}
        placeholder={`Entrer ${label}`}
        min={min}
        max={max}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form.Group>
  );
};

Input.defaultProps = {
  min: null,
  max: null,
};

export default Input;
