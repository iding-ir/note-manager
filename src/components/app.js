import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";

import Header from "./header";
import Modal from "./modal";
import Notes from "./notes";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header />

      <div className="app container-fluid bg-light">
        <Modal />

        <Notes />
      </div>

      <Footer />
    </>
  );
}

export default App;
