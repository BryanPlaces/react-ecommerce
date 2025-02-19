import { Button, Card, Col, Row, Image, ButtonGroup } from "react-bootstrap";
import { CartProduct } from "../../types/types";
import { useCart } from "../../context/CartContext";
import DeleteItemModal from "./DeleteItemModal";

const ProductItemCart = ({ product }: { product: CartProduct}) => {

  const { updateProductQuantity } = useCart();

  return (
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
  );
}

export default ProductItemCart;