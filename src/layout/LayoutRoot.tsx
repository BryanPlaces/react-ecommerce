import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";

const LayoutRoot = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      
      <footer className="bg-dark text-light py-3 mt-4">
        <Container>
          <Row className="text-center">
            <Col>
              <p className="mb-0">&copy; {new Date().getFullYear()} Mi Sitio Web</p>
            </Col>
          </Row>
        </Container>
      </footer>

    </div>
  )
}

export default LayoutRoot;