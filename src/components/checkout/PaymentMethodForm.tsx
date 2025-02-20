import { Button, Col, Form, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";


const PaymentMethodForm = () => {

  const { cleanCart, paymentMethod, setPaymentMethod, cardInfo, setCardInfo } = useCart();
  const navigate = useNavigate();

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const processPayment = () => {
    alert("Payment processed successfully");
    cleanCart();
    navigate('/');
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Pay with card"
          id="card-payment"
          checked={paymentMethod === "card"}
          onChange={() => setPaymentMethod("card")}
        />
      </Form.Group>

      {paymentMethod === "card" && (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Card number</Form.Label>
            <Form.Control
              type="text"
              name="cardNumber"
              placeholder="Enter your card number"
              value={cardInfo.cardNumber}
              onChange={handleCardChange}
              required
            />
          </Form.Group>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Expiration date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/AA"
                  name="expirationDate"
                  value={cardInfo.expirationDate}
                  onChange={handleCardChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Security code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CVV"
                  name="cvv"
                  value={cardInfo.cvv}
                  onChange={handleCardChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Cardholder's name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cardholder's name"
              name="cardholderName"
              value={cardInfo.cardholderName}
              onChange={handleCardChange}
              required
            />
          </Form.Group>
        </>
      )}

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Pago con PayPal"
          id="paypal-payment"
          checked={paymentMethod === "paypal"}
          onChange={() => setPaymentMethod("paypal")}
        />
      </Form.Group>

      {paymentMethod === "paypal" && (
        <div className="alert alert-dark">
          You will be redirected to PayPal to complete the payment.
        </div>
      )}

      <div className="d-flex justify-content-center">
        <Button
          variant="dark"
          type="submit"
          className="w-50"
          disabled={!paymentMethod}
          onClick={ processPayment }
        >
          Process payment
        </Button>
      </div>
    </Form>
  );
}

export default PaymentMethodForm;