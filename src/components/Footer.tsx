import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
 
function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/vEvelin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/valeriaguarachi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
          <p>Portafolio Diseñado y desarrollado con pasión por la tecnología<a href="https://github.com/vEvelin" target="_blank" rel="noreferrer">Valeria Guarachi</a></p>
    </footer>
  );
}

export default Footer;
