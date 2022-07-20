import React from "react";
import "./App.css";
import ind from './img/ind.png';

function Nav() {
  return (
    <div className="nav">
      <img
        className="nimg"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="am"
      />
      <div className="op4">
        <i class="fa-solid fa-location-dot"></i>
        <span className="fl">Hello</span><br></br>
        <span className="sl">Select your address</span>
      </div>
      <div className="nsearch">
        <input className="nsearchi" type="text"></input>
        <div className="sicon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="ncont">
        <div>
          <img className="ind" alt="a" src={ind}/>
        </div>
        <div className="op1">
          <span className="fl">Hello,sign in</span><br></br>
          <span className="sl">Accounts & Lists</span>
        </div>
        <div className="op2">
          <span className="fl">Returns</span><br></br>
          <span className="sl"> & orders</span>
        </div>
        <div className="op3">
        <i class="si fa-solid fa-cart-shopping"></i>
        <span>cart</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;

