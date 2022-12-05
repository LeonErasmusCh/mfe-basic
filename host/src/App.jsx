import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "components_app/Header";
import Footer from "components_app/Footer";
/* import Strapi from "strapi/Strapi" */
import Index from "index_app/Index"


const App = () => (
  <>
    <Header />
    <div className="container-fluid">
      <div className="container bg-warning" style={{ minHeight: "88vh" }}>
        {/* <Strapi /> */}
        <Index />
      </div>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
