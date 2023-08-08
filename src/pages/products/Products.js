import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
// import './products.css'

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


  
  //set route to single product
    const navigate  = useNavigate()

 
  return (
    <div className="container-fluid">
      <div className=" p-4 col-8 co-md-4 col-sm-8 mx-auto d-flex justify-content-center">
        <input className="form-control"
          type="text"
          placeholder="Search products by category or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn border " onClick={handleSearch}>Search</button>
      </div>
      
      <div className="product-container row d-flex flex-wrap justify-content-center">
        {currentProducts.map((product)=>(
          <ProductCard key={product.id} product={product} navigate={navigate} />
        )) 
        }
     </div>
     {/* bootstrap cards */}

      <div className="row p-5">
        {/* Pagination controls */}
        <div className="col-5 mx-auto d-flex justify-content-center">
        <button className="btn shadow border btn-dark" onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>Previous</button>
        <button className="btn shadow border btn-dark" onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>Next</button>
        </div>

      </div>
    </div>
  );
};


export default Product;
