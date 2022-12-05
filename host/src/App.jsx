import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "remote_app/Header";
import Footer from "remote_app/Footer";

const App = () => (
  <>
    <Header />
    <div className="container-fluid">
      <div className="container bg-warning" style={{ minHeight: "88vh" }}>
        <h1 className="text-white p-5 text-center">Welcome to Micro Frontends</h1>
      </div>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
