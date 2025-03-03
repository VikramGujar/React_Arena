import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');

  useEffect(() => {
    // Fetch products from a fake API (fakestoreapi)
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const handleClearCart = () => {
    setCart([]); // Clear the cart
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Filter and sort products based on search and sorting
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === 'name') {
      return a.title.localeCompare(b.title);
    } else if (sort === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My-Store</Navbar.Brand>
          <Nav className="ml-auto">
            <Button variant="outline-light">
              Cart ({cart.length}) {/* Display cart count */}
            </Button>
            <Button variant="outline-light" onClick={handleClearCart} className="ml-2">
              Clear Cart {/* Button to clear cart */}
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <div className="d-flex justify-content-between mb-3">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
          />
          <select className="form-control w-25" onChange={handleSortChange}>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>

        <ProductList
          products={sortedProducts}
          handleAddToCart={handleAddToCart}
        />
      </Container>
    </div>
  );
};

export default App;
