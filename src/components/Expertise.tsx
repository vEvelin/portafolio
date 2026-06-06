import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PHP",
    ".NET",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Construct 2",
    "Python",
    "Composer"
];

const labelsSecond = [
    "Gestión de Incidencias",
    "Pruebas Exploratorias",
    "Control de Calidad UX / UI",
    "Inspección y Depuración de Código(Debugging)",
    
];

const labelsThird = [
    "SQL Server",
    "MySQL(phpMyAdmin)",
    "Microsoft Access",
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Desarrollo Web Full-Stack</h3>
                        <p>I have experience in the independent and custom development of commercial web systems and interactive platforms from scratch. I am proficient in creating stable backend architectures, dynamic and responsive user interfaces, and integrating gamification mechanics.</p>
                    <div className="flex-chips">
                            <span className="chip-title">Tecnologías:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>Tester QA </h3>
                        <p>Ejecuto pruebas funcionales y exploratorias en aplicaciones web y móviles para descubrir fallas lógicas y errores críticos. Evalúo la experiencia de usuario (UX) e interfaces (UI) asegurando la adaptabilidad en pantallas móviles, la consistencia visual y documentando de manera clara los reportes de errores (bugs). </p>
                    <div className="flex-chips">
                            <span className="chip-title">Tecnologías:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                        <h3>Gestión de Bases de Datos y Lógica SQL</h3>
                        <p>Estructuro, administro y optimizo bases de datos relacionales multisede para garantizar la integridad de los datos y la fluidez de las transacciones. Cuento con capacidad para diseñar procesos SQL complejos y consultas optimizadas para el control de inventarios y stock.</p>
                    <div className="flex-chips">
                            <span className="chip-title">Tecnologías:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
