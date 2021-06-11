import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import {
  Form, Button, Modal,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { db } from '../firebase-controller/firebase';
import { signup } from '../firebase-controller/auth.controlle';
import userCollection from '../firebase-controller/user-controller';
// import Welcome from '../components/welcome';
// import logo from '../images/svg/logo_blanco.svg';
// import group from '../images/svg/group.svg';
import logo from '../images/svg/logoSami.svg';
import eye from '../images/svg/eye.svg';
import helpCircle from '../images/svg/helpCircle.svg';
import Footer from '../components/Footer';
import addNewCircle from '../images/svg/add-new-circle.svg';
import pencil from '../images/Vector@2x.png';
import trash from '../images/trash-vector.png';
import banner from '../images/banner.png';

function SignUp() {
  const history = useHistory();
  // const [showBusiness, setShowBusiness] = useState(false);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  /* * Crear usuario * */

  // const handleDescription = (callback, e) => {
  //   callback(e);
  // };

  const [isVisible, setIsVisible] = useState(true);

  const [color, setColor] = useState('#31CC53');
  const changeColorBall = () => {
    setColor('#CAD4E8');
  };

  const [colorGreen, setColorGreen] = useState('#CAD4E8');
  const changeColorBallGreen = () => {
    setColorGreen('#31CC53');
  };

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

  const createUser = () => {
    // e.preventDefault();
    signup(datos.email, datos.password)
      // .then(() => alert('Usuario Registrado'));
      .then(console.log('crea'));
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  // const dataUser = () => {
  // };

  const sendData = () => {
    // event.preventDefault();
    console.log(`enviando datos...${datos.nombre} ${datos.apellido}`);
    const firstInitial1 = datos.nombre.charAt(0).toUpperCase();
    const firstInitial2 = datos.apellido.charAt(0).toUpperCase();
    const initials = firstInitial1 + firstInitial2;
    console.log(`enviando datos...${initials} `);
    return initials;
  };

  const sendFullData = () => {
    // event.preventDefault();
    const firstName = datos.nombre.split(' ')[0];
    const lastName = datos.apellido.split(' ')[0];
    const fullName = `${firstName} ${lastName}`;
    return fullName;
  };

  const addOrEditLink = async (linkObject) => {
    // console.log('datos para enviar a firebase', linkObject);
    await userCollection(linkObject);
    console.log('Nuevo caso agregado');
  };
  const handleSubmitUser = () => {
    // e.preventDefault();
    console.log(datos);
    // props.addOrEditLink(datos);
    setDatos({ ...datos });
    addOrEditLink(datos);
    console.log('Nuevo caso agregado');
  };

  const sendAllDate = (e) => {
    e.preventDefault();
    sendData();
    sendFullData();
    createUser();
    handleSubmitUser();
  };

  const [dataUser, setDataUser] = useState([]);
  const getCollectionUser = async () => {
    const querySnapshot = await db.collection('user').get();
    querySnapshot.forEach((doc) => {
      const docs = [];
      // querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      docs.push({ ...doc.data(), id: doc.id });
      // });
      console.log(docs);
      setDataUser(docs);
    });

    // db.collection('user').limit(1).onSnapshot((querySnapshot) => {
    //   const docs = [];
    //   querySnapshot.forEach((doc) => {
    //     // console.log(doc.data());
    //     docs.push({ ...doc.data(), id: doc.id });
    //   });
    //   console.log(docs);
    //   setDataUser(docs);
    // });
  };

  const emailFirestore = dataUser.map((e) => e.email);
  useEffect(() => {
    getCollectionUser();
    console.log('datitos');
  }, []);
  /* Modal */
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const hideModal = () => {
    setIsOpen(false);
  };

  const [input, setValue] = useState('');
  const [name, setName] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const updateName = () => {
    setName(input);
    setValue('');
  };

  // console.log(updateName());

  const [noVisible, setNoVisible] = useState(false);
  const [noVisibleWelcome, setNoVisibleWelcome] = useState(false);
  // const name1 = setName(input).split(' ')[0];
  // const name2 = setName(input).split(' ')[1];
  // const fullName = name1 + name2;
  // return fullName;
  const onClickCloseModal = () => {
    closeModal();
    updateName();
    setNoVisible(true);
  };

  const onClick = () => {
    changeColorBallGreen();
    changeColorBall();
    setIsVisible(false);
    // handleClick();
  };

  const viuwWelcome = () => {
    setNoVisibleWelcome(true);
  };

  const btnAddInspection = () => {
    history.push('/inspection');
  };

  return (
    <>
      <div id="container__register" className="container__register">
        <div id="div__logo__Form" className="div__logo__form">
          {/* Columna izquierda - Logo */}
          <div className="logoSami">
            <img src={logo} id="" alt="logo" />
          </div>

          {/* Columna derecha - Formularios */}
          <form
            style={{ display: noVisibleWelcome ? 'none' : 'block' }}
            onSubmit={sendAllDate}
            className="FormRegister"
            id="FormRegister"
          >
            <div className="Form2">
              {/* ENCABEZADO */}
              <div className="row">
                {/* titulo REGISTRATE */}
                <div className="col-12">
                  <h1 className="registrar ">Regístrate</h1>
                </div>

                {/* txt Completa los datos  */}
                <div className="container__txt__tocomplete">
                  <p className="txtgray">
                    Completa los datos solicitados. ¿Ya tienes una cuenta?
                    {' '}
                  </p>
                  <a href="/signin" className="ptxtRed">
                    {' '}
                    Ingresa
                    {' '}
                  </a>
                </div>

                {/* Circulos verdes (step) */}
                <div className="col-12 mx-5">
                  <div className="row ms-5 mt-3 mb-3">
                    {/* step 1 */}
                    <div className="col-12 col-lg-3">
                      <table>
                        <tr>
                          <td>
                            <div
                              className="btn_color1"
                              style={{ background: color }}
                              id="btn_step_one"
                            >
                              1
                            </div>
                          </td>
                          <td>
                            <p>Datos personales</p>
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* step 2 */}
                    <div className="col-12 col-lg-9">
                      <table>
                        <tr>
                          <td>
                            <div
                              className="btn_color"
                              style={{ background: colorGreen }}
                              id="btn_step_two"
                            >
                              2
                            </div>
                          </td>
                          <td>
                            <p>Datos empresa</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* INFormACIÓN DATOS PERSONALES */}
              <div
                className="col-12"
                style={{ display: isVisible ? 'block' : 'none' }}
              >
                <div id="container_infoUser" className="container_infoUser">
                  {/* Inputs */}
                  <div className="container_user1">
                    <div className="textOnInput">
                      <label htmlFor="name" className="labelName">
                        <span>Nombre</span>
                        <input
                          type="text"
                          name="nombre"
                          id="name"
                          className="fname1 form-control"
                          placeholder="Completar"
                          required
                          // ref={names}
                          // value={name}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <div className="textOnInput ">
                      <label htmlFor="camponombre" className="labelName1">
                        <span className="labelName1"> Apellido</span>

                        <input
                          type="text"
                          name="apellido"
                          id="lastName"
                          className="form-control fname2"
                          placeholder="Completar"
                          // value={lastName}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="container_user1">
                    <div className="textOnInput">
                      <label htmlFor="email">
                        <span>Correo</span>

                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control fname1"
                          placeholder="nombre@petroperu.com"
                          // value={email}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <div className="textOnInput">
                      <label htmlFor="password1">
                        <span className="labelName1">Contraseña</span>

                        <input
                          type="password"
                          id="password1"
                          className="form-control fname2"
                          name="password"
                          placeholder="Contraseña"
                          // value={password}
                          onChange={handleInputChange}
                        />
                      </label>

                      <img
                        src={eye}
                        id="btn_password"
                        className="img-eye"
                        alt="eye"
                      />
                    </div>
                  </div>

                  {/* Terminos y condiciones */}
                  <div
                    className="conditions col-12 d-flex flex-row"
                    id="terms__Conditions"
                  >
                    <div className="d-flex flex-row ms-5 mb-3 mx-5">
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
              {/* Input empresa */}
              <div
                className="col-12 "
                style={{ display: isVisible ? 'none' : 'block' }}
              >
                <div
                  id="container_infoEmpresa"
                  className="container_infoEmpresa"
                >
                  <div className="textOnInput2">
                    <label htmlFor="emailBusiness">
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
                    <img src={helpCircle} alt="help circle" />
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
                      onClick={showModal}
                    >
                      <img src={addNewCircle} alt="agrega usuario" />
                      <p> Nuevo </p>
                    </button>

                    {/* usuario predeterminado - ALONSO */}
                    <div id="div_show_alonso" className="div_show_alonso">
                      {/* Circulo azul con iniciales */}

                      <div
                        className="btn-border-showAlonso rounded-circle mt-1"
                        id="btn_border_showAlonso"
                      >
                        <div
                          id="showAlonso"
                          className="showAlonso rounded-circle"
                        >
                          <p id="initials_names" className="sendData">
                            {sendData()}
                          </p>
                        </div>
                      </div>
                      {/* Nombre de predeterminado */}

                      <div id="full_namesAlonso" className="sendFullData">
                        {sendFullData()}
                        ...
                      </div>

                      {/* Iconos */}
                      <div
                        id="show_icon_example"
                        className="show_icon_example "
                      >
                        <div>
                          <div className="col col-12 col-lg-6  align-items-center">
                            <img
                              src={pencil}
                              alt="pencil"
                              id="pencil_example"
                              className="pencil_example"
                            />
                          </div>
                          <div>
                            <img
                              src={trash}
                              alt="trash"
                              id="trash_example"
                              className="trash_example"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* show data */}

                    <div
                      id="div_show_alonso"
                      className="div_show_alonso"
                      style={{ display: noVisible ? 'block' : 'none' }}
                    >
                      {/* Circulo azul con iniciales */}

                      <div
                        className="btn-border-showAlonso rounded-circle mt-1"
                        id="btn_border_showAlonso"
                      >
                        <div
                          id="showAlonso"
                          className="showAlonso rounded-circle"
                        >
                          <p id="initials_names" className="sendDataModal">
                            {name}
                          </p>
                        </div>
                      </div>
                      {/* Nombre de predeterminado */}

                      <div id="full_namesAlonso" className="sendFullData">
                        ...
                      </div>

                      {/* Iconos */}
                      <div
                        id="show_icon_example"
                        className="show_icon_example "
                      >
                        <div>
                          <div className="col col-12 col-lg-6  align-items-center">
                            <img
                              src={pencil}
                              alt="pencil"
                              id="pencil_example"
                              className="pencil_example"
                            />
                          </div>
                          <div>
                            <img
                              src={trash}
                              alt="trash"
                              id="trash_example"
                              className="trash_example"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* btns del formulario */}
              <div className="btns-Form">
                <button
                  id="btn_next"
                  type="submit"
                  className="btn-signup"
                  style={{ display: noVisible ? 'none' : 'block' }}
                  onClick={onClick}
                >
                  Siguiente
                </button>
                <button
                  id="btn_behind"
                  className="btn-signup"
                  style={{ display: isVisible ? 'none' : 'block' }}
                >
                  Anterior
                </button>
                <button
                  id="btn_nextWelcome"
                  className="btn-signup"
                  style={{ display: noVisible ? 'block' : 'none' }}
                  onClick={viuwWelcome}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </form>
          <div
            id="welcome"
            className="welcome"
            style={{ display: noVisibleWelcome ? 'block' : 'none' }}
          >
            <h1 className="registrar">Regístro Completado</h1>

            <img src={banner} id="banner" alt="logo" />

            <div id="show-message" className="show-message">
              <div className="d-flex flex-row">
                <p>Gracias </p>
                {dataUser.map((e) => (
                  <p>{e.nombre}</p>
                ))}
                {' '}
                <p>por registrarte</p>
              </div>
              <div>
                <p>
                  Te hemos enviado un mensaje a
                  {' '}
                  <span>{emailFirestore}</span>
                  {' '}
                  para verificar tu correo
                </p>
              </div>
              <div className="d-flex flex-row">
                <p>
                  electrónico, así como las invitaciones a los colaboradores de
                  tu empresa.
                </p>
              </div>
            </div>
            <button
              className="añadir_Inspección btn btn-danger"
              id="añadir_Inspección"
              onClick={btnAddInspection}
            >
              Añadir Inspección
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {/* modal */}
      <Modal
        show={isOpen}
        onHide={hideModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form>
          <div className="modales">
            {/* encabezado del modal */}
            <div className="modal-header">
              <h5 className="modal-title mt-3 ms-5" id="staticBackdropLabel">
                Nuevo Colaborador
              </h5>

              <button
                type="button"
                className="btn-closes"
                closeButton
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                x
              </button>
            </div>

            <p className="data-to-complete mt-3 ms-5">
              Completa los datos solicitados de un usuario frecuente.
            </p>

            {/* contenido del modal */}
            <div className="d-flex align-items-center flex-column justify-content-center ">
              {/* inputs */}
              <div className="allTextOnInput3 justify-content-start">
                {/* input nombre */}
                <div id="textOnInput3" className="textOnInput3">
                  <label htmlFor="nombreModal">
                    <span>Nombre</span>
                    <input
                      type="text"
                      name="nombreModal"
                      className="form-control"
                      placeholder="Ej. Juan Perez"
                      id="nombreModal"
                      value={input}
                      onChange={handleInput}
                    />
                  </label>
                </div>

                {/* input correo */}
                <div id="textOnInput3" className="textOnInput3">
                  <label htmlFor="camponombre">
                    <span>Correo</span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Ej. nombre@petroperu.com"
                    />
                  </label>
                </div>
              </div>

              {/* btn aceptar */}
              <div className="modal-footer">
                <Button
                  type="button"
                  className="btn btn-secondary btn-danger"
                  id="add"
                  onClick={onClickCloseModal}
                  data-bs-dismiss="modal"
                >
                  Agregar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default SignUp;
