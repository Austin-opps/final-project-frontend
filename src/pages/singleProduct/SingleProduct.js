
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentMessage, setCommentMessage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetch(`/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));

    fetch(`/comments/${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [id]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const handlePostComment = () => {
    const userId = JSON.parse(localStorage.getItem('userId')) || null;
    const name = JSON.parse(localStorage.getItem('name')) || ''; 

    const newComment = {
      id: comments.length + 1,
      message: commentMessage,
      userId: userId,
      name: name, 
    };

    setComments([...comments, newComment]);

    setCommentMessage('');
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div style={productCardStyle}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} style={imageStyle} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={addToCart}>Add to Cart</button>
        <Link to="/cart">
          <button>View Cart</button>
        </Link>
      </div>
      <div>
        <h3>What Our Customers Say</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.message}</p>
                <p>Posted by: {comment.username}</p>
                {comment.userId === JSON.parse(localStorage.getItem('userId')) && (
                  <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
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
  );
};

const productCardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'center',
  width: '400px',
  height: '400px',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '200px',
};

export default SingleProduct;
