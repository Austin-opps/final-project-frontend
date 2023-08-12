import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ImageFullScreen from "../ImageFullScreen/ImageFullScreen";
import avatar1 from '../../assets/avatar1.png'
import './singleProduct.css'

const SingleProduct = ({user, setCartItems}) => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentMessage, setCommentMessage] = useState("");
  const[isFullScreen,setIsFullScreen] = useState(false);
  const[diactivated,setDiacivated] = useState(false);

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
    setDiacivated(true)
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  // _----------------------------------------------------------------------
  // function addToCart(itemToAdd) {
  //   const updatedCartItems = cartItems.map(item => {
  //       if (item.id === itemToAdd.id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //       }
  //       return item;
  //   });
  //   setCartItems(updatedCartItems);
// -----------------------------------------------------------------

  function handlePostComment(e){
    e.preventDefault()
    // const userId = JSON.parse(localStorage.getItem("userId")) || null;
    // const name = JSON.parse(localStorage.getItem("name")) || "";
    fetch('/testimonials',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        message:commentMessage,
        product_id:product.id
      })
    })
    .then(resp=>resp.json())
    .then(review =>{setComments(review); console.log(review)
      setComments([...comments, review]);
    setCommentMessage("")
    })
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
            <div onClick={(e)=>showImageFullScreen(e)}  className="product-thumbnails flex-item col-6">
              <img className="img-fluid img-thumbnail" src={thumbnail.image} alt='sample'/>
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
          <button className="btn btn-success border shadow" disabled={diactivated} onClick={addToCart}>Add to Cart</button>
          <Link to="/cart">
            <button className="btn  btn-danger shadow ">View Cart</button>
          </Link>
          </div>
        </div>
      </div>
     </div>
    </div>
        <div className="product-reviews container mt-3">
           <div className="row "><h3 className="col-5 text-md text-sm text-xs mx-auto  font-weight-bolder">Product Reviews</h3></div>
      <div className="container-fluid">
        <div className="row m-4">
          <div className="col-10 col-md-8 col-sm- 6"><h3>New comment</h3></div>
          <div className="col-2 col-md-4 col-sm-3 d-flex justify-content-end"><button className="btn btn-primary" onClick={handlePostComment}>Post Comment</button></div>
        </div>
        <div className="row d-flex justify-content-start">
          <div className="col-2 col-md-2 col-sm-2 review-img-div  d-flex justify-content-end"><img className=" review-avatar img-fluid" src={avatar1} alt="user" /></div>
            <div className="col-9 col-md-9 col-sm-9">
                <textarea className="form-control h-100"
                type="text"
                placeholder="write message..."
                value={commentMessage}
                onChange={(e) => setCommentMessage(e.target.value)}
              />
            </div>
        </div>
        
      </div>
      <div className="row d-flex justify-content-evenly">
        {comments && comments.length > 0 ? (
          <ul className="bg-white col-6 col-md-3 col-sm-4 flex-item">
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.message}</p>
                <p>Posted by: {comment.name}</p>
                {comment.product.id ===
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
     </div>
    </div>
  );
};


export default SingleProduct;
