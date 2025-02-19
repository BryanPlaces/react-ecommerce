import { Col, Container, Row } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { ProductItemCart, ResumeCart } from "../components";

const Cart = () => {

  const { productsCart } = useCart();

  return (
    <Container className="my-5">
      <Row>
        <Col sm={12} md={8}>
          {productsCart.map((product) => (
            <Col key={product.id} sm={12} className="mb-4">
              <ProductItemCart product={ product }/>
            </Col>
          ))}
        </Col>

        <Col sm={12} md={4}>
          <ResumeCart />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;