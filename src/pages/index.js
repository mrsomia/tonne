import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/background"
import Logo from "../components/logo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection>
		<Logo className='vh-100 w-100' />
	 </BackgroundSection>
  </Layout>
)

export default IndexPage
