import React from 'react';
import logo from '../images/svg/logo_blanco.svg';
import group from '../images/svg/group.svg';
import eye from '../images/svg/eye.svg';

function SignIn() {
  return (
    <div className="container-login d-flex">
      <div className="div-logo-form d-flex">
        <div>
          <img src={logo} className="logoLogin" alt="logo" />
        </div>
        <div className="form">
          <form className="form1">
            <div>
              <img src={group} className="img_group" alt="logo" />
            </div>
            <div className="flex_newAccount">
              <p className="txtgray ">
                Completa tus credenciales. ¿Aún no tienes una cuenta?
              </p>
              <a href="#/signUp" id="newAccount" className="ptxtRed">
                Crea tu cuenta
              </a>
            </div>

            <div className="">
              <div id="container_email" className="input-group container_email">
                <label htmlFor="fname" className="form-label txtgray subtxt">
                  <span>Usuario</span>
                  <input
                    type="email"
                    name="email"
                    id="fname"
                    className="form-control txtPlaceholderGray"
                    placeholder="nombre@petroperu.com"
                    aria-required="true"
                    aria-invalid="false"
                    required
                  />
                </label>
                <br />
                <p id="messageEmail" />
              </div>
              <p id="mensajeEmail" className="aviso mensajeEmail" />
              <div className="input-group container_password">
                <label htmlFor="password">
                  <input
                    type="password"
                    id="password"
                    className="form-control txtPlaceholderGray"
                    name="txtPassword"
                    placeholder="Contraseña"
                  />
                </label>
                <button
                  type="button"
                  id="btnToggle"
                  className="toggle btnToggle"
                >
                  <img src={eye} className="icon-eye" alt="eye" />
                </button>
              </div>
            </div>

            <div className="forget-password">
              <a href="#/signUp">Olvidé mi contraseña</a>
            </div>

            <div className="">
              <button type="button" id="getIn" className="getIn">
                <span>Ingresar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
