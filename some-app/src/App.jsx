import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "components_app/Header";
import Footer from "components_app/Footer";


const App = () => (
  <>
  <Header />
  <div className="container bg-warning" style={{minHeight: "88vh"}}>
    <div>Name: some-app</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
  <Footer/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
