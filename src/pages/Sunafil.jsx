import React from 'react';
import {
  Modal, ModalBody, Button, Form,
} from 'react-bootstrap';
import sunafilRed from '../images/svg/sunafil.svg';
import sunafilBlue from '../images/svg/sunafilBlue.svg';
import close from '../images/svg/x.svg';
import alert from '../images/svg/sunafilAlert.svg';
import imageSunafil from '../images/svg/imageSunafil.svg';
import check from '../images/svg/check_nimimodal.svg';

function Sunafil() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [isOpenMini, setIsOpenMini] = React.useState(false);
  const showModalMini = () => {
    setIsOpenMini(true);
    setIsOpen(false);
  };

  const hideModalMini = () => {
    setIsOpenMini(false);
  };

  function backHome(e) {
    e.preventDefault();
    alert('You clicked submit.');
  }
  return (
    <>
      <button onClick={showModal}><img src={sunafilRed} id="sunafil" alt="sunafil" /></button>

      <img src={sunafilBlue} id="sunafilBlue" className="hidde" alt="sunafil" />
      <Modal show={isOpen} onHide={hideModal}>
        <ModalBody>
          <div className="modal-content d-flex flex-column align-items-center" id="first__modal__sunafil">
            <div>
              <img
                src={close}
                alt=""
                loading="lazy"
                id="close_modal_sunafil"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="d-flex flex-row">
              <p id="message_thank">
                <strong>
                  {localStorage.getItem('name')}
                </strong>
                gracias por confiar en nosotros,
                en esta ventana podrás registrar tu usuario y
                contraseña de forma segura. &nbsp;
                <img src={alert} id="sunafil" alt="sunafil" />
              </p>
            </div>

            <Form id="container_date_sunafil">

              <div className="d-flex flex-row">
                <Button className="ruc">RUC</Button>
                <Button className="dni">DNI</Button>
              </div>

              <div className="form-outline">
                <input type="text" required className="form-control" id="input__modalSunafil" placeholder="RUC" />
              </div>

              <div className="form-outline">
                <input type="text" required className="form-control" id="input__modalSunafil" placeholder="Usuario" />
              </div>

              <div className="form-outline">
                <input type="password" required className="form-control" id="input__modalSunafil" placeholder="Contraseña" />
              </div>

              <div className="d-flex flex-row align-items-center">
                <p id="recordatorio_modal_sunafil">Recuérdame, para entrar más fácil</p>
              </div>

              <a id="link_sunafil" href="#/home">Si olvidaste tu usuario y/o contraseña solicítalos desde SUNAT Virtual</a>

              <Button onClick={showModalMini} type="submit" id="btn__open__modal__sunafil" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#exampleModal1" className="btn btn-block ">Entrar</Button>

            </Form>

            <div>
              <img src={imageSunafil} id="img__sunafil" alt="Icono check" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
            </div>

          </div>
        </ModalBody>
      </Modal>

      <Modal show={isOpenMini} onHide={hideModalMini}>
        <ModalBody>

          <div className="modal-dialog">
            <div className="modal-content d-flex flex-column align-items-center" id="second__modal__sunafil">

              <div>

                <img
                  src={close}
                  alt=""
                  loading="lazy"
                  id="close_modal_sunafil"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />

              </div>

              <div>
                <img src={check} className="checkIcon" id="sunafil" alt="check" />
              </div>

              <div className="d-flex flex-row">
                <p id="message_congratulations">
                  ¡Felicidades
                  {localStorage.getItem('name')}
                  !Tu registro ha sido creado correctamente
                </p>
              </div>

              <div>
                <Button onclick={backHome} type="submit" id="btn_entrar_minimodal_sunafil" className="btn btn-block " data-bs-dismiss="modal">Regresar al home</Button>
              </div>

              <div>
                <img src={imageSunafil} className="checkIcon" id="sunafilImg" alt="Icono check" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
              </div>

            </div>
          </div>

        </ModalBody>
      </Modal>
    </>
  );
}

export default Sunafil;
