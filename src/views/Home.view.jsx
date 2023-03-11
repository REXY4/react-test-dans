/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row, Form, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import FormFilter from '../components/FormFilter';
import { getAllData, getDetail } from '../actions/reqruitment';
import { DateValue } from '../utils/date';

const Home = ({ getAllData, req, getDetail }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    location: '',
    description: '',
    full_time: false,
    page: ''
  });
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.name === 'full_time' ? e.target.checked : e.target.value
    });
  };
  const onSubmit = () => {
    getAllData(form);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <FormFilter
            onChange={(e) => onChange(e)}
            name="description"
            label="Job Description"
            placeholder="Filter by title,companies, expertise"
          />
        </Col>
        <Col md={4}>
          <FormFilter
            onChange={(e) => onChange(e)}
            name="location"
            label="Location"
            placeholder="Filter by City,state,zip code or Country"
          />
        </Col>
        <Col md={2}>
          <Form.Check
            // checked={fullTime === 'full'}
            id="default"
            label="FULL_TIME"
            name="full_time"
            onChange={(e) => onChange(e)}
          />
        </Col>
        <Col md={2}>
          <Button onClick={onSubmit}>Search</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={12}>
          <Card>
            <Card.Body
              style={{
                padding: '20px'
              }}
            >
              <Row>
                <h1 className="title-joblist">Job List</h1>
                <hr />
              </Row>
              {req &&
                req.map((item, i) => {
                  return (
                    <Row key={i}>
                      <Col md={12} className="d-flex justify-content-between">
                        <div>
                          <h1 onClick={() => getDetail(item.id, navigate)} className="title-job">
                            {item.title}
                          </h1>
                          <p>
                            <span className="text-company">{item.company}</span>
                            {' - '}
                            <span className="time">{item.type}</span>
                          </p>
                        </div>
                        <div>
                          <h3 className="city">{item.location}</h3>
                          <span className="text-company">{DateValue(item.created_at)}</span>
                        </div>
                      </Col>
                      <hr />
                    </Row>
                  );
                })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateProps = (state) => {
  return {
    req: state.req.data,
    token: state.auth.token
  };
};

export default connect(mapStateProps, { getAllData, getDetail })(Home);
