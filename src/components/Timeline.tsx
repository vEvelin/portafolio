import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date=" Feb 2026 - Mar 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
                      <h3 className="vertical-timeline-element-title">Tester QA </h3>
                      <h4 className="vertical-timeline-element-subtitle">Shark Mind </h4>
            <p>
              Ejecuté pruebas exploratorias, funcionales y de usabilidad (UX/UI) en las aplicaciones Quick FAQ y Safe Pet, identificando fallas lógicas, errores críticos e inconsistencias de adaptabilidad móvil. Documenté y reporté detalladamente los bugs encontrados, aportando sugerencias clave de diseño y flujos de navegación para optimizar la experiencia del usuario final.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2025 - Mar 2026 "
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Desarrollador Senior</h3>
            <h4 className="vertical-timeline-element-subtitle">Tienda Mayorista</h4>
            <p>
              Diseñé e implementé una interfaz responsiva y dinámica con HTML5, CSS3, Bootstrap y JavaScript nativo para la gestión de ventas y menús sin recargas. Desarrollé la lógica backend en PHP con base de datos MySQL, optimizando consultas SQL para el control de inventarios bajo un entorno local configurado con XAMPP y Composer.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2023 - Feb 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
                      <h3 className="vertical-timeline-element-title">Desarrollador de Apoyo</h3>
                      <h4 className="vertical-timeline-element-subtitle">BMGroup</h4>
            <p>
              Optimicé sistemas .NET para clientes corporativos, administré bases de datos en SQL Server, gestioné accesos de seguridad y automaticé procesos internos con Power BI y Microsoft Forms.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 - Mar 2023 "
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
                      <h3 className="vertical-timeline-element-title">Prácticas preprofesionales </h3>
                      <h4 className="vertical-timeline-element-subtitle">Importadora de ideas S.A </h4>
            <p>
              Administré incidencias de soporte con Mantis, mantuve infraestructura tecnológica y de CCTV multisede, estandaricé procesos mediante documentación técnica y promoví la cultura digital con boletines de ciberseguridad.
            </p>
          </VerticalTimelineElement>

           <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
             contentArrowStyle={{ borderRight: '7px solid  white' }}
             date="Sept 2021 - Dic 2021"
             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
             icon={<FontAwesomeIcon icon={faBriefcase} />}        
           >         
                      <h3 className="vertical-timeline-element-title">Auxiliar de Sistemas</h3>
            <h4 className="vertical-timeline-element-subtitle">Confiteria Eli's </h4>
           <p>
              Capacité a personal en sistemas POS, brindé soporte especializado en SAP, administré bases de datos en SQL Server/Access, audité sistemas CCTV y gestioné inventarios informáticos multisede.
           </p>         
            </VerticalTimelineElement>
       

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;