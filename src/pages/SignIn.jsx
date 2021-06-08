import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase-controller/firebase';
import logo from '../images/svg/logo_blanco.svg';
import group from '../images/svg/group.svg';
import eye from '../images/svg/eye.svg';

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDescription = (callback, e) => {
    callback(e);
  };

  /* * Crear usuario * */
  // const createUser = (e) => {
  //   e.preventDefault();
  //   auth.createUserWithEmailAndPassword(email, password)
  //     // .then((res) => alert('Usuario Registrado'));
  //     .then();
  //   history.push('/home');
  // };

  /* * Login * */
  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then();
    history.push('/home');
  };

  return (
    <div className="container-login d-flex">
      <div className="div-logo-form d-flex">
        <div>
          <img src={logo} className="logoLogin" alt="logo" />
        </div>
        <div className="form">
          <form className="form1" onSubmit={login}>
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
                    value={email}
                    onChange={(e) => {
                      handleDescription(setEmail, e.target.value);
                    }}
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
                    value={password}
                    onChange={(e) => {
                      handleDescription(setPassword, e.target.value);
                    }}
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
              <input
                type="submit"
                id="getIn"
                className="getIn"
                value="Ingresar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
