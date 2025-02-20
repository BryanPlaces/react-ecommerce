import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useCart } from "../../context/CartContext";


const UserInfoForm = ({ setActiveKey } : { setActiveKey: (key: string) => void }) => {

  const [validated, setValidated] = useState(false);
  const { userInfo, setUserInfo } = useCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setActiveKey("1")
    }
    setValidated(true);
  };

  
  return (
    <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={userInfo.name}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please, enter your name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last name(s)</Form.Label>
        <Form.Control
          type="text"
          name="lastname"
          placeholder="Enter your last name(s)"
          value={userInfo.lastname}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please, enter your last name(s).
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter your address"
          value={userInfo.address}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please, enter your address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Postal code</Form.Label>
        <Form.Control
          type="text"
          name="postalCode"
          placeholder="Enter your postal code"
          value={userInfo.postalCode}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please, enter your postal code.
        </Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button variant="dark" className="w-50" type="submit" >
          Continue
        </Button>
      </div>
    </Form>
  );
}

export default UserInfoForm;