import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { addNewCase } from '../firebase-controller/formNewCase-controller';

function FormNewCase(props) {
  const history = useHistory();

  const initialStateValues = {
    inspectionDate: '',
    inspectionOrder: '',
    jobInspector: '',
    auxiliaryInspector: '',
    denomination: '',
  };

  const [values, setValues] = useState({ initialStateValues });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const btnCreateCase = () => {
    history.push('/homecases');
  };

  return (
    <div className="container-formNewCase">
      <div id="handbook" className="ocultar">
        <form
          id="form_handbook"
          className="form-newCase"
          onSubmit={handleSubmit}
        >
          <div className="div-inputForm">
            <label htmlFor="fecha_inspection" className="col-form-label">
              <span>1. Fecha de inicio</span>
              <input
                type="date"
                className="form-control input-small inputDate"
                name="inspectionDate"
                id="fecha_inspection"
                defaultValue="2021-06-06"
                min="1980-01-01"
                max="2030-12-31"
                onChange={handleInputChange}
                // value={values.inspectionDate}
              />
            </label>
          </div>

          <div className="div-inputForm">
            <label htmlFor="inputPassword" className="col-form-label">
              <span>2. Orden de inspección</span>
              <input
                type="text"
                name="inspectionOrder"
                className="form-control input-small"
                id="orden_inspection"
                placeholder="Ejm: 1924-2021"
                onChange={handleInputChange}
                value={values.inspectionOrder}
              />
            </label>
          </div>

          <div className="div-inputForm">
            <label htmlFor="inputPassword" className="col-form-label">
              <span>3. Inspector de trabajo</span>
              {/* <!--id: "caseJobInspector"--> */}
              <input
                id="inspectorFuncionario"
                type="text"
                name="jobInspector"
                className="form-control input-medium"
                placeholder="Ejm: Rosa Cubas Linares"
                onChange={handleInputChange}
                value={values.jobInspector}
              />
            </label>
            <div className="div-addInspector">
              {/* <img src={more} alt="" /> */}
              <span className="d-flex align-items-center">
                <strong>+</strong>
                Inspector
              </span>
            </div>
          </div>

          {/* <!-- <i className="fas fa-plus link-success "></i> --> */}
          {/* <img src="./img/svg/more.svg" className="" alt="mas" />
            <a className="link-success" href="#/home" id="links_new_inspector">
              Nuevo inspector
            </a> */}

          <div className="div-inputForm">
            <label htmlFor="inputPassword" className="col-form-label">
              <span>4. Inspector auxiliar</span>
              <input
                id="auxiliar"
                type="text"
                name="auxiliaryInspector"
                className="form-control input-medium"
                placeholder="Ejm: Federico Pajuelo"
                onChange={handleInputChange}
                value={values.auxiliaryInspector}
              />
            </label>
            <div className="div-addInspector">
              {/* <img src={more} alt="" /> */}
              <span className="d-flex align-items-center">
                <strong>+</strong>
                Inspector
              </span>
            </div>
          </div>

          {/* <div className="d-flex column justify-content-end"> */}
          {/* <!-- <i className="fas fa-plus link-success "></i> --> */}
          {/* <img src="./img/svg/more.svg" className="" alt="mas" />
            <a className="link-success" href="#/home" id="links_new_inspector">
              Nuevo inspector
            </a>
          </div> */}

          <div className="div-inputForm d-flex">
            <span>5. Materias</span>

            <div id="container_check" className="container-checks d-flex">
              <div className="checks-group1">
                <label
                  className="form-check-label  check-label"
                  htmlFor="check1"
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="check1"
                    name="Relaciones laborales"
                    value="Relaciones laborales"
                  />
                  Relaciones laborales
                </label>

                <label className="form-check-label" htmlFor="check2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="check2"
                    value="Seguridad y salud en el trabajo"
                  />
                  Seguridad y salud en el trabajo
                </label>

                <label className="form-check-label" htmlFor="check3">
                  <input
                    type="checkbox"
                    name="check3"
                    className="checkbox"
                    id="check3"
                    value="Empleo y colocación"
                  />
                  Empleo y colocación
                </label>

                <label className="form-check-label" htmlFor="check4">
                  <input
                    type="checkbox"
                    name="check4"
                    className="checkbox"
                    id="check4"
                    value="Intermediación laboral"
                  />
                  Intermediación laboral
                </label>
              </div>

              <div>
                <label className="form-check-label" htmlFor="check5">
                  <input
                    type="checkbox"
                    name="check5"
                    className="checkbox"
                    id="check5"
                    value="Promoción y formación"
                  />
                  Promoción y formación
                </label>

                <label className="form-check-label" htmlFor="check6">
                  <input
                    type="checkbox"
                    name="check6"
                    className="checkbox"
                    id="check6"
                    value=" Intermediación laboral"
                  />
                  Extranjeros
                </label>

                <label className="form-check-label" htmlFor="check7">
                  <input
                    type="checkbox"
                    name="check7"
                    className="checkbox"
                    id="check7"
                    value="Seguridad social"
                  />
                  Seguridad social
                </label>

                <label className="form-check-label " htmlFor="check8">
                  <input
                    type="checkbox"
                    name="check8"
                    className="checkbox"
                    id="check8"
                    value="Labor inspectiva"
                  />
                  Labor inspectiva
                </label>
              </div>
            </div>
          </div>

          <div className="divInputForm-denomination">
            <label htmlFor="mensaje" className="col-form-label">
              <span>6. Denominación del caso</span>
              <input
                type="text"
                name="denomination"
                className="form-control input-denomination"
                required
                id="mensaje"
                placeholder="Caso Estibadores"
                onChange={handleInputChange}
                value={values.denomination}
              />
            </label>
          </div>

          <div className="d-flex justify-content-center" id="btn_crearCaso">
            {/* <input
              type="button"
              id="enviar"
              value="Crear caso"
              className="btnCreateCase"
            /> */}
            <button className="btnCreateCase" onClick={btnCreateCase}>Crear caso</button>
          </div>

          {/* <div className="">
<button type="button" id="btnCreateCase" className="btn btn-primary hide">+ Crear caso</button>
</div> */}
        </form>
      </div>
    </div>
  );
}

export default FormNewCase;
