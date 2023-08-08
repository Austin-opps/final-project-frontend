import React, { useState } from "react";
import './ProductCard.css'

const ProductCard = ({ product, navigate }) => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Function to switch the image on mouse over
  const switchImage = () => {
    if(isFirstImage){
        setIsFirstImage(false);
    }
  };

  // Function to revert to the original image on mouse leave
  const revertToOriginalImage = () => {
        setIsFirstImage(true);    
  };

  return (
    //impelements switch image in products
    <div
      onMouseOver={switchImage}
      onMouseLeave={revertToOriginalImage}
      onClick={() => navigate(`/products/${product.id}`)}
      className="card product-card col-md-2 col-sm-3 col-4 flex-item m-2"
    >
      <div className="product-card-image text-center">
      {product.galleryThumbnails && product.galleryThumbnails.length > 0 ? (
  <img
    className="img-fluid img"
    src={isFirstImage ? product.galleryThumbnails[0].image : product.galleryThumbnails[1].image}
    alt={isFirstImage ? "Image 1" : "Image 2"}
  />
) : (
  <p>No images available.</p>
)}

      <div className="card-body p-1 text-center">
              <p className="card-title m-0 text-md text-xs  text-sm text-success">
                {product.name.substring(0, 30)}
                {product.name.length > 30 ? "..." : ""}
              </p>
              <p className="lead card-text m-0"><span className="ksh"><sup>Ksh.</sup></span>{product.price}</p>
              {/* <button className="btn col-11 shadow bg-success text-white">View Details</button> */}
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
