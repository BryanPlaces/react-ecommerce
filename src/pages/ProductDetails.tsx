import { Container } from "react-bootstrap";
import { useProduct } from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductDetails = () => {

  const { productId } = useParams<{ productId: string }>();
  const { product, getProductById } = useProduct();
  //const product = getProductById(1);

  useEffect(() => {
    if (productId) {
      getProductById(parseInt(productId));
    }
  }, [productId, getProductById]);

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>

      <Container>
        <h1>Detalle del producto</h1>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      </div>
      </Container>
    </>
  );
}

export default ProductDetails;