import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ type, label, value, setValue }) => {
  const capitalLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <Form.Group className="mb-3" controlId={label}>
      <Form.Label>{capitalLabel}</Form.Label>
      <Form.Control
        type={type}
        placeholder={`Entrer ${label}`}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form.Group>
  );
};

export default Input;
