import React from 'react'

export default ({ name, label_image, brewery, abv, style}) => {
	return (
		<li
		className="flex items-center lh-copy pa3 ph0-l bb b--white-80">
		  <img alt="beer label" className="w2 h2 w3-ns h3-ns br-100" src="https://untappd.akamaized.net/site/beer_logos/beer-4499_dc04a_sm.jpeg" />
		  <div className="pl3 flex-auto">
				<span className="f6 db">Pliny the Elder</span>
				<span className="f6 db">Russian River Brewing Company</span>
		  </div>
		  <div className="pl3 flex-auto">
		  	<span className="f6 db">8.0%</span>
				<span className="f6 db">IPA - Imperial / Double</span>
		  </div>
			<div className="pl3 flex-auto">
				<span className="f6 db">hello</span>
			</div>
	  </li>
)}