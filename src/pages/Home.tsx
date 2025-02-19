import { Link } from "react-router-dom";
import { Button, Container, Image } from "react-bootstrap";
import { useCategory } from "../hooks/useCategory";
import hero from '../assets/hero.png';
import "./../styles/Products.css";
import {Categories, ProductsList} from "../components";

const Home = () => {

  const { categories } = useCategory();

  return (
    <>
      <Container>
        <Image src={ hero } fluid />
      </Container>

      <Container className="text-center my-5">
        <h2 className="mb-5">Our Categories</h2>
        <Categories categories={categories} withNavigate={ true } />
      </Container>

      <Container className="text-center my-5">
        <h2 className="mb-5">Featured products</h2>
        <ProductsList showFeaturedProducts={ true } />
      </Container>

      <Container className="text-center my-5">
        <Link to={`/products`} className="text-decoration-none">
          <Button variant="outline-dark" className="w-50 py-3 mx-auto">
            See more products
          </Button>
        </Link>
      </Container>
    </>
  );
}

export default Home;