import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock20 from '../assets/images/mock20.png';
import mock21 from '../assets/images/mock21.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects"> 
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/vEvelin/sistema-inventario" target="_blank" rel="noreferrer"><img src={mock20} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vEvelin/sistema-inventario" target="_blank" rel="noreferrer"><h2>Sitema de Control de Inventario</h2></a>
                <p>Desarrollé un Sistema a medida para el control y administración de una tienda mayorista utilizando PHP, XAMPP. Implementando una interfaz de usuario responsiva y dinámica con HTML5, CSS3, Bootstrap y JavaScript nativo para gestionar ventas en tiempo real sin recargas. Incluye el modelado y optimización de una base de datos relacional en MySQL para el control eficiente de stock, productos y proveedores.</p>
            </div>
            <div className="project">
                <a href="https://vevelin.github.io/webRecigalo/index.html" target="_blank" rel="noreferrer"><img src={mock21} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://vevelin.github.io/webRecigalo/index.html" target="_blank" rel="noreferrer"><h2>"RECÍGALO"</h2></a>
                <p>Desarrollé una plataforma web responsiva orientada a la concientización ambiental mediante el diseño de interfaces interactivas con HTML5 y CSS3. Implementé dinámicas de gamificación integrando JavaScript nativo para animaciones lógicas y mecánicas de juego en el navegador. Desplegué un videojuego educativo interactivo desarrollado en Construct 2 enfocado en la restauración de entornos ecológicos.</p>
            </div>
           
         
       
        </div>
    </div>
    );
}

export default Project;
