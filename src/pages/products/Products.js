import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './products.css'

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
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
  //set route to single product
    const navigate  = useNavigate()
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search products by category or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <div className="product-container row   d-flex flex-wrap justify-content-center">
        {currentProducts.map((product)=>(
          <div id="product-card" className="card col-md-2 col-sm-6 col-6 flex-item m-2 ">
            <div className="card-image pt-1" id="card-image">
            <img className="img-fluid" src={product.image} alt={product.name}  />
            </div>
            <div className="card-body p-1 text-center" id="card-body">
              <h5 className="card-title m-0">
                {product.name.substring(0, 25)}
                {product.name.length > 30 ? "..." : ""}
              </h5>
              <p className="price-tag lead card-text m-0"><span className="ksh"><sup>Ksh.</sup></span>{product.price}</p>
              <button className="btn col-11 shadow bg-success text-white" onClick={()=>navigate(`/products/${product.id}`)}>View Details</button>
            </div>
          
          </div>
        )) 
        }
     </div>
     {/* bootstrap cards */}

      <div>
        {/* Pagination controls */}
        <button onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>Previous</button>
        <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>Next</button>
      </div>
    </div>
  );
};

// const gridContainerStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(4, 1fr)", // Create a grid layout with four columns
//   gridGap: "20px",
// };

// const productCardStyle = {
//   backgroundColor:"white",
//   border: "1px solid #ccc",
//   padding: "10px",
//   textAlign: "center",
//   width: "100%", // Adjusted width to take the whole available space within each column
// };

// const productLinkStyle = {
//   textDecoration: "none",
//   color: "inherit",
// };

// const imageStyle = {
//   maxWidth: "100%",
//   maxHeight: "200px",
// };

export default Product;
