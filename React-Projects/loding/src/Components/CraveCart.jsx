import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CraveCart = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Product A", img:"tony.jpg", price: 10 },
    { id: 2, name: "Product B", img:"tony.jpg", price: 15 },
    { id: 3, name: "Product C", img:"tony.jpg", price: 20 },
  ];

  // State to manage cart items
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Calculate the total price of the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CraveCart</h1>
      <div className="row">
        {/* Product List */}
        <div className="col-md-6">
          <h2>Products</h2>
          <ul className="list-group">
            {products.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              > <img src={product.img} alt="tony" style={{height:'100px'}} />
                <span>
                  {product.name} - ${product.price}
                </span>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => addToCart(product)}
                >
                  <i className="bi bi-cart-plus"></i> Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div className="col-md-6">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p className="text-muted">Your cart is empty.</p>
          ) : (
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {item.name} - ${item.price} x {item.quantity}
                  </span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="bi bi-trash"></i> Remove
                  </button>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CraveCart;