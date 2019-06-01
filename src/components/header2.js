import React from 'react';
import { Link } from 'gatsby';
import './header.css'

const Header = ({siteTitle}) => {
  const openNav= () => {document.getElementById("navigation-dropdown").style.height = "100%";}
  const closeNav = () => {document.getElementById("navigation-dropdown").style.height = "0%"}

  return (
  <div className="bg-black">
    <h1 className="pa3 pa4-ns tc" style={{margin: `0 auto`}} onClick={openNav}>{siteTitle}</h1>
    <div id="navigation-dropdown" className="overlay">
      <span className="closebtn white bg-black pointer" onClick={closeNav}>&times;</span>
      <div className="overlay-content">
        <Link to="/" onClick={closeNav}>Home</Link>
        <Link to="/menu" onClick={closeNav}>Menu</Link>
        <Link to="/" onClick={closeNav}>Clients</Link>
        <Link to="/" onClick={closeNav}>Contact</Link>
      </div>
    </div>
  </div>
)}

export default Header