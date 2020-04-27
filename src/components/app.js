import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";

import "./app.css";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <React.Fragment>
      <Header />

      <div className="app container bg-light"></div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
