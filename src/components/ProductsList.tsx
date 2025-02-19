import { Col, Row } from "react-bootstrap";
import { useProductFilter } from "../context/ProductFilterContext";
import ProductItem from "./ProductItem";
import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";

const ProductsList = ({ showFeaturedProducts } : { showFeaturedProducts ?: boolean }) => {

  const { categoryFilter } = useProductFilter();
  const { products, featuredProducts, getFeaturedProducts, getProducts, getProductsByCategory } = useProduct();
    
  useEffect(() => {
    if (!showFeaturedProducts) {
      if (categoryFilter === 'all') {
        getProducts();
      } else {
        getProductsByCategory(categoryFilter);
      }
    } else {
      getFeaturedProducts();
    }
  }, [
    categoryFilter,
    getProducts,
    getProductsByCategory,
    showFeaturedProducts,
    getFeaturedProducts
  ]);

  const productsToDisplay = showFeaturedProducts ? featuredProducts : products;

  return (
    <Row>
      {productsToDisplay.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
          <ProductItem product={ product } />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList