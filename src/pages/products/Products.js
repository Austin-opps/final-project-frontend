import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from the backend API
    fetch('/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={gridContainerStyle}>
        {products.map((product) => (
          <div key={product.id} style={productCardStyle}>
            <h2>{product.name.substring(0, 30)}{product.name.length > 30 ? '...' : ''}</h2>
            <img src={product.image} alt={product.name} style={imageStyle} />
            <p>{product.description.substring(0, 30)}{product.description.length > 30 ? '...' : ''}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 400px)',
  gridGap: '20px', 
};

const productCardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'center',
  width: '400px', 
};

// const imageStyle = {
//   width: '100%', 
// };
const imageStyle = {
    maxWidth: '100%', 
    maxHeight: '200px', 
  };
