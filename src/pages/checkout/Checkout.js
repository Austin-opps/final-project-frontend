import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const totalAmount = new URLSearchParams(location.search).get("total");

  const [paymentMode, setPaymentMode] = useState("visa"); // Default payment mode
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiration: "",
    cvv: "",
    phoneNumber: "",
  });

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
    // Clear form data when changing payment mode
    setFormData({
      cardNumber: "",
      cardName: "",
      expiration: "",
      cvv: "",
      phoneNumber: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCVVChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setFormData({
      ...formData,
      cvv: numericValue,
    });
  };

  return (
    <section className="gradient-custom">
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-7 col-lg-5 col-xl-4">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-4">
                <form>
                  <p>Total Amount: Ksh{totalAmount} </p>
                  <div className="mb-3">
                    <label htmlFor="paymentMode" className="form-label">
                      Select Payment Mode
                    </label>
                    <select
                      className="form-select"
                      id="paymentMode"
                      value={paymentMode}
                      onChange={handlePaymentModeChange}
                    >
                      <option value="visa">Visa Card</option>
                      <option value="mpesa">M-Pesa</option>
                      {/* <option value="cash">Master Card</option> */}
                    </select>

                    {/* Conditional rendering for form inputs */}
                    {paymentMode === "visa" && (
                      <>
                        <div className="form-outline mt-3">
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className="form-control form-control-lg"
                            placeholder="Card Number"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-label" htmlFor="cardNumber">
                            Card Number
                          </label>
                        </div>
                        <div className="form-outline mt-3">
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            className="form-control form-control-lg"
                            placeholder="Cardholder's Name"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-label" htmlFor="cardName">
                            Cardholder's Name
                          </label>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        className="form-control form-control-sm"
                        placeholder="MM/YYYY"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        pattern="^(0[1-9]|1[0-2])\/20[0-9]{2}$" // Format MM/YYYY
                        required
                      />
                      <label className="form-label" htmlFor="typeExp">
                        Expiration
                      </label>
                    </div>
                    <div className="form-outline">
                      <input
                       type="password"
                       id="cvv"
                       name="cvv"
                       className="form-control form-control-sm"
                       placeholder="CVV"
                       value={formData.cvv}
                       onChange={handleCVVChange} // Use the custom change handler
                       minLength="3"
                       maxLength="3"
                       required
                      />
                      <label className="form-label" htmlFor="typeText2">
                        Cvv
                      </label>
                    </div>
                  </div>

                      </>
                    )}

                    {paymentMode === "mpesa" && (
                      <div className="form-outline mt-3">
                        <input
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="form-control form-control-lg"
                          placeholder="Phone Number"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    )}

                    {/* Confirm payment button */}
                    <button
                      type="button"
                      className="btn btn-info btn-sm m-3 p-2 btn-rounded"
                    >
                      <i className="fas fa-arrow-right"></i>
                      Confirm Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
