import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import { DeleteItemIcon } from "./..";

const DeleteItemModal = ({ productId }: { productId: number }) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { deleteProduct } = useCart();

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        <DeleteItemIcon />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this product from your cart?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={ () => deleteProduct(productId) }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteItemModal;