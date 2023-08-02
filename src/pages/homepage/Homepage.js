import React from "react";
import './Body.css';
function Body() {
  return (
    <>
      <div className="homepage">
        <img src="pic.jpg" alt="" />
        <div className="text-overlay">
            <h2>
              EASYMART COLLECTIONS
            </h2>
        </div>
      </div>
      <h2>Welcome to EasyMart Collections.
        Where quality meets affordability.</h2>
              <div className="image-gallery">
     
      <div className="imageContainer">
        <img src="pic.jpeg" alt="" className="gallery-image" />
        <img src="pic1.jpg" alt="" className="gallery-image" />
        <img src="pic2.png" alt="" className="gallery-image" />
      </div>
    </div>
    </>
  );
}
export default Body;