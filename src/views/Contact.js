import React from "react";
import '../styles/contactPage.css';

const ContactPage = () => {
    return(
        <div>
            <div>
                <form>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre"/>
                    <label>Email</label>
                    <input></input>
                    <label>Telefono o Celular</label>
                    <input></input>
                    <label>Ciudad</label>
                    <input></input>
                    <label>Mensaje</label>
                    <input></input>
                </form>
            </div>
            <div>
                <ul>
                    <li><h2>Contacto</h2></li>
                    <li>Teléfono: 55 2 895698</li>
                    <li>Celular: +56 9 42663481</li>
                    <li>negocios@eyhmaestranza.cl</li>
                </ul>
            </div>
        </div>

    );

};

export default ContactPage;