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
        padding: `1.45rem `,
      }}
    >
      <h1 className="ph3 di" style={{ marginRight: `auto`, padding: `0 auto`}}>
        <Link
          to="/"
          className="no-underline white"
        >
          {siteTitle}
        </Link>
      </h1>
      <h1 className="ph3 di" style={{ padding: `0 auto`}}>
        <Link
          to="/menu"
          className="no-underline white"
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
  siteTitle: `Tønne`,
}

export default Header
