import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './BasicForm.css';

function BasicForm({ signin }) {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e)}
          name="email"
          type="email"
          placeholder="ex : rizki@gmail.com"
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e)}
          name="password"
          type="password"
          placeholder="Insert Password"
        />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button variant="primary" id="button-login" onClick={() => signin(form)}>
          Sign in
        </Button>
      </div>
    </Form>
  );
}

export default BasicForm;
