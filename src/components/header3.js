import React from 'react'
import { Link } from 'gatsby'
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
        <div className="title pa2 ph3 tc menu-push-left">
          <Link to="/" className="no-underline white" onClick={toggleNav}>
            <h1 className="f2">{siteTitle}</h1>
          </Link>
        </div>
        <div className="tc">
          <Link to="/menu" className="no-underline yellow" onClick={toggleNav}>
            <h1 className="f2 pa2 ph3">Menu</h1>
          </Link>
        </div>
        <span className="white pointer absolute top-0 right-0 pa3 f1 dn-ns"
        onClick={toggleNav}>
          &times;
        </span>
    </div>
  )
}


export default Header