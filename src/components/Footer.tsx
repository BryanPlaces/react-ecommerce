import { Col, Row, Container } from "react-bootstrap";

const Footer = () => (
    <footer className="bg-dark text-light py-3 mt-4">
    <Container>
      <Row className="text-center">
        <Col>
          <p className="mb-0">&copy; {new Date().getFullYear()} Mi Sitio Web</p>
        </Col>
      </Row>
    </Container>
  </footer>
  );

export default Footer;