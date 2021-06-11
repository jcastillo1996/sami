/* eslint-disable jsx-a11y/no-onchange */
import React, { useState } from 'react';
import cargar from '../images/svg/cargar.svg';

function FormNewActuation(props) {
  const initialStateValues = {
    actuationDate: '',
    actuationType: '',
    funcionarios: '',
    stage: '',
    description: '',
    documents: '',
  };

  const [values, setValues] = useState({ initialStateValues });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('que hay en values??-handleImputChange', values);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('que hay en values-handleSubmit', values);
    props.addActuation(values);
    setValues({ ...initialStateValues });
  };
  return (
    <div className="container-formNewCase container-formNewActuation">
      <div id="handbook" className="ocultar">
        <form
          id="form_handbook"
          className="form-newCase form-newActuation"
          onSubmit={handleSubmit}
        >
          <div className="div-inputForm">
            <label htmlFor="actuationDate" className="col-form-label">
              <span>
                1. Fecha de Actuación
                <strong className="warning-text"> *</strong>
              </span>
              <input
                type="date"
                className="form-control input-small inputDate"
                name="actuationDate"
                id="actuationDate"
                defaultValue="2021-06-06"
                min="1980-01-01"
                max="2030-12-31"
                onChange={handleInputChange}
                value={values.actuationDate}
              />
            </label>
          </div>

          <div className="div-inputForm">
            <label htmlFor="actuationType" className="col-form-label">
              <span>
                2. Tipo de actuación
                <strong className="warning-text"> *</strong>
              </span>
              <select
                id="actuationType"
                name="actuationType"
                className="form-control input-actuationType"
                required="seleciona aquí"
                onChange={handleInputChange}
                value={values.actuationType}
              >
                <option value="">Selecciona aquí</option>
                <option value="Visita inspectiva">Visita inspectiva</option>
                <option value="Requerimiento de comparecencia ">
                  Requerimiento de comparecencia
                </option>
                <option value="Comparecencia">Comparecencia</option>
                <option value="Requerimiento">Requerimiento</option>
                <option value="Acta de infracción ">Acta de infracción </option>
                <option value=" Descargos"> Descargos</option>
                <option value=" Resolución  "> Resolución </option>
                <option value="  Apelación"> Apelación</option>
                <option value="  Escrito"> Escrito</option>
              </select>
            </label>
          </div>

          <div className="div-inputForm">
            <label htmlFor="funcionarios" className="col-form-label">
              <span>
                3. Funcionarios
                <strong className="warning-text"> *</strong>
              </span>

              <input
                id="funcionarios"
                type="text"
                name="funcionarios"
                className="form-control input-medium"
                placeholder="Ejm: Rosa Cubas Linares"
                onChange={handleInputChange}
                value={values.funcionarios}
              />
            </label>
            <div className="div-addInspector">
              {/* <img src={more} alt="" /> */}
              <span className="d-flex align-items-center">
                <strong>+</strong>
                Funcionarios
              </span>
            </div>
          </div>

          {/* <!-- <i className="fas fa-plus link-success "></i> --> */}
          {/* <img src="./img/svg/more.svg" className="" alt="mas" />
            <a className="link-success" href="#/home" id="links_new_inspector">
              Nuevo inspector
            </a> */}

          <div className="div-inputForm">
            <label htmlFor="stage" className="col-form-label">
              <span>
                4. Etapa
                <strong className="warning-text"> *</strong>
              </span>
              <select
                id="stage"
                name="stage"
                className="form-control input-stage"
                required="Selecciona aquí"
                onChange={handleInputChange}
                value={values.stage}
              >
                <option value="">Selecciona aquí</option>
                <option value="Investigación">Investigación</option>
                <option value="Instrucción">Instrucción</option>
                <option value="Sancionadora">Sancionadora</option>
              </select>
            </label>
          </div>

          {/* <div className="d-flex column justify-content-end"> */}
          {/* <!-- <i className="fas fa-plus link-success "></i> --> */}
          {/* <img src="./img/svg/more.svg" className="" alt="mas" />
            <a className="link-success" href="#/home" id="links_new_inspector">
              Nuevo inspector
            </a>
          </div> */}

          <div className="div-inputForm">
            <label htmlFor="description" className="col-form-label">
              <span>5. Descripción</span>
              <input
                id="description"
                type="text"
                name="description"
                className="form-control input-description"
                placeholder="Escribir aquí"
                onChange={handleInputChange}
                value={values.description}
              />
            </label>
          </div>

          <div className="divInputForm-documents">
            <label htmlFor="documents" className="col-form-label">
              <span>6. Documentos</span>
              <label htmlFor="file-upload" id="subir">
                <img src={cargar} alt="" />
                Añade tus documentos
                <input id="file-upload" type="file" className="hide" />
              </label>
              <div id="info" />
            </label>
          </div>

          <div className="d-flex justify-content-center" id="btn_crearCaso">
            <button className="btnCreateCase">Crear actuación</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormNewActuation;
