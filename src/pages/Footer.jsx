import React from 'react';
import group from '../images/svg/group.svg';

function Footer() {
  return (
    <div className="footer d-flex">
      <p>
        Copyright © 2021
        <strong>sami.</strong>
        Todos los derechos reservados.
        <span>Términos del Servicio y Políticas de Privacidad</span>
      </p>
      <img src={group} alt="logo" />
    </div>
  );
}

export default Footer;
