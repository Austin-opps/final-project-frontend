import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleSearch = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(searchTerm === '' ? products : filteredProducts);
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        <input
          type="text"
          placeholder="Search products by category or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div style={gridContainerStyle}>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} style={productLinkStyle}>
            <div style={productCardStyle}>
              <h2>{product.name.substring(0, 30)}{product.name.length > 30 ? '...' : ''}</h2>
              <img src={product.image} alt={product.name} style={imageStyle} />
              <p>{product.description.substring(0, 30)}{product.description.length > 30 ? '...' : ''}</p>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

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

const productLinkStyle = {
  textDecoration: 'none', 
  color: 'inherit', 
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '200px',
};

export default Product;
