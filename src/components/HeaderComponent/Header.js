import React from 'react';
import logo from '../../assets/imgs/logo.png';

import { NavLink } from 'react-router-dom';


class Header extends React.Component{

  render()
  {
    return (
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <ul className="nav top-menu">
                  <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                  <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="text-center">
              <NavLink to="/">
                <img src={logo} alt="logo" className="logo"/>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <nav className="main-navigation">
            <div className="container">
              <ul className="nav justify-content-center">
                <li className="nav-item active-item"><NavLink  to="/" className="nav-link" activeClassName="active-link">Features</NavLink></li>
                <li className="nav-item"><NavLink to="/category/business" className="nav-link">Business</NavLink></li>
                <li className="nav-item"><NavLink to="/category/politics" className="nav-link">Politics</NavLink></li>
                <li className="nav-item"><NavLink to="/category/arts" className="nav-link">Arts</NavLink></li>
                <li className="nav-item"><NavLink to="/category/sports" className="nav-link">Sports</NavLink></li>
                <li className="nav-item"><NavLink to="/category/fashion" className="nav-link">Fashion</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
