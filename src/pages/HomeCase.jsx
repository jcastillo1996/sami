import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import list from '../images/svg/listSeveralCase.svg';
import down from '../images/svg/down_doc.svg';
import search from '../images/svg/search_homeCase.svg';
import horizontal from '../images/svg/horizontal_slide.svg';
import vertical from '../images/svg/vertiracl_grid.svg';
import more from '../images/svg/more_card_homeCase.svg';
import arrow from '../images/svg/arrow_card_homeCase.svg';
import { db } from '../firebase-controller/firebase';
// import Sunafil from '../components/Sunafil';

function HomeCase() {
  const [dataCases, setDataCases] = useState([]);
  const getCollectionCases = async () => {
    // const querySnapshot = await db.collection('user').get();
    // querySnapshot.forEach((doc) => {
    //   const docs = [];
    //   // querySnapshot.forEach((doc) => {
    //   // console.log(doc.data());
    //   docs.push({ ...doc.data(), id: doc.id });
    //   // });
    //   console.log(docs);
    //   setDataUser(docs);
    // });

    db.collection('Cases').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setDataCases(docs);
    });
  };

  useEffect(() => {
    getCollectionCases();
    console.log('datitos');
  }, []);
  return (
    <>
      <div className="wrapperCases">
        {/* <!-- Header (Casos) --> */}
        <Header />

        {/* <!-- Contenedor (sidebar y mainCards de casos) --> */}
        <div className="containerHomeCases">

          {/* <!-- Siderbar (casos) --> */}
          <div className="sidebarCases" id="sidebarCases" />

          {/* <!-- Main (casos) --> */}
          <div className="mainCases">
            <div className="d-flex flex-row justify-content-between" id="nav-several-case">

              <div id="burger" className="burger d-flex flex-row align-items-sm-center">
                <img src={list} alt="logo" id="listSeveralCase" className="listSeveralCase" />
                <p className="style_MisCasos">Mis Casos</p>
              </div>

              <div id="container_right" className="container_right d-flex flex-row align-items-sm-center ">

                <div id="byStage" className="byStage d-flex flex-row justify-content-between align-items-sm-center ">
                  <p className="style_porEtapa">Por Etapa</p>
                  <img src={down} alt="logo" />
                </div>

                <div id="seeker" className="seeker d-flex flex-row align-items-sm-center">
                  <input type="search" id="search_homeCase" className="search_homeCase" name="searchCase" placeholder="  Buscar caso" />
                  <img id="img_search_homeCase" alt="logo" className="img_search_homeCase" src={search} />
                </div>

                <div id="slide" className="slide d-flex flex-row justify-content-between align-items-sm-center ">
                  <img src={horizontal} alt="logo" />
                  <img src={vertical} alt="logo" />
                </div>

                <div id="pagination" className="pagination d-flex flex-row justify-content-between align-items-sm-center">
                  <div id="numberContainer" className="numberContainer">01</div>
                  <p className="paginationNumber">de 01 páginas</p>
                </div>

              </div>

            </div>

            <div id="show_card_homeCase">
              <div className="card_empty d-flex flex-column justify-content-center" id="card_empty">
                <img src={more} alt="logo" />
                <p id="txt_nuevoCaso" className="txt_nuevoCaso">Nuevo Caso</p>
              </div>
              <div id="show_allCard_homeCase">
                {dataCases.map((dataCase) => (
                  <div id="container_information_homeCase" className="container_information_homeCase d-flex flex-column">

                    <div id="row1_card_homeCase" className="row1_card_homeCase d-flex flex-row justify-content-between">

                      <div className="d-flex ">
                        <div id="date_homeCase" className="date_homeCase">
                          <strong>{dataCase.inspectionDate}</strong>
                        </div>
                      </div>

                      <div className="d-flex flex-row ">
                        <div id="stage_homeCase" className="stage_homeCase">
                          <strong>Etapa</strong>
                        </div>
                        <img src={arrow} alt="logo" />
                      </div>
                    </div>

                    <div id="row2_card_homeCase" className="row2_card_homeCase d-flex flex-column ">

                      <p id="style_card_denomination_homeCase" className="style_card_denomination_homeCase">{dataCase.denomination}</p>

                    </div>

                    <div className="row3_card_homeCase d-flex flex-row" id="row3_card_homeCase">
                      <div className="kind_stage_card_homeCase d-flex flex-column" id="kind_stage_card_homeCase">
                        <p id="style_card_dateStage_homeCase" className="style_card_dateStage_homeCase">Fecha</p>
                        <p id="style_title_card_homeCase" className="style_title_card_homeCase">{dataCase.Tipo}</p>
                        <p id="style_txt_stage_card_homeCase" className="style_txt_stage_card_homeCase">Última actuación</p>
                      </div>

                      <div className="d-flex flex-column">
                        <p id="style_title_card_homeCase" className="style_title_card_homeCase">newChain</p>
                        <p id="style_txt_stage_card_homeCase" className="style_txt_stage_card_homeCase">Riesgo</p>
                      </div>
                    </div>

                    <div className="row4_card_homeCase d-flex flex-row" id="row4_card_homeCase">

                      <div className=" container1 d-flex flex-column" id="container1">
                        <p id="style_title_card_homeCase" className="style_title_card_homeCase">{dataCase.inspectionOrder}</p>
                        <p id="style_txt_stage_card_homeCase" className="style_txt_stage_card_homeCase">Orden</p>
                      </div>

                      <div className="d-flex flex-column" id="container2">
                        <div className="d-flex flex-row align-items-center">
                          <div id="ball" className="ball" />
                          <div id="style_titleNumber_card_homeCase" className="style_titleNumber_card_homeCase">3</div>
                          <p id="style_title_card_homeCase" className="style_title_card_homeCase"> de 6 Tareas</p>
                        </div>
                        <p id="style_txt_stage_card_homeCase" className="style_txt_stage_card_homeCase">Pendientes</p>
                      </div>

                      <div className="d-flex flex-column" id="container3">
                        <p id="style_dateExpirationHomework_card_homeCase" className="style_dateExpirationHomework_card_homeCase">03/06</p>
                        <p id="style_txt_stage_card_homeCase" className="style_txt_stage_card_homeCase">Vencimiento</p>
                      </div>

                    </div>

                  </div>
                ))}
              </div>

              <div id="paginations" className=" paginations d-flex flex-row justify-content-between align-items-sm-center">
                <div id="numberContainer" className="numberContainer">01</div>
                <p className="paginationNumber">de 01 páginas</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeCase;
