import React, { useState } from 'react';
import {
  Form, Button,
} from 'react-bootstrap';

// import { useHistory } from 'react-router-dom';
// import { auth } from '../firebase-controller/firebase';
// import logo from '../images/svg/logo_blanco.svg';
// import group from '../images/svg/group.svg';
import logo from '../images/svg/logoSami.svg';
import eye from '../images/svg/eye.svg';
import helpCircle from '../images/svg/helpCircle.svg';
import Footer from '../components/Footer';
import addNewCircle from '../images/svg/add-new-circle.svg';
import pencil from '../images/Vector@2x.png';
import trash from '../images/trash-vector.png';

function SignUp() {
  const [showBusiness, setShowBusiness] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const onClick = () => {
    setIsVisible(false);
    setShowBusiness(true);
  };

  return (
    <>
      <div id="container__register" className="container__register">
        <div id="div__logo__Form" className="div__logo__form">
          {/* Columna izquierda - Logo */}
          <div className="logoSami">
            <img
              src={logo}
              id=""
              alt="logo"
            />
          </div>

          {/* Columna derecha - Formularios */}
          <div className="FormRegister" id="FormRegister">
            <Form className="Form2">
              {/* ENCABEZADO */}
              <div className="row">
                {/* titulo REGISTRATE */}
                <div className="col-12">
                  <h1 className="registrar ">Regístrate</h1>
                </div>

                {/* txt Completa los datos  */}
                <div className="container__txt__tocomplete">
                  <p
                    className="txtgray"
                  >
                    Completa los datos solicitados. ¿Ya tienes una cuenta?
                    {' '}
                  </p>
                  <a href="/signin" className="ptxtRed"> Ingresa </a>
                </div>

                {/* Circulos verdes (step) */}
                <div className="col-12 mx-5">
                  <div className="row ms-5 mt-3 mb-3">
                    {/* step 1 */}
                    <div className="col-12 col-lg-3">
                      <table>
                        <tr>
                          <td>
                            <div className="btn_color1" id="btn_step_one">
                              1
                            </div>
                          </td>
                          <td>
                            <p>
                              Datos personales
                            </p>
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* step 2 */}
                    <div className="col-12 col-lg-9">
                      <table>
                        <tr>
                          <td>
                            <div className="btn_color" id="btn_step_two">
                              2
                            </div>
                          </td>
                          <td>
                            <p>
                              Datos empresa
                            </p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* INFormACIÓN DATOS PERSONALES */}
              <div className="col-12">
                <div id="container_infoUser" className="container_infoUser" style={{ display: isVisible ? 'block' : 'none' }}>
                  {/* Inputs */}
                  <div className="container_user1">
                    <div className="textOnInput">
                      <label htmlFor="name" className="labelName">
                        <span>Nombre</span>
                        <input
                          type="text"
                          name="nombre"
                          id="fname1"
                          className="fname1 form-control"
                          placeholder="Completar"
                          required
                        />
                      </label>

                    </div>
                    <div className="textOnInput ">
                      <label htmlFor="camponombre" className="labelName1">
                        <span className="labelName1"> Apellido</span>

                        <input
                          type="text"
                          name="nombre"
                          id="fname2"
                          className="form-control fname2"
                          placeholder="Completar"

                        />
                      </label>

                    </div>
                  </div>
                  <div className="container_user1">
                    <div className="textOnInput">
                      <label
                        htmlFor="email"
                      >
                        <span>Correo</span>

                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control fname1"
                          placeholder="nombre@petroperu.com"
                        />
                      </label>

                    </div>
                    <div className="textOnInput">
                      <label
                        htmlFor="password1"

                      >
                        <span className="labelName1">Contraseña</span>

                        <input
                          type="password"
                          id="password1"
                          className="form-control fname2"
                          name="txtPassword"
                          placeholder="Contraseña"
                        />
                      </label>

                      <img src={eye} id="btn_password" className="img-eye" alt="eye" />

                    </div>
                  </div>

                  {/* Terminos y condiciones */}
                  <div className="conditions col-12 d-flex flex-row" id="terms__Conditions">
                    <div
                      className="d-flex flex-row ms-5 mb-3 mx-5"
                    >

                      <Form.Check type="checkbox" />
                      <p>
                        Acepto los
                        {'\u00A0'}
                      </p>

                      <p>
                        Términos del Servicio y
                        {'\u00A0'}
                      </p>

                      <p>

                        Políticas de Privacidad
                        {'\u00A0'}
                      </p>

                    </div>
                  </div>
                </div>
              </div>

              {/* btns del formulario */}
              <div className="btns-Form">
                <Button id="btn_next" className="btn_next" onClick={onClick}>Siguiente</Button>
                {showBusiness ? <Business /> : null}
                {/* <button id="btn_nextWelcome" className="ocultar">Siguiente</button>
                <button id="btn_behind" className="ocultar">Anterior</button> */}
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const Business = () => (
  <div className="col-12">
    <Form id="container_infoEmpresa">
      {/* Input empresa */}
      <div className="textOnInput2">
        <label
          htmlFor="emailBusiness"
        >
          <span>Empresa</span>
          <input
            type="email"
            name="email"
            id="emailBusiness"
            className="emailBusiness form-control email"
            placeholder="Ej. Petroperu"
          />
        </label>

        <br />
      </div>
      {/* txt agrega usuario */}
      <div
        id="ajuste"
        className="ajuste d-flex align-items-center bd-highlight"
      >
        <p>
          {' '}
          Agrega un Usuario
          {'\u00A0'}
        </p>
        <img
          src={helpCircle}
          alt="help circle"
        />
      </div>

      {/* Boton agregar que muestra circulos azules */}
      <div className="d-flex colum btn_add_circle">
        {/* btn + agrega un usuario */}
        <button
          type="button"
          id="btn_New"
          className="btn-modal-signup btn btn-primary ms-5"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src={addNewCircle}
            alt="agrega usuario"
          />
          <p> Nuevo </p>
        </button>

        {/* usuario predeterminado - ALONSO */}
        <div
          id="div_show_alonso"
          className="div_show_alonso"
        >
          {/* Circulo azul con iniciales */}

          <div
            className="btn-border-showAlonso rounded-circle mt-1"
            id="btn_border_showAlonso"
          >
            <div
              id="showAlonso"
              className="showAlonso rounded-circle"
            />
          </div>

          {/* Nombre de predeterminado */}

          <div
            id="full_namesAlonso"
            className="full_namesAlonso"
          />

          {/* Iconos */}
          <div id="show_icon_example" className="show_icon_example ">
            <div>
              <div
                className="col col-12 col-lg-6  align-items-center"
              >
                <img src={pencil} alt="pencil" id="pencil_example" className="pencil_example" />
              </div>
              <div>
                <img src={trash} alt="trash" id="trash_example" className="trash_example" />
              </div>
            </div>
          </div>

        </div>

        {/* show data */}

        <div
          id="div_Show_Data"
          className="div_Show_Data"
        // className="hide"
        >

          {/* Muestra iniciales */}
          <div
            className="btn_border_showNamei mt-1"
            id="btn_border_showNamei"
          >
            <div
              id="showNamei"
              className="rounded-circle"
            >
              <p />
            </div>
          </div>

          {/* Muestra nombre */}
          <div
            id="showName"
            className="showName"
          >
            <p />
          </div>
        </div>
      </div>
    </Form>
  </div>
);
export default SignUp;
