import React from "react";
import "./first.css";
import ama from './img/ama.png';

function Fp() {
  return (
    <div className="main" id="fisrtcont">
      <div >
        <img className="nimg" alt=" a" src={ama}></img>
      </div>
      <div className="fd">
        <p className="sn">Sign-in</p>
        <p className="label">Enter user name & password</p>
        <input type="text" className="in" id="inf"></input>
        <br></br>
        <input type="text" className="in" id="ins"></input>
        <br></br>
        <button className="btn" onClick={() => Check()}>
          Continue
        </button>
        <p id="warning">please enter the correct user name or password</p>
        <p>
          By continuing, you agree to Amazon's Conditions of<br></br> Use and
          Privacy Notice.
        </p>
      </div>
      <div className="sd">
        <p>New to Amazon</p>
        <button className="cnbtn">Create New Amazon account</button>
      </div>
    </div>
  );
}
function Check() {
  var a, b;
  var c = "admin";
  a = document.getElementById("inf").value;
  b = document.getElementById("ins").value;

  if (a === c && b===c) {
    document.getElementById("container").style.display = "block";
    document.getElementById("fisrtcont").style.display = "none";
  } else {
    document.getElementById("warning").style.display = "block";
  }
}
export default Fp;
