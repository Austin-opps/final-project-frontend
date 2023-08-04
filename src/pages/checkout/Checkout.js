import React from "react";
import './checkout.css'
function Checkout(){
    return (
        <>
        <div className="row container-fluid">
           <div className="bg-white shadow mx-auto col-md-6 col-11 col-sm-8 row d-flex  m-5 p-0 rounded">
               <div className="col-md-8 col-sm-11 mx-auto p-2"> 
                   <h4>Select payment method</h4>
                   <div className="row ">
                        <div className="col-md-11 p-0 mx-auto">
                            <div className="row">
                            <button className="col-8 mx-auto col-md-3 col-sm-8 shadow border col-md-3 col-sm-2 checkout-btn  bg-light rounded m-1">M-PESA</button>
                            <button className="col-8 mx-auto col-md-3 col-sm-8 shadow border col-md-5 col-sm-2 checkout-btn  bg-light rounded m-1"> CREDIT CARD</button>
                            <button className="col-8 mx-auto col-md-3 col-sm-8 shadow border col-md-3 col-sm-2 checkout-btn  bg-light rounded m-1">PAYPAL</button>
                            </div>
                        </div>
                   </div>
               </div>
               <div className="col-11 col-md-4 col-sm-8 mt-2">
                   <div className="row">
                    <h5>Order Summary</h5>
                   <div>
                   </div>
                   <button type="submit" className="btn shadow text-danger border col-11 m-3">Submit</button>
                </div>
               </div>
           </div>
       </div>
       </>
    )
}
export default Checkout