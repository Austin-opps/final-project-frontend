import React from "react";
import './homepage.css';
import cologneBottle from '../../assets/colognebottle.jpeg'
import sweater from '../../assets/sweater.jpg'
import discount1 from '../../assets/discount1.jpg'
import discount2 from '../../assets/discount2.jpg'
import discount3 from '../../assets/discount3.jpg'
import shoe from '../../assets/shoe.jpeg'

function Body() {
  return (
    <>
    <div className="container-fluid">
      {/* header */}
      <div className="landing-image" >
        <div className="row pt-5 ">
          <div className="col-md-6 col-sm-12 col-12 p-5 intro-text">
            <h1>Welcome to EasyMart Collections.</h1>
            <p>EasyMart is a one stop shop for all your fashion needs.</p>
            <div className="d-flex justify-content-center">
            <button className="shop-btn flex-item p-3">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <section>
        {/* content */}
       
        <div className="row container-fluid">
        <div className="col-11 text-center mt-5 mb-5">
          <h4>Top Categories</h4>
        </div>
        <div className=" col-12">
          <div className="row container-fluid d-flex justify-content-around  mx-auto border">
            <div className="col-md-3 col-sm-4 col-4 categories  flex-item"><img className="category-img img-fluid" src={shoe} alt="sample" /></div>
            <div className="col-md-3 col-sm-4 col-4 categories  flex-item"><img className="category-img img-fluid" src={cologneBottle} alt="sample1" /></div>
            <div className="col-md-3 col-sm-4 col-4 categories  flex-item"><img className="category-img img-fluid" src={sweater} alt="sample2" /></div> 
          </div>
        </div>
        </div>
        
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-11 text-center mt-5 mb-5">
            <h4>Choose by Brand</h4>
          </div>
          <div className="d-flex justify-content-evenly flex-wrap">
          <div className="col-md-2 col-sm-2 col-2 flex-item border m-2 rounded p-2"><h4>Denim</h4></div>
          <div className="col-md-2 col-sm-2 col-2 flex-item border m-2 rounded p-2"><h4>outerwear</h4></div>
          <div className="col-md-2 col-sm-2 col-2 flex-item border m-2 rounded p-2"><h4>Brand 3</h4></div>
          <div className="col-md-2 col-sm-2 col-2 flex-item border m-2 rounded p-2"><h4>Brand 4</h4></div>

          </div>
        </div>
      </section>
      <section className="container-fluid mb-5">
      <div className="col-11 text-center mt-5 mb-5">
          <h4>What we have on offer</h4>
        </div>
       <div className="row d-flex justify-content-center">
        {/* cards */}
        <div className="col-5 col-md-3 col-sm-4">        
          <div className="card" id="home-card">
              <div className="card-body">
                <div className="card-title">
                  <h4>SAVE <sup>KES<span className="fs-2">1,500</span></sup></h4>
                </div>
                <div className="card-text">
                  <p>Discover our line of size-inclusive essentials across basics, dresses, denim, outerwear, and more</p>
                </div>
              </div>
              <div className="card-image">
                <img className="img-fluid" src={discount1} alt="clothes"/>
              </div>
            </div>
          </div>
          {/* cards */}
          <div className="col-5 col-md-3 col-sm-4">
          <div className="card" id="home-card">
              <div className="card-body">
                <div className="card-title">
                  <h4>SAVE <sup>KES<span className="fs-2">1,500</span></sup></h4>
                </div>
                <div className="card-text">
                  <p>Discover our line of size-inclusive essentials across basics, dresses, denim, outerwear, and more</p>
                </div>
              </div>
              <div className="card-image">
              <img className="img-fluid" src={discount2} alt="clothes"/>
              </div>
            </div>
          </div>
          <div className="col-5 col-md-3 col-sm-4">
          <div className="card" id="home-card">
              <div className="card-body">
                <div className="card-title">
                  <h4>SAVE <sup>KES<span className="fs-2">1,500</span></sup></h4>
                </div>
                <div className="card-text">
                  <p>Discover our line of size-inclusive essentials across basics, dresses, denim, outerwear, and more</p>
                </div>
              </div>
              <div className="card-image">
              <img className="img-fluid" src={discount3} alt="clothes"/>
              </div>
            </div>
          </div>
       </div>
      </section>
    </div>
    {/* footer */}
    <footer>
    <div className="footer container-fluid pt-5">
            <div className="row">
                <div className="col-md-6 col-sm-11 col-11 ml-2">
                    <h2 className="newsletter ">Subscribe for the latest <br/> newsletter</h2>
                </div>
                <div className="col-md-6 col-sm-11 col-11">
                    <form className="form control d-flex col-md-10 newsletter-form">
                        <input className="p-2 form-control " type="text" placeholder="Your email" />
                        <button type="submit" className="btn p-2 btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="row text-white bg-dark p-3">
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
    </footer>
    </>
  );
}
export default Body; 

