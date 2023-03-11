import './CardLogin.css';
import { Card, Image } from 'react-bootstrap';
import BasicForm from './BasicForm';
import Logo from '../../assets/image/GitHub_Logo.png';

const CardLogin = ({ signin }) => {
  return (
    <Card className="card-container">
      <Card.Body>
        <div className="d-flex justify-content-center mb-4">
          <Image src={Logo} alt="logo" className="logo" />
        </div>
        <BasicForm signin={signin} />
      </Card.Body>
    </Card>
  );
};

export default CardLogin;
