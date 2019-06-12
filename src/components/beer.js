import React from 'react'

export default ({ name, label_image, brewery, abv, beerStyle}) => {
	return (
		<li
		className="flex items-center lh-copy pa3 ph0-l bb b--white-80">
		  <img alt="beer label" className="w2 h2 w3-ns h3-ns br-100" src={label_image} />
		  <div className="pl3 flex-auto">
				<span className="f6 db">{name}</span>
				<span className="f6 db">{brewery}</span>
		  </div>
		  <div className="pl3 flex-auto">
		  	<span className="f6 db">{abv}</span>
				<span className="f6 db">{beerStyle}</span>
		  </div>
	  </li>
)}