import { Card, Col, Row } from "react-bootstrap";
import { Product } from "../types/types";
import { Link } from "react-router-dom";
import { useProductFilter } from "../context/ProductFilterContext";

const ProductsList = ({ products }: { products: Product[] }) => {

  const { categoryFilter } = useProductFilter();

  const filteredProducts = categoryFilter === 'all'
    ? products
    : products.filter(product => product.category === categoryFilter);
    
  return (
    <Row>
      {filteredProducts.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
          <Card className="h-100">
            <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Card.Img variant="top" src={product.image} height="200" style={{ objectFit: "contain" }} />
            </Link>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="product-title m-0">
                  <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {product.title}
                  </Link>
                </Card.Title>
                <span className="product-price">${product.price}</span>
              </div>
              <Card.Text className="product-description">
                {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList