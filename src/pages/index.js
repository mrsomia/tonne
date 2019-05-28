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
    <div className="lh-copy w-70-ns fr">
      <h2 className="serif">Here at Tønne we like good beer and cocktails</h2>
      <span className="f3"> Here is a little blurb about how much we like nice things.</span>
    </div>
    <div className="pv3 pr3-ns w-30-ns fl ">
      <span className="f3">You can find us at 1-3 St Martins, Leicester LE1 5DG.</span>
      <span className="f3">Or if like us, you don't know where you're going just click <a className="yellow no-underline" href="https://goo.gl/maps/uE4YVrMRBZGN7zuMA">here</a></span>
    </div>
  </Layout>
)

export default IndexPage
