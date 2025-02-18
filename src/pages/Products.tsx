import { Container } from "react-bootstrap";
import Categories from "../components/Categories";
import { useCategory } from "../hooks/useCategory";
import { useEffect } from "react";
import { useProduct } from "../hooks/useProduct";
import ProductsList from "../components/ProductsList";

const Products = () => {

  const { products, getProducts } = useProduct();
  const { categories } = useCategory();

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <Container className="text-center my-5">
        <Categories categories={categories} />
      </Container>

      <Container className="text-center my-5">
        <ProductsList products={products} />
      </Container>
    </>
  );
}

export default Products;