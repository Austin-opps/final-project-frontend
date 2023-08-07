import React from "react";
import "./ImageFullScreen.css";

const ImageFullScreen = ({ imageUrl, onClose }) => {
  return (
    <div className="image-full-screen" onClick={onClose}>
      <img src={imageUrl} alt="Full Screen" />
    </div>
  );
};

export default ImageFullScreen;
