import { Container } from "react-bootstrap";
import { useCategory } from "../hooks/useCategory";
import {Categories, ProductsList} from "../components";

const Products = () => {
  const { categories } = useCategory();

  return (
    <>
      <Container className="text-center my-5">
        <Categories categories={categories} />
      </Container>

      <Container className="text-center my-5">
        <ProductsList />
      </Container>
    </>
  );
}

export default Products;