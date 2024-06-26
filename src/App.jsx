
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Pages/Layout";
// import Home from "./Pages/Home";
// import Blogs from "./Pages/Blogs";
// import Contact from "./Pages/Contact";
// import NoPage from "./Pages/NoPage";
import React from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";



export default function App() {
  return (
    
   
    <BrowserRouter>
      <Routes>
        {/* <Route path="/"
         element={<Layout />}> */}
          <Route path="/"
          element={<HomePage />} />
          <Route path="/AboutUs"
          element={<AboutUs />} />
          {/* <Route path="blogs"
           element={<Blogs />} /> */}
          {/* <Route path="contact"
           element={<Contact />} /> */}
          {/* <Route path="*"
          element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);