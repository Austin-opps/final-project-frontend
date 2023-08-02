import React from "react";
import './homepage.css';
import p from '../../assets/p.jpeg'
import p1 from '../../assets/p1.jpeg'
import p2 from '../../assets/p2.jpeg'
import p3 from '../../assets/p3.jpeg'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpeg'
import pic3 from '../../assets/pic3.jpeg'
import pic4 from '../../assets/pic4.jpeg'
import bigPic from '../../assets/bigPic.jpeg'
import bigPic1 from '../../assets/bigPic1.jpeg'
import bigPic3 from '../../assets/bigPic3.jpeg'
import shoe from '../../assets/shoe.jpeg'
import dress from '../../assets/dress.jpg'
import lady from '../../assets/lady.jpg'

function Body() {
  return (
    <>
      <div className="Welcome-message">
      <h2>Welcome to EasyMart Collections.</h2>
      <p>Where quality meets affordability.</p>
              <div className="image-gallery">
      </div>
     <div>

     </div>
     <div className="centered-container"></div>
     <h1 className="title">Popular Products</h1>
     <div className="small-images-container">
      <div className="imageContainer">
      <div>
        <img src={pic1}alt="" className="gallery-image" />
        <img src={pic2} alt="" className="gallery-image" />
        <img src={pic3 } alt="" className="gallery-image" />
        <img src={pic4 } alt="" className="gallery-image" />
        </div>
        </div>
        <img src={bigPic} alt="" className="full-width-image" />
        <div className="image-text">LOOK GOOD</div>

        <div className="small-images-container">
            <img src={p} alt="" className="gallery-image" />
            <img src={p2} alt="" className="gallery-image" />
            <img src={p3} alt="" className="gallery-image" />
            <img src={p1} alt="" className="gallery-image" />
          </div>
          </div>
          <div className="full-width-image-container">
          <img src={bigPic1} alt="" className="full-width-image" />
      </div>
      <div className="small-images-container">
            <img src={dress} alt="" className="gallery-image" />
            <img src={dress} alt="" className="gallery-image" />
            <img src={dress} alt="" className="gallery-image" />
            <img src={dress} alt="" className="gallery-image" />
          </div>
          <div className="flex-box">
          <div className="small-image">
          <img src={lady} alt="" className="gallery-image small-image" />
          <div>
          <p>“In this life, make sure you looks good always!”~ unknown</p> 
          <p>
            We bring you a platform where all your needs are sorted fast and smoothly. Feel free to interact with our platform and leave us a comment after your shopping experience. Good luck.
          </p>
        </div>
        </div>
      </div>
      </div>

      <div className="full-width-image-container">
          <img src={bigPic3} alt="" className="full-width-image" />
    </div>
    </>
  );
}
export default Body; 