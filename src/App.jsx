import React from "react";
import "./App.css";
import Rotas from "./rotas";

import Footer from "./components/footer";
import Navbar from "./components/navbar";


function App() {


  return (
    <>
     <Navbar/>
      
    <Rotas />

      <Footer />
    </>
  );
}

export default App;
