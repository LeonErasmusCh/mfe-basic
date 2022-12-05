import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "host/Header";
import Footer from "host/Footer";

const App = () => (
  <div className="container">
    <Header />
    <div>
      Page Content .........
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
