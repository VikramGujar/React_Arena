import React from 'react';
import ProductCard from './ProductCard';
import { Row } from 'react-bootstrap';

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <Row>
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <ProductCard product={product} handleAddToCart={handleAddToCart} />
        </div>
      ))}
    </Row>
  );
};

export default ProductList;
