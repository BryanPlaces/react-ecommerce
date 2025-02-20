import { Accordion, Col, Container, Row } from "react-bootstrap";
import { PaymentMethodForm, ResumeCart, UserInfoForm } from "../components";
import { useState } from "react";
import { AccordionEventKey, AccordionSelectCallback } from "react-bootstrap/esm/AccordionContext";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  
  const [activeKey, setActiveKey] = useState("0");
  const { isFormValid } = useCart();

  const handleAccordionSelect: AccordionSelectCallback = (eventKey: AccordionEventKey) => {
    if (eventKey === "1" && !isFormValid()) {
      return;
    }
    setActiveKey(eventKey?.toString() || "0");
  };

  return (
    <Container className="my-5">
      <Row>
        <Col sm={12} md={8} className="mb-4">
          <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Shipping Information</Accordion.Header>
              <Accordion.Body>
                <UserInfoForm setActiveKey={setActiveKey} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Payment method</Accordion.Header>
              <Accordion.Body>
                <PaymentMethodForm />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col sm={12} md={4}>
          <ResumeCart />
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;