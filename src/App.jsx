import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "./Components/Footer/Footer";

// स्टेप 1: नया कंपोनेंट इम्पोर्ट करें
import ScrollToTop from "./Components/ScrollToTop";


const App = () => {
  return (
    <div>
       {/* स्टेप 2: इस कंपोनेंट को यहाँ जोड़ दें */}
       <ScrollToTop />
       
       <Navbar />
       <AppRoutes />
       <Footer />
    </div>
  );
};

export default App;