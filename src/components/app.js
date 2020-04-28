import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";

import "./app.css";
import Header from "./header";
import New from "./new";
import Notes from "./notes";
import Footer from "./footer";

function App() {
  return (
    <React.Fragment>
      <Header />

      <div className="app container-fluid bg-light">
        <New />

        <Notes />
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
