import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
//import "../styles/index.scss";

//import your own components
import { Barra } from "./navbar";
import { Jumbo } from "./jumbotron";
//import { Card } from "./card";
import { FourCards } from "./4cards";

export const Ren = props => {
	return (
		<div>
			<Barra bar="History Lesson" />,
			<div className="Container p-3">
				<Jumbo jum="Young Lords" />,
				<FourCards />
			</div>
		</div>
	);
};
