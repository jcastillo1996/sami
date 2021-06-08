import React from 'react';
import logo from '../images/svg/logo.svg';
import notifications from '../images/svg/notifications.svg';
import avatar from '../images/svg/avatar.svg';
import chevron from '../images/svg/chevron-down.svg';
import search from '../images/svg/search.svg';

function Header() {
  return (
    <>
      <div className="header">

        <div className="header-left d-flex">
          <a href="#/home">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <span className="vertical-line" />
        </div>

        <div className="header-center d-flex">
          <div className="tag-case d-flex">
            <p>Mis Casos</p>
          </div>
          <div className="search-notification d-flex">
            <img src={search} className="icon" alt="search" />
            <img
              src={notifications}
              className="icon"
              alt="nofications"
            />
            <span className="vertical-line" />
          </div>
        </div>

        <div className="header-right d-flex">
          <img src={avatar} className="avatar" alt="profile" />
          <p>Alonso Hoyos</p>
          <img src={chevron} alt="profile menu" />
        </div>

      </div>
    </>
  );
}

export default Header;
