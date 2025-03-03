import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const Cart = ({ cart, handleRemoveFromCart, handleCloseModal }) => {
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  const handleCheckout = () => {
    // Example: Clear the cart and show an alert
    alert('Checkout successful!');
    handleCloseModal();  // Close the modal after checkout
    // Optionally, clear the cart after checkout
    // setCart([]);  // You can handle this by lifting state up
  };

  const handleCancel = () => {
    handleCloseModal();  // Just close the modal without doing anything
  };

  return (
    <Modal show={cart.length > 0} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <div className="d-flex justify-content-between">
                <span>{item.title}</span>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="mt-3 text-center">
          <strong>Total: ${totalPrice.toFixed(2)}</strong>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleCheckout}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
