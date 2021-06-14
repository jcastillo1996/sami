import React from 'react';
import sunafilRoja from '../images/sunafil-casilla-roja.png';
import logoSaga from '../images/saga.png';
import bntRight from '../images/svg/btn-right.svg';
import circleProgress from '../images/svg/circle-progress.svg';
import circuloAzul from '../images/svg/circulo-azul.svg';
import circuloVerde from '../images/svg/circulo-verde.svg';
import circuloRojoItem from '../images/svg/circulo-rojoItem.svg';
import avatar1 from '../images/svg/avatar1.svg';
import avatar2 from '../images/svg/avatar2.svg';
import avatar3 from '../images/svg/avatar3.svg';

function SidebarCases() {
  return (
    <div className="sidebarCases">
      <img src={sunafilRoja} alt="logo sunafil" />

      <div className="sidebar-company">
        <p>Empresa</p>
        <img src={logoSaga} alt="logo empresa" />
      </div>

      <div className="company-pendingTasks">
        <div className="pendingTasks-header d-flex justify-content-between">
          <p>Tareas pendientes</p>
          <button>Ver Todas</button>
        </div>
        <div className="pendingTasks-content">
          <div
            id="container_pedingTasks"
            className="pendingTasks-content-card d-flex"
          />
        </div>
      </div>

      <div className="caseProgress">
        <div className="caseProgress-header d-flex justify-content-between">
          <p>Progreso de casos</p>
          <img src={bntRight} alt="botón siguiente" />
        </div>
        <div className="caseProgress-content d-flex">
          <img src={circleProgress} alt="circulo progreso" />
          <div className="content-items">
            <div className="item-progress d-flex">
              <img src={circuloAzul} alt="En proceso" />
              <p>En proceso (2)</p>
            </div>
            <div className="item-progress d-flex">
              <img src={circuloVerde} alt="En proceso" />
              <p>Finalizado (1)</p>
            </div>
            <div className="item-progress d-flex">
              <img src={circuloRojoItem} alt="En proceso" />
              <p>Vencidos (0)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="caseTeam">
        <p>Equipo</p>
        <div className="caseTeam-names">
          <div className="miniCardTeam d-flex align-items-center">
            <img src={avatar1} alt="foto perfil" />
            <p>Sofia Jimenez</p>
          </div>
          <div className="miniCardTeam d-flex align-items-center">
            <img src={avatar2} alt="foto perfil" />
            <p>Mario Gonzales</p>
          </div>
          <div className="miniCardTeam d-flex align-items-center">
            <img src={avatar3} alt="foto perfil" />
            <p>Alonso Aguirre</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCases;
