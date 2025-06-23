import React from "react";
import Navbar from "./Components/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "./Components/Footer";

import ScrollToTop from "./Components/ScrollToTop";


const App = () => {
  return (
    <div>
       <ScrollToTop />
       
       <Navbar />
       <AppRoutes />
       <Footer />
    </div>
  );
};

export default App;