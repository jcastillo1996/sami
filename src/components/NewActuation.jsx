import React from 'react';
// import Drop from './Drop';
import FormNewActuation from './FormNewActuation';
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import addNewActuation from '../firebase-controller/formNewActuation-controller';

function NewActuation() {
  // const [show, setShow] = useState(true);
  const addActuation = async (object) => {
    // console.log('datos para enviar a firebase', linkObject);
    await addNewActuation(object);
    console.log('Nuevo caso agregado');
  };

  return (
    <div className="container-newCase d-flex justify-content-center">
      <div className="dropForm">
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="new-case">Nueva actuación</h1>
        </div>

        <div className="newCase-containerItems d-flex justify-content-center">
          <button
            type="button"
            id="sube_archivo"
            className="newCase-item"
            // onClick={() => {
            //   setShow(!show);
            // }}
          >
            Sube tus archivos
          </button>

          <button
            type="button"
            id="sube_manual"
            className="newCase-item"
            // onClick={() => {
            //   setShow(!show);
            // }}
          >
            Crear de forma manual
            {/* {' '}
            {show ? 'Div 2' : 'Div 1'} */}
          </button>
        </div>
        {/* {show ? <div>Div 1</div> : <div>Div 2</div>} */}

        {/* <li
              className=" "
              // style="list-style: none; width:400px;text-align: center;"
            >
              <a
                className="nav-link active link-active"
                id="sube_archivo"
                aria-current="page"
                // style="color: #0F3041; font-size: 16px;"
                href="#/"
              >
                Sube tus archivos
              </a>
              </li> */}

        {/* <li
              className=" "
              // style="list-style: none; width:400px;text-align: center;"
            >
              <a
                className="nav-link active link-inactive"
                href="#/home"
                id="sube_manual"
                // style="color:#0E3141;font-size: 16px;"
              >
                Crear de forma manual
              </a>
            </li> */}

        {/* <Drop /> */}
        <FormNewActuation addActuation={addActuation} />
      </div>
    </div>
  );
}

export default NewActuation;
