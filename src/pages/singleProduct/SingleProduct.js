// import React, { useEffect, useState } from "react"

// function singleProduct() {

//     const [cart, setCart] = useState([]);
//     const [similarProducts, setSimilarProducts] = useState([]);
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState("");

//     useEffect(() => {
//         const fetchSimilarProducts = async () => {
//           try {
//             const categoryId = product.categoryId; 
//             const API_URL = `http://localhost:3000/products?categoryId=${categoryId}`;
//             const response = await fetch(API_URL);
//             const data = await response.json();
    
//             setSimilarProducts(data.slice(0, 4)); 
//           } catch (error) {
//             console.error('Error fetching similar products:', error);
//           }
//         };
    
//         fetchSimilarProducts();

//         const fetchComments = async () => {
//             try {
//               const productId = product.id; 
//               const API_URL = `http://localhost:3000/product/:id/testimonials${productId}`;
//               const response = await fetch(API_URL);
//               const data = await response.json();
      
//               setComments(data);
//             } catch (error) {
//               console.error('Error fetching comments:', error);
//             }
//           };
      
//           fetchComments();
//       }, [product]);

//   const addToCart = () => {
//     setCart([...cart, product]);
//   };

//   const handleNewCommentChange = (event) => {
//     setNewComment(event.target.value);
//   };

//   const postComment = () => {
//     const productId = product.id; 
//     const API_URL = `http://localhost:3000/products/testimonils`;
//     const newCommentData = { productId, text: newComment };

//     fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newCommentData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setComments(data);
//         setNewComment(""); // Clear the input field after posting the comment
//       })
//       .catch((error) => console.error('Error posting comment:', error));
//   };

//   return (
//     <div className="product-details-container">
//       <div className="product-details">
//         <h1>{product.name}</h1>
//         <img src={product.image} alt={product.name} />
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button onClick={addToCart}>Add to Cart</button>
//       </div>

//       <div className="similar-products-grid">
//         {similarProducts.map((similarProduct) => (
//           <div key={similarProduct.id} className="similar-product">
//             <img src={similarProduct.image} alt={similarProduct.name} />
//             <p>{similarProduct.description.substring(0, 30)}{similarProduct.description.length > 30 ? '...' : ''}</p>
//           </div>
//         ))}
//       </div>

//       <div className="customer-comments">
//         <p className="underline-center">What our customers say</p>
//         <div className="comments-container">
//           {comments.map((comment) => (
//             <div key={comment.id} className="comment">
//               <p>{comment.text}</p>
//             </div>
//           ))}
//         </div>
//         <div className="new-comment-container">
//           <input
//             type="text"
//             placeholder="Leave a comment"
//             value={newComment}
//             onChange={handleNewCommentChange}
//           />
//           <button onClick={postComment}>Post Comment</button>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default singleProduct