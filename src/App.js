import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Features from "./components/pages/features";
import Faq from "./components/pages/faq";
import About from "./components/pages/about";
// import Client from "./components/pages/clients";
// import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
import Demo from "./components/pages/demo";


import './index.css'

function App() {
  return (
    
    <div>
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="Faq" element={ <Faq/> } />
      </Routes>
       
      <Navbar />
      <Home/>
     
      <About />
      <Features />
    
      {/* <Service /> */}
      <Demo />
      {/* <Client /> */}
       {/* <Contact /> */}
      <Footer />
    
    </div>
  );
}

export default App;












