import React from "react";
import '../styles/contact.css';

const Contact = () =>{
    return (
        <div className="contactContainer">
           <ul style={{marginLeft:"50px"}}>
                <li><h2>Contacto</h2></li>
                <li>Teléfono: 55 2 895698</li>
                <li>Celular: +56 9 42663481</li>
                <li>negocios@eyhmaestranza.cl</li>
           </ul>
           <ul>
                <li><h2>Dirección</h2></li>
                <li>Avenida Industrial 7720 Galpón 28</li>
                <li>Parque Industrial AGPIA</li>
                <li>Antofagasta</li>
                <li><h2>Horario de atención</h2></li>
                <li>Lunas a Viernes</li>
           </ul>
        <div className="formulario">
            <form>
                <div class="grupo">
                    <input placeholder="Nombre" type="text" id="nombre" name="nombre"/>
                    <input placeholder="Telefono o celular"/>
                </div>
                <div class="grupo">
                    <input placeholder="Ciudad"/>
                    <input placeholder="Correo electrónico"/>
                </div>
                <div class="grupo">
                    <textarea className="comentarios" placeholder="Comentarios..."></textarea>
                </div>
            </form>
            <button>Enviar</button>
        </div>
    </div>
    );
};

export default Contact;