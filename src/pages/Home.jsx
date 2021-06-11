import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import cruzBlanca from '../images/svg/+_blanco.svg';

function Home() {
  const history = useHistory();

  const viewInspection = () => {
    history.push('/inspection');
  };

  const viewActuation = () => {
    history.push('/actuation');
  };

  return (
    <div className="container-home">
      <Header />
      <div className="container-btns">
        <button className="btnCreateCase" onClick={viewInspection}>
          Crear caso
        </button>
        <button className="btnCreateCase" onClick={viewActuation}>
          <img src={cruzBlanca} alt="mas" />
          Actuación
        </button>
      </div>
    </div>
  );
}

export default Home;
