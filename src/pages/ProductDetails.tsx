import { useProduct } from "../hooks/useProduct";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Product } from "../types/types";

const ProductDetails = () => {

  const { productId } = useParams<{ productId: string }>();
  const { product, getProductById } = useProduct();

  const { addProductToCart } = useCart();

  const addProduct = (product: Product) => {
    addProductToCart(product)
  };

    useEffect(() => {
      if (productId) {
        getProductById(parseInt(productId));
      }
    }, [productId, getProductById]);

    if (!product) {
      return <div>Product not found</div>
    }

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.title}
            fluid
            style={{ height: "400px", width: "400px", objectFit: "contain" }}
          />
        </Col>
        <Col md={6}>
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <Button
            variant="outline-dark"
            className="px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </Button>
          <NavLink to="/cart">
            <Button variant="dark" className="ms-2 px-3 py-2">
              Go to Cart
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;