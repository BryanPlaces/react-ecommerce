import { Card } from "react-bootstrap";
import { Product } from "../types/types";
import { Link } from "react-router-dom";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Card className="h-100">
        <Card.Img variant="top" src={product.image} height="200" style={{ objectFit: "contain" }} />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Card.Title className="product-title m-0">
              {product.title}
            </Card.Title>
            <span className="product-price">${product.price}</span>
          </div>
          <Card.Text className="product-description">
            {product.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ProductItem;