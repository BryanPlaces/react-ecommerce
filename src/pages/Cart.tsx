import { Card, Col, Container, Row, Image, ButtonGroup, Button, Modal } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import DeleteItem from "../components/icons/DeleteItem";
import { useState } from "react";

const DeleteItemModal = ({ productId }: { productId: number }) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { deleteProduct } = useCart();

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <DeleteItem />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this product from your cart?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={ () => deleteProduct(productId) }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const Cart = () => {

  const { productsCart, updateProductQuantity } = useCart();

  const subtotal = productsCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const shippingCost: number = 0;
  const total: number = subtotal + shippingCost;

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={8}>
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

                        <div className="d-flex align-items-center mt-2 gap-2">
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

                          <DeleteItemModal productId={product.id} />
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
          </Col>





          {/* Resumen de compra */}
          <Col sm={12} md={4}>
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
          </Col>







        </Row>
      </Container>

    </>
  );
}

export default Cart;