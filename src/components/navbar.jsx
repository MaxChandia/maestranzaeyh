import React, { useState} from "react";
import '../styles/navbar.css';
import { Link } from "react-router-dom";
import logo from '../logo1.png'


const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <nav className="navbar" style={{width: "100%", margin:"0"}}> 
         <div className="image">
            <img src={logo} alt="logo"/>
            <ul>
                <li> Fono </li>
                <li> Email</li>
            </ul>
        </div> 
         <div className="NavPages" style={{height:"50px"}}> 
            <ul>
                <Link to="/" className={hoveredItem === "Inicio" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Inicio")} 
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{ marginRight: "20px"}}>   
                    <li >
                        <p>INICIO</p>
                    </li>
                </Link>
                <Link to="/quienessomos" className={hoveredItem === "Quienes somos" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Quienes somos")} 
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{ marginRight: "20px", whiteSpace:"nowrap"}}>   
                    <li >
                        <p>QUIENES SOMOS</p>
                    </li>
                    </Link>
                    <Link to="/servicios" className={hoveredItem === "Servicios" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Servicios")} 
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{ marginRight: "20px"}}>   
                        <li >
                            <p>SERVICIOS</p>
                        </li>
                    </Link>
                    <Link className={hoveredItem === "Nuestro Taller" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Nuestro Taller")} 
                        onMouseLeave={() => setHoveredItem(null)}to="/nuestrotaller"
                        style={{ marginRight: "20px", whiteSpace:"nowrap"}}>
                        <li>
                            <p>NUESTRO TALLER</p>
                        </li> 
                    </Link>
                    <Link  className={hoveredItem === "Ubicación" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Ubicación")} 
                        onMouseLeave={() => setHoveredItem(null)}
                        to='/ubicacion'
                        style={{ marginRight: "20px", whiteSpace:"nowrap"}}>
                        <li>
                            <p>CÓMO LLEGAR</p>
                        </li>
                    </Link>
                    <Link to="/contacto" className={hoveredItem === "Contacto" ? "hovered" : ""} 
                        onMouseEnter={() => setHoveredItem("Contacto")} 
                        onMouseLeave={() => setHoveredItem(null)}>   
                    <li >
                        <p>CONTACTO</p>
                    </li>
                 </Link>
             </ul>
        </div>
     </nav>
    );
};

export default Navbar;