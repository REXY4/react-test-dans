import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormFilter({ label = '', placeholder, name, onChange }) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>{label}</InputGroup.Text>
      <Form.Control
        aria-label="First name"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default FormFilter;
