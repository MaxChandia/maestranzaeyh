import React, { useState } from "react";
import Contact from "../components/contact";
import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/contact.css';
import Carrousel from "../components/carrousel";
import s1 from '../s1.jpg'
import p1 from '../p1.jpg'
import p2 from '../p2.jpg'
import p3 from '../p3.jpg'
import p4 from '../p4.jpg'
import p5 from '../p5.jpeg'

const Home = () =>{
  const [showImage, setShowImage] = useState(false);
 

  return (
    <div className="App">
      <Carrousel/>
      <div className="inbetweenText" style={{height:"180px", width:"100%"}}>
        <h1>Más de 10 años aportando al rubro de la metalmecánica</h1>
      </div>
      {/*<div className="services">
        <p>
          Servicios
        </p>
        <ul>
          <li> Corte</li>
          <li> Corte</li>
          <li> Corte</li>
        </ul>
        <img src={s1}/>
  </div> */}
      <div className="products">
    <div className="titleProducts">
        <h1>Conoce nuestros trabajos</h1>
        <div className="underline"></div>
    </div>
    <div className="imageProducts">
        <img src={p1} alt="Producto 1" onClick={() => setShowImage(!showImage)}/>
        <img src={p2}alt="Producto 2" />
        <img src={p3} alt="Producto 3" />
        <img src={p4} alt="Producto 3" />
    </div>
    <div className="imageProducts">
        <img src={p5} alt="Producto 1" />
        <img src={p2}alt="Producto 2" />
        <img src={p3} alt="Producto 3" />
        <img src={p3} alt="Producto 3" />
    </div>
    <div className="imageProducts">
        <img src={p1} alt="Producto 1" />
        <img src={p2}alt="Producto 2" />
        <img src={p3} alt="Producto 3" />
        <img src={p3} alt="Producto 3" />
    </div>
  </div>
    {showImage && (
          <div className="expandedImage">
          <img src={s1} alt="Servicios" onClick={() => setShowImage(false)} />
          </div>
        )}
        <div className="partners">
          <h1>
            Realizamos trabajos para las siguientes empresas
          </h1>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.3208217441506!2d-70.3866029357731!3d-23.599215134192722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2ade2ccd6dc9%3A0xe2220217dd966f8d!2sIndustrial%207720%2C%201264236%20Antofagasta!5e0!3m2!1ses!2scl!4v1715144012438!5m2!1ses!2scl" 
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