/* eslint-disable react/no-danger */
import './Detail.css';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
// import Logo from '../assets/image/GitHub_Logo.png';

const Detail = ({ detail }) => {
  console.log(detail);
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body
              style={{
                padding: '40px'
              }}
            >
              <Row>
                <p className="location-detail">
                  {detail.type}/{detail.location}
                </p>
                <h1>{detail.title}</h1>
                <hr />
              </Row>
              <Row>
                <Col md={7}>
                  <div dangerouslySetInnerHTML={{ __html: detail.description }} />
                </Col>
                <Col md={5}>
                  <Card>
                    <Card.Header>{detail.company}</Card.Header>
                    <Card.Body>
                      <Image
                        src={detail.company_logo}
                        style={{
                          width: '100%',
                          height: '100px'
                        }}
                      />
                    </Card.Body>
                    <Card.Footer>
                      <div dangerouslySetInnerHTML={{ __html: detail.how_to_apply }} />
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateProps = (state) => {
  return {
    detail: state.req.detail
  };
};
export default connect(mapStateProps, {})(Detail);
