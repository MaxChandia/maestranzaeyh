import React from "react";
import Contact from "../components/contact";
import { Navbar } from "react-bootstrap";
import m1 from '../m1.jpg'
import '../styles/aboutUs.css'
import { useEffect } from "react";


const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, document.getElementById('inicio').offsetTop);
    }, []);
    return (
        <div className="">
            <Navbar/>
            <div id="inicio"></div>
            <div className="aboutUsText" style={{marginTop: "150px", display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
                </div>
            <div className="mission">
                <div className="missionText">
                    <h1 style={{marginTop:"50px"}}>Sobre Nosotros</h1>
                    <p className="cotentText" style={{marginLeft:"50px", marginRight:"50px"}}>
                        Sociedad E&H Maestranza Limitada se constituye en octubre 2015, generando continuidad a los 20 años de servicio en el rubro de la metalmecánica. Dada la experiencia en el servicio a la minería y a la industria se ha orientado nuestra atención al perfeccionamiento del servicio en la mano de obra calificada y tecnología innovadora.
                    </p>
                </div>
                <img src={m1}/>
            </div>
            <Contact />
        </div>
    );
};

export default AboutUs;