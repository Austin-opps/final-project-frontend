import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearch = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(searchTerm === "" ? products : filteredProducts);
    setCurrentPage(1); // Reset current page to the first page after search
  };

  // Get the index of the first and last products of the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
        {currentProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            style={productLinkStyle}
          >
            <div style={productCardStyle}>
              <h2>
                {product.name.substring(0, 30)}
                {product.name.length > 30 ? "..." : ""}
              </h2>
              <img src={product.image} alt={product.name} style={imageStyle} />
              <p>
                {product.description.substring(0, 30)}
                {product.description.length > 30 ? "..." : ""}
              </p>
              <p>Price: Ksh.{Math.round(product.price)}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        {/* Pagination controls */}
        <button onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>
          Previous
        </button>
        <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // Create a grid layout with four columns
  gridGap: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))", // Adjusted grid columns to fit the screen size
  gridGap: "20px",
};

const productCardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
  width: "100%", // Adjusted width to take the whole available space within each column
  maxWidth: "400px", // Set a maximum width for product cardsn
};

const productLinkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "200px", // Set a maximum height for the product images
  objectFit: "cover", // Maintain aspect ratio and cover the container
};

export default Product;
