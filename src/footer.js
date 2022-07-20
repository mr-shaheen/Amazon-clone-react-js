import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="firstfoot">
        <p>Back to Top</p>
      </div>
      <div className="secondfoot">
        <div className="sfo">
          <h4>Get to Know Us</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
          <p>Amazon Science</p>
        </div>
        <div className="sft">
          <h4>Connect with Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="sfth">
          <h4>Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="sff">
          <h4>Let Us Help You</h4>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="tfoot">
        <div >
          <img className="alogo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </div>
        <div className="dt">
            <p>Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands Poland Singapore Spain Turkey United Arab Emirates<br></br> United Kingdom United States</p>
        </div>
      </div>
      <div className="lastfoot">
     <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads © 1996-2022, Amazon.com, Inc. or its affiliates</p>

      </div>
    </div>
  );
}
export default Footer;
