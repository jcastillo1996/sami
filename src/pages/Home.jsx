import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sunafil from '../components/Sunafil';
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
    <>
    <Header />
    <Sunafil />
    <div className="container-home">
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
     <Footer />
  );
}

export default Home;
