import React from "react";
import './footer.css'
function Footer(){
    return(
        <>
        <div className="footer container-fluid pt-5">
            <div className="row">
                <div className="col-md-6 col-sm-11 col-11 ml-2">
                    <h2 className="newsletter ">Subscribe for the latest <br/> newsletter</h2>
                </div>
                <div className="col-md-6 col-sm-11 col-11">
                    <form className="form control d-flex col-md-10 newsletter-form">
                        <input className="p-2 form-control " type="text" placeholder="your email" />
                        <button type="submit" className="btn p-2 btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="row text-white bg-black p-3">
                <div className="col-md-3 col-sm-2 col=4">
                    <ul className="list-unstyled footer-info">
                        <li>Company info</li>
                        <li>About us</li>
                        <li>We are Hiring</li>
                        <li>Location</li>
                    </ul>
                </div>
                <div className="col-md-5 col-sm-6 col=4">
                    <ul className="list-unstyled "> 
                        <li>Support</li>
                        <li>Frequently asked questions (FAQS)</li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 col=4">
                    <p>Most popular mode of payment</p>
                    <h1>M-PESA</h1>
                </div>
            </div>
            <div className="credits row">
                <div className="m-auto col-md-6 col-sm-8  pt-2">
                    <p className="text-center">&copy; easymart all right reserved</p>
                </div>
            </div>
        </div>
    </>
    )
}
export default Footer