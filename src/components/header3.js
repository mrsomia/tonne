import React from 'react'
// import { Link } from 'gatsby'
import "./header3.css"

/* const Header = ({siteTitle}) => {
  return (
    <div>
      <ul className="list flex pa2 justify-center" style={{margin: 0}}>
        <li className="pa2 pl3 home" style={{marginRight: 'auto'}}>
          <h1 className="tc">{siteTitle}</h1>
        </li>
        <li className="dn di-ns pa2">
          <h1>Menu</h1>
        </li>
        <li className="dn di-ns pa2">
          <h1>About</h1>
        </li>
        <li className="dn di-ns pa2">
          <h1>Page 2</h1>
        </li>
      </ul>
    </div>
  )
} */

const Header = ({siteTitle}) => {
  const toggleNav = () => {document.getElementById("navigation").classList.toggle("nav-open")}
  return(
    <div className="nav flex flex-column flex-row-ns" id="navigation">
        <div className="title pa2 tc">
          <h1 className="f2">{siteTitle}</h1>
          <span className="white pointer absolute top-0 right-0 pa3 f1"
          onClick={toggleNav}
          >&times;</span>
        </div>
        <div className="tc">
          <h1 className="f3">Menu</h1>
        </div>
    </div>
  )
}


export default Header