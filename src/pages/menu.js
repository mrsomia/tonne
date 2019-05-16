import React from "react"
import data from "../components/data.json"
import Layout from '../components/layout'
import Beer from "../components/beer"

export default () => {
	// console.log(data)
	return(
		<Layout>
			<h1> Here's what we have brewing...</h1>
			<ul class="list pl0 mt0 measure center">
				<Beer />
				<Beer />
				<Beer />
				<Beer />
			</ul>
		</Layout>)
}