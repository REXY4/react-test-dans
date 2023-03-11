import './Navbar.css';
import { Image, Navbar, Container, Button } from 'react-bootstrap';
import Logo from '../assets/image/GitHub_Logo_White.png';
// CgProfile

function Navbars({ isLogin, name = 'user', logout }) {
  return (
    <Navbar expand="lg" variant="dark" className="navbar-basic">
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="logo" className="image-basic" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isLogin && (
            <Navbar.Text className="name">
              <span style={{ paddingRight: '20px' }}>{name}</span>{' '}
              <Button variant="danger" onClick={logout}>
                Logout
              </Button>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
