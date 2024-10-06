import React from "react";
import brand from "../../assets/image/rightlogo.svg"; //img
import search from "../../assets/image/search.svg"; //img
import love from "../../assets/image/love.svg"; //img
import user from "../../assets/image/user.svg"; //img
import bag from "../../assets/image/bag.svg"; //img
import downlogo from "../../assets/image/downlogo.svg"; //img

// import React from 'react';
function Header() {
  return (
    <>
    <div className="top-bar">
    <span>Lorem ipsum dolor</span>
    <span>Lorem ipsum dolor</span>
    <span>Lorem ipsum dolor</span>
  </div>
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          {/* logo */}
          <div className="logobox">
            <div className="brand">
              <img src={brand}></img>
            </div>
            <div className="logo-box">
            <div className="logo">E-SHOPP .COM</div>
            </div>
            <div className="toplogobox">
              <img src={search} alt="serach logo" />
              <img src={love} alt="love logo" />
              <img src={bag} alt="bag logo" />
              <img src={user} alt="user logo" />
              <div className="eng">
                <p className="engp">ENG</p>
                <img src={downlogo} alt="downlogo" />
              </div>
            </div>
          </div>
          <div className="NavMenu-div">
          <ul className="navMenu">
            <li>
              <span className="navLink">SHOP</span>
            </li>
            <li>
              <span className="navLink">SKILLS</span>
            </li>
            <li>
              <span className="navLink">STORIES</span>
            </li>
            <li>
              <span className="navLink">ABOUT</span>
            </li>
            <li>
              <span className="navLink">CONTACT US</span>
            </li>
          </ul>
          </div>
        </nav>
      </header>
    </div>
    </>
  );
}
export default Header;
