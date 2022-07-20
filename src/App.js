// import "./App.css";
import Nav from "./nav";
import Navs from "./navs";
import Home from "./home";
import Footer from "./footer";
import Fp from "./firstpage";
import "./first.css";

function App() {
  return (
    <div className="mainc">
      <div className="firstcont" id="firstcont">
      <Fp />
      </div>
      
      <div className="Container" id="container">
        <Nav />
        <Navs />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
