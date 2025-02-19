import { Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProductFilter } from "../context/ProductFilterContext";

const Categories = ({ categories, withNavigate = false }: { categories: string[], withNavigate?: boolean }) => {

  const navigate = useNavigate();
  const { setCategoryFilter } = useProductFilter();

  const handleClick = (category: string) => {
    setCategoryFilter(category);

    if (withNavigate) {
      navigate('/products');
      return;
    }
  }

  return (
    <Row className="justify-content-center">
      {categories.map((category, index) => (
        <Col key={index} sm={12} md={4} lg={4} xl={2} className="mb-4 d-flex justify-content-center">
          <Button onClick={ () => handleClick(category) } variant="outline-dark" className="w-100 py-3">
            {category}
          </Button>
        </Col>
      ))}
    </Row>
  );
}

export default Categories;