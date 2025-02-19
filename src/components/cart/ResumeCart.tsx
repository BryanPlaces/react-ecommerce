import { Button, Card, Col, Row } from "react-bootstrap";
import { useCart } from "../../context/CartContext";

const ResumeCart = () => {

  const { productsCart } = useCart();

  const subtotal = productsCart.reduce((total, product) => total + product.price * product.quantity, 0);
  const shippingCost: number = 0;
  const total: number = subtotal + shippingCost;

  return (
    <Card className="sticky-top" style={{ top: "20px" }}>
      <Card.Body>
        <Card.Title>Summary</Card.Title>

        <Row className="mb-2">
          <Col>Subtotal</Col>
          <Col className="text-end">${subtotal.toFixed(2)}</Col>
        </Row>

        <Row className="mb-2">
          <Col>Shipping costs</Col>
          <Col className="text-end">
            {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
          </Col>
        </Row>

        <hr />

        <Row className="mb-3">
          <Col>
            <strong>Total</strong>
          </Col>
          <Col className="text-end">
            <strong>${total.toFixed(2)}</strong>
          </Col>
        </Row>

        <Button variant="dark" className="w-100">
          CheckOut
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ResumeCart;