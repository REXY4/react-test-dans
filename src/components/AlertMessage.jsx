/* eslint-disable no-unused-vars */
import Alert from 'react-bootstrap/Alert';

function AlertMessage({ condition, message }) {
  return (
    <>
      {['danger', 'success']
        .filter((fil) => fil === condition)
        .map((variant) => (
          <Alert key={variant} variant={variant}>
            {message}
          </Alert>
        ))}
    </>
  );
}

export default AlertMessage;
