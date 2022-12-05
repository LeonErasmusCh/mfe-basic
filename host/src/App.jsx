import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "remote_app/Header";
import Footer from "remote_app/Footer";

const App = () => (
  <div className="container-fluid">
    <Header />
    <div style={{minHeight: "85vh"}}>
      Page Content .........
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
