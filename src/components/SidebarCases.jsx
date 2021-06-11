import React from 'react';

function SidebarCases() {
  return (
    <div className="sidebarCases">
      <img src="./img/sunafil-casilla-roja.png" alt="logo sunafil" />

      <div className="sidebar-company">
        <p>Empresa</p>
        <img src="./img/saga.png" alt="logo empresa" />
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
          <img src="./img/svg/btn-right.svg" alt="botón siguiente" />
        </div>
        <div className="caseProgress-content d-flex">
          <img src="./img/svg/circle-progress.svg" alt="circulo progreso" />
          <div className="content-items">
            <img
              src="./img/svg/circulo-azul.svg"
              alt="En proceso"
              // style="margin-top:5px;"
            />
            <img
              src="./img/svg/circulo-verde.svg"
              alt="En proceso"
              // style="margin-top:10px;"
            />
            <img
              src="./img/svg/circulo-rojoItem.svg"
              alt="En proceso"
              // style="margin-top:10px;"
            />
          </div>
        </div>
      </div>

      <div className="caseTeam">
        <p>Equipo</p>
        <div className="caseTeam-names">
          <div className="miniCardTeam d-flex align-items-center">
            <img src="./img/svg/avatar1.svg" alt="foto perfil" />
            <p>Sofia Jimenez</p>
          </div>
          <div className="miniCardTeam d-flex align-items-center">
            <img src="./img/svg/avatar2.svg" alt="foto perfil" />
            <p>Mario Gonzales</p>
          </div>
          <div className="miniCardTeam d-flex align-items-center">
            <img src="./img/svg/avatar3.svg" alt="foto perfil" />
            <p>Alonso Aguirre</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCases;
