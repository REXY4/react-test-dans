import { Col, Row, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import CardLogin from '../components/home/CardLogin';
import { authLogin, register } from '../actions/auth';

function MainView({ authLogin, register }) {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <CardLogin signin={authLogin} register={register} />
        </Col>
      </Row>
    </Container>
  );
}

export default connect(null, { authLogin, register })(MainView);
