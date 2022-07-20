import React from "react";
import "./App.css";

function Navs() {
    return(
      <div className="navs">
        <div className="navsc">
        <i class="fa-solid fa-bars"></i>
        <span>All</span>
        <span>Best Sellers</span>
        <span>Mobiles</span>
        <span>Coustomer Services</span>
        <span>Todays Deal</span>
        <span>Fashion</span>
        <span>Electronics</span>
        <span>Books</span>
        <span>Prime</span>
        <span>New Releases</span>
        </div>
        <div className="navsi">
        <img alt="leadup" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-GW-SWM_400x39._CB634187897_.jpg" />
        </div>
      </div>
    )
  }
  export default Navs;