import React, { useState } from "react";
import Beer from "../components/beer";
import Layout from '../components/layout';
import data from "../components/data.json"

const menuPage = () => {
	// console.log(data)
	// const [onTap, setOnTap] = useState(true)
	const beers = data.menu.sections[0].items.map(({ id, name, label_image, brewery, abv, style}) => (
		<Beer id={id} name={name} label_image={label_image} brewery={brewery} abv={abv} beerStyle={style} />
		))

	return(
		<Layout>
			<h1 className="tc"> Here's what we have øn tap...</h1>
			<div className="flex justify-center">
				<div className="pa2">
					<button className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">ØN TAP</button>
				</div>
				<div className="pa2">
					<button className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">BØTTLES</button>
				</div>
			</div>
			<ul className="list pl0 mt1 measure center">
				{beers}
			</ul>
		</Layout>)
}

export default menuPage