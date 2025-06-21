import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <div>
       <Navbar />
       <AppRoutes />
       <Footer />
    </div>
  );
};

export default App;
