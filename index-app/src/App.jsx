import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "components_app/Header";
import Footer from "components_app/Footer";

const App = () => (
  <>
    <Header />
    <div className="container bg-warning" style={{ minHeight: "88vh" }}>
      <h1>This is Index App 11</h1>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
