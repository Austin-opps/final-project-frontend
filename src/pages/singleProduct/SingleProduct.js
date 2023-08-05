import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ImageFullScreen from "../ImageFullScreen/ImageFullScreen";
import './singleProduct.css'

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentMessage, setCommentMessage] = useState("");
  const[isFullScreen,setIsFullScreen] = useState(false)

  const { id } = useParams();

  useEffect(() => {
    fetch(`/products/${id}`)
      .then((response) => response.json())
      .then((data) => {setProduct(data) ;console.log(data)})
      .catch((error) => console.error("Error fetching product:", error));

    fetch(`/testimonials/${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [id]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const handlePostComment = () => {
    const userId = JSON.parse(localStorage.getItem("userId")) || null;
    const name = JSON.parse(localStorage.getItem("name")) || "";

    const newComment = {
      id: comments.length + 1,
      message: commentMessage,
      userId: userId,
      name: name,
    };

    setComments([...comments, newComment]);
    setCommentMessage("");
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };
  if (!product) {
    return <div>Loading...</div>;
  }
  //show inlarge individual images high quality
  function showImageFullScreen(e){
    e.preventDefault()
    setIsFullScreen(true)
    // console.log(e.target);
  }
  function closeImageFullScreen(){
    setIsFullScreen(false)
  }

  return (
    <div className="container  pt-5">
    <div className="product-details bg-white rounded">
    <div className="row pt-3 pl-3"><h4>Product Details</h4></div>
     <div className="row mt-2">
     <div className="col-sm-12 col-12 col-md-7 d-flex">
        <div  className="col-7 d-flex justify-content-center">
          <img className="img-fluid" src={product.image} alt={product.name}/>
        </div>
        <div  className="col-5 d-flex flex-wrap ">
          {product.galleryThumbnails.map((thumbnail)=>(
            <div onClick={(e)=>showImageFullScreen(e)}  className="product-thumbnails h-10rem border flex-item col-6">
              <img className="img-fluid" src={thumbnail.image} alt='sample'/>
              <div className="text-overlay"> click</div> 
            </div>
          ))
          }
          
      </div>
      
      { isFullScreen && (
        <ImageFullScreen imageUrl={product.galleryThumbnails[1].image } onClose={closeImageFullScreen} />
      )

      }
      </div>
      <div className="col-sm-12 col-12 col-md-5">
      <h2>{product.name}</h2>
        <div className="row">
          <p>{product.description}</p>
          <p className="lead">Price: <span className="ksh"><sub>KES.</sub>{Math.round(product.price)}</span></p>
          <div className="col-12 d-flex justify-content-evenly">
          <button className="btn btn-success border shadow" onClick={addToCart}>Add to Cart</button>
          <Link to="/cart">
            <button className="btn  btn-danger shadow ">View Cart</button>
          </Link>
          </div>
        </div>
      </div>
     </div>
    </div>
        <div className="product-reviews container mt-3">
           <div className="row "><h3 className="col-5 text-md text-sm text-xs mx-auto  font-weight-bolder">What Our Customers Say</h3></div>
        <div className="row d-flex justify-content-evenly">
        {comments.length > 0 ? (
          <ul className="bg-white col-6 col-md-3 col-sm-4 flex-item">
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.message}</p>
                <p>Posted by: {comment.name}</p>
                {comment.userId ===
                  JSON.parse(localStorage.getItem("userId")) && (
                  <button onClick={() => handleDeleteComment(comment.id)}>
                    Delete
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
        </div>
      <div>
        <h3>Post a Comment</h3>
        <input
          type="text"
          placeholder="Your comment..."
          value={commentMessage}
          onChange={(e) => setCommentMessage(e.target.value)}
        />
        <button onClick={handlePostComment}>Post Comment</button>
      </div>
     </div>
    </div>
  );
};

// const gridCont = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: "20px",
// };

// const gridItemStyle = {
//   padding: "10px",
//   textAlign: "center",
// };

// const imageStyle = {
//   maxWidth: "100%",
//   maxHeight: "200px",
// };

export default SingleProduct;
