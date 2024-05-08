import React from "react";
import s1 from '../s1.jpg';
import '../styles/carrousel.css'

const slides = [s1]

const Carrousel = () => {
    return(
        <div className="slideContainer">
            <img src={slides[0]} className="" />
        </div>
    );
};

export default Carrousel;