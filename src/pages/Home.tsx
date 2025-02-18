import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useProduct } from "../hooks/useProduct";
import { useCategory } from "../hooks/useCategory";
import { Product } from "../types/types";
import hero from '../assets/hero.png';
import "./../styles/Products.css";
import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";
import { Link } from "react-router-dom";
import { useProductFilter } from "../context/ProductFilterContext";

const Home = () => {

  const { products, getProducts } = useProduct();
  const { categories } = useCategory();
  
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const { setCategoryFilter } = useProductFilter();

  useEffect(() => {
    setCategoryFilter('all');
    const fetchData = async () => {
      await getProducts();
      const selectedProductsByCategories = categories.flatMap((category) => {
        return products.filter((product) => product.category === category).slice(0, 2);
      });
      setFeaturedProducts(selectedProductsByCategories);
    };

    fetchData();
  }, [categories]);

  return (
    <>
      <Container>
        <Image src={ hero } fluid />
      </Container>

      <Container className="text-center my-5">
        <h2 className="mb-5">Our Categories</h2>
        <Categories categories={categories} />
      </Container>

      <Container className="text-center my-5">
        <h2 className="mb-5">Featured products</h2>
        <ProductsList products={featuredProducts} />
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