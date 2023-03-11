/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AlertMessage from '../AlertMessage';
import './BasicForm.css';

function BasicForm({ signin, register }) {
  const [toRegister, setToRegister] = useState(false);
  const [alertActive, setAlertActive] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [conditionAlert, setConditionAlert] = useState('success');
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

  const handleToRegister = () => {
    if (toRegister) {
      setToRegister(false);
    } else {
      setToRegister(true);
    }
  };

  const submit = () => {
    const { name, email, password } = form;
    if (toRegister) {
      register({ name, email, password }, setAlertActive, setAlertMessage, setConditionAlert);
    } else {
      signin({ email, password });
    }
  };
  console.log(alertActive);
  return (
    <Form>
      {alertActive && <AlertMessage condition={conditionAlert} message={alertMessage} />}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {toRegister && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => onChange(e)}
              name="name"
              type="text"
              placeholder="ex : rizki"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        )}
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e)}
          name="email"
          type="email"
          placeholder="ex : rizki@gmail.com"
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e)}
          name="password"
          type="password"
          placeholder="Insert Password"
        />
      </Form.Group>
      <div className="d-flex justify-content-center mb-5">
        <Button disabled={alertActive} variant="primary" id="button-login" onClick={() => submit()}>
          Sign in
        </Button>
      </div>
      <Form.Text className="text-muted">
        {toRegister ? 'you have account ?' : 'You dont have account ?'}{' '}
        <span className="button-link" onClick={handleToRegister}>
          {toRegister ? 'Sign in' : 'Register'}
        </span>
      </Form.Text>
    </Form>
  );
}

export default BasicForm;
