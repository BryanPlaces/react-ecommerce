import { Card, Col, Container, Row } from "react-bootstrap";
import { useProduct } from "../hooks/useProduct";
import { Link } from "react-router-dom";

const Home = () => {

  const { products } = useProduct();

  return (
    <>

      <Container>
        <h1>Home - Listado de productos y categorías</h1>

        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card>
                <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Card.Img variant="top" src={product.image} height="200" style={{ objectFit: "contain" }} />
                </Link>
                <Card.Body>
                <Card.Title>
                  <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {product.title}
                  </Link>
                </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;