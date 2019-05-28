import React from "react";
import Beer from "../components/beer";
import Layout from '../components/layout';

export default () => {
	// console.log(data)
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
			<ul class="list pl0 mt1 measure center">
				<Beer />
				<Beer />
				<Beer />
				<Beer />
			</ul>
		</Layout>)
}