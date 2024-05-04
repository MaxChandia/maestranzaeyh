import React from "react";
import Contact from "../components/contact";
import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/contact.css';

const Home = () =>{
  return (
    <div className="App">
      <div className="carrousel"></div>
      <div className="services"></div>
      <div className="products"></div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d528.0257934172738!2d-70.38767755660703!3d-23.59697945374944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2ae0f19d58fd%3A0x70919d27b3acce6f!2sImportadora%20Tecnica%20Vignola%20Saic!5e0!3m2!1ses!2scl!4v1714192250213!5m2!1ses!2scl" 
        width="100%" 
        height="300"
        title="map"
        style={{ border: '0' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"/>
      <Contact/>
  </div>
  );
};

export default Home;