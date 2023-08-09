import React, { useState, useEffect } from "react";
import "./admin.css";
function AdminProfile() {
  const [id, setId] = useState(""); // State to store the product ID
  const [productData, setProductData] = useState({});
  const [updateData, setUpdateData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    // Add more fields as needed
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch the product data when 'id' changes
    if (id) {
      fetch(`/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProductData(data); // Store retrieved product data
          setUpdateData(data); // Initialize updateData with product data
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [id]);

  const isUpdateButtonDisabled =
    !updateData.name ||
    !updateData.price ||
    !updateData.description ||
    !updateData.image;
  const isCreateButtonDisabled =
    !newProduct.name ||
    !newProduct.price ||
    !newProduct.description ||
    !newProduct.image;

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (isUpdateButtonDisabled) {
      return;
    }
    try {
      const response = await fetch(`/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData), // Send updated data in the body
      });

      if (response.ok) {
        console.log("Product updated successfully!");
        window.alert("Product updated successfully!");
        setUpdateData({
          name: "",
          price: "",
          category: "",
          image: "",
          description: "",
        })
        // You can perform additional actions after successful update
      } else {
        console.error("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async () => {
    // e.preventDefault();
    try {
      const response = await fetch(`/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Product deleted successfully!");
        setProductData({}); // Clear the product data after deletion
        setUpdateData({}); // Clear the updateData
        window.alert("Product deleted successfully!");

      } else {
        console.error("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (isCreateButtonDisabled) {
      return;
    }
    try {
      const response = await fetch("/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: newProduct }), // Send the new product data
      });

      if (response.ok) {
        console.log("Product created successfully!");

        setNewProduct({
          name: "",
          price: "",
          category: "",
          image: "",
          description: "",
        });
        window.alert("Product created successfully!");
        // Reset the form or perform additional actions
      } else {
        console.error("Failed to create product.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  return (
    <div>
      <div className="row p-3">
        <div className="col-11 col-md-8 col-sm-10 text-center mx-auto">
          <input
            type="text"
            placeholder="Enter Product ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="col-11 col-md-6 col-sm-10">
          {!productData ? (
            <p>Product not available</p>
          ) : (
            <>
              <div className="admin-product-card">
                <h2>{productData.name}</h2>
                <p>
                  <strong>Price:</strong> {productData.price}
                </p>
                <p>
                  <strong>Category:</strong> {productData.category}
                </p>
                <p>
                  <strong>Description:</strong> {productData.description}
                </p>
                {/* Display other product details */}
                <img src={productData.image} alt={productData.name} />
              </div>
            </>
          )}
        </div>

        <div className="col-11 col-md-6 col-sm-10">
          {!productData ? (
            <p>Product not available</p>
          ) : (
            <>
              <form className="update-form text-black">
                {/* Input fields for updating data */}
                <div className="form-row ">
                  <label>New Product Name:</label>
                  <input
                    type="text"
                    value={updateData.name}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-row">
                  <label>New Price:</label>
                  <input
                    type="number"
                    value={updateData.price}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, price: e.target.value })
                    }
                  />
                </div>
                <div className="form-row">
                  <label>New Category:</label>
                  <input
                    type="text"
                    value={updateData.category}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, category: e.target.value })
                    }
                  />
                </div>
                <div className="form-row">
                  <label>New Description:</label>
                  <input
                    type="text"
                    value={updateData.description}
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-row">
                  <label>New Image URL:</label>
                  <input
                    type="text"
                    value={updateData.image}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, image: e.target.value })
                    }
                  />
                </div>
                {/* Add more input fields for other properties */}
                <div className="row d-flex justify-content-evenly ">
                  <div className="col-4 col-md-4 flex-item">
                    <button
                      onClick={handleUpdate}
                      className={`admin-button ${
                        isUpdateButtonDisabled ? "inactive-button" : ""
                      }`}
                      disabled={isUpdateButtonDisabled}
                    >
                      Update Product
                    </button>
                  </div>
                  <div className="col-4 col-md-4 flex-item">
                    <button
                      onClick={handleDelete}
                      className={`admin-button ${
                        !productData ? "inactive-button" : ""
                      }`}
                      disabled={!productData}
                    >
                      Delete Product
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      <div className="container bg-white p-4 ">
        <div className="row ">
          <div className="col-11 col-md-8 col-sm-10 text-center mx-auto">
            <h2>Create a new product</h2>
          </div>
          <div className="col-11 col-md-8 col-sm-10 mx-auto">
            <form id="create-form">
              <label>Name:</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <label>Price:</label>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <label>Category:</label>
              <input
                type="text"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              />
              <label>Image URL:</label>
              <input
                type="text"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <div className="row mb-5">
                <div className="col-11 col-md-8 col-sm-10  ">
                  <label>Description:</label>
                  {/* <textarea className="w-100"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })

            }
          /> */}
                  <textarea
                    className="form-control"
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Add more input fields for other properties */}
                <div className="col-3 col-md-3 col-sm-3 p-2 mt-3 mr-3 ">
                  <button
                    onClick={handleCreate}
                    className={`admin-button ${
                      isCreateButtonDisabled ? "inactive-button" : ""
                    }`}
                    disabled={isCreateButtonDisabled}
                  >
                    Create Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
