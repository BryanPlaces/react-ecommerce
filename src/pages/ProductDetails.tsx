import { useProduct } from "../hooks/useProduct";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image, Alert } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Product } from "../types/types";

const ProductDetails = () => {

  const { productId } = useParams<{ productId: string }>();
  const { product, getProductById } = useProduct();
  const [ showAlert, setShowAlert ]= useState(false);

  const { addProductToCart } = useCart();

  const addProduct = (product: Product) => {
    setShowAlert(true);
    addProductToCart(product)
  };

    useEffect(() => {
      if (productId) {
        getProductById(parseInt(productId));
      }
    }, [productId, getProductById]);

    if (!product) {
      return <Container className="text-center">Loading...</Container>
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

          { showAlert &&
            <Alert key='info' variant='info'>
              Product added to your cart.
            </Alert>
          }

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