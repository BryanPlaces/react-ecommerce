import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import ShopingCart from "./icons/ShopingCart";
import { useCart } from "../context/CartContext";

const NavbarComponent = () => {

  const { productsCart } = useCart();

  return (
    <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          E-COMMERCE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto mb-2 mb-lg-0">
            <Nav.Link as={NavLink} to="/" active>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>
          </Nav>
          <div className="buttons">
            {/* <Button as={NavLink} to="/login" variant="outline-dark" className="me-2">
              <FaSignInAlt className="me-1" /> Login
            </Button>
            <Button as={NavLink} to="/register" variant="outline-dark" className="me-2">
              <FaUserPlus className="me-1" /> Register
            </Button> */}
            <NavLink to="/cart">
              <Button variant="outline-dark">
                <ShopingCart /> <Badge bg="danger" style={{fontSize: '10px'}}>{ productsCart.length }</Badge>
              </Button>
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}

export default NavbarComponent;