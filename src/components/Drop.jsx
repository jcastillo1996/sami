import React from 'react';
import nube from '../images/nube.png';

function Drop() {
  return (
    <div id="drop" className="container-drop">
      <div className="title-fileSize">
        <p>Tamaño máximo: 50mb</p>
      </div>
      <form className="">
        <div id="drop-area" className="drop-area">
          <img
            src={nube}
            // className="rounded-circle"
            alt=""
          />
          <p>
            Arrastra tus archivos aquí
            <br />
            o
          </p>
          <label htmlFor="myfiles" className="myfile">
            Cargar desde computadora
            <input id="myfiles" type="file" className="hide" />
          </label>
          <div className="title-fileType">
            <p>Puedes subir JPG, PNG, Word, Excel y PDF</p>
          </div>
        </div>

        {/* Ocultos modificar */}
        {/* <div id="file1" className="ocultar hide">
          <p>Principal</p>
          <div className="d-flex flex-row align-items-center">
            <img src="./img/svg/selected.svg" className="radio" alt="radio" />

            <div d-flex>
              <div>
                <img src="./img/svg/picture.svg" alt="imagen" />
                <p id="gallery" className="file-return" />
              </div>
              <div>
                <img src="./img/svg/check2.svg" alt="check" />
                <img src="./img/svg/delete2.svg" alt="eliminar" />
              </div>
            </div>
          </div>
        </div>
        <div id="file2" className="ocultar hide">
          <div
            id="file2"
            className="ocultar d-flex flex-row d-flex align-items-center"
          >
            <div>
              <input type="radio" name="file" value="file" />
              <div>
                <p id="gallery" className="gallery" />
              </div>
            </div>
          </div>
        </div>
        <div id="message_error" /> */}

        <div className="btnNext-nexCase d-flex justify-content-center">
          <button className="btn_desacti">Continuar</button>
        </div>
      </form>
    </div>
  );
}

export default Drop;
