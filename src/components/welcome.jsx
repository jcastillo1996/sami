import React from 'react';
import banner from '../images/banner.png';

function Welcome() {
  return (
    <>
      <div id="form3">
        <h1 className="registrar">Regístro Completado</h1>

        <img src={banner} id="banner" alt="logo" />

        <div
          id="show-message"
          className="show-message"
        />

        <button className="añadir_Inspección btn btn-danger" id="añadir_Inspección">
          Añadir Inspección
        </button>
      </div>
    </>
  );
}

export default Welcome;
