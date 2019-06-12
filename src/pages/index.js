import React from "react"
// eslint-disable-next-line 
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/background"
import Logo from "../components/logo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `TONNE`, `react`, `Bar`]} />
    <BackgroundSection>
		  <Logo className='vh-100 w-100' />
	  </BackgroundSection>
    <div className="flex flex-wrap">
      <div className="lh-copy pa2 ph3 pa3-ns w-70-ns">
        <h2 className="f3">Here at Tønne we like good beer, wine and cocktails</h2>
        <span className="f3"> Here is a little blurb about how much we like nice things.</span>
      </div>
      <div className="pa2 ph3 pa3-ns w-30-ns">
        <p className="f3">You can find us at 1-3 St Martins, Leicester LE1 5DG. Or just click <a className="yellow no-underline" href="https://goo.gl/maps/uE4YVrMRBZGN7zuMA">here</a></p>
        <span className="f3">We're open from:</span>
        <ul className="list pl0">
          <li className="f4 flex"><span className="i" style={{marginRight: `auto`}}>Tues-Sat</span> <span>12-Late</span></li>
          <li className="f4 flex"><span className="i" style={{marginRight: `auto`}}>Sun</span> <span>1-Late</span></li>
          <li className="f4 flex"><span className="i" style={{marginRight: `auto`}}>Mon</span> <span>We Sleep</span></li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
