import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-black">
    <div
      className="flex"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="ph3 di" style={{ marginRight: `auto`}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `0 auto 0 0`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h1 className="ph3 di" style={{ padding: `0 auto`}}>
        <Link
          to="/menu"
          style={{
            textDecoration: `none`,
          }}
        >
          Menu
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
