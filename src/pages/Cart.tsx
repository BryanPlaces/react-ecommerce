import { Card, Col, Container, Row, Image, ButtonGroup, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Cart = () => {

  const { productsCart, updateProductQuantity } = useCart();

  return (
    <>
      <Container className="text-center my-5">
        <h1>Cart</h1>
      </Container>
      <Container>
        <Row>
          {productsCart.map((product) => (
            <Col key={product.id} sm={12} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={3} md={2}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        fluid
                        style={{ height: "100px", objectFit: "contain" }}
                      />
                    </Col>

                    <Col xs={6} md={8}>
                      <Card.Title className="product-title m-0">
                        {product.title}
                      </Card.Title>
                      <Card.Text className="product-description">
                        {product.description}
                      </Card.Text>

                      <div className="d-flex align-items-center mt-2">
                        <ButtonGroup aria-label="Cantidad">
                          <Button
                            variant="outline-secondary"
                            onClick={() => updateProductQuantity(product.id, -1)}
                            disabled={product.quantity <= 1}
                          >
                            -
                          </Button>
                          <Button variant="outline-secondary" disabled>
                            {product.quantity}
                          </Button>
                          <Button
                            variant="outline-secondary"
                            onClick={() => updateProductQuantity(product.id, 1)}
                          >
                            +
                          </Button>
                        </ButtonGroup>
                      </div>
                    </Col>

                    <Col xs={3} md={2} className="text-end">
                      <span className="product-price">${product.price}</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
}

export default Cart;