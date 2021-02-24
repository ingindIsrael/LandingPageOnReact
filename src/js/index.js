//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Barra } from "./component/navbar";
import { Jumbo } from "./component/jumbotron";
import { Card } from "./component/card";

function Ren() {
	return (
		<div>
			<Barra bar="History Lesson" />,
			<div className="Container p-3">
				<Jumbo jum="Young Lords" />,
				<div className="Container">
					<div className="row">
						<div className="col-sm">
							<Card ca="Enviar" />
						</div>
						,
						<div className="col-sm">
							<Card ca="Enviar" />
						</div>
						,
						<div className="col-sm">
							<Card ca="Enviar" />
						</div>
						,
						<div className="col-sm">
							<Card ca="Enviar" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

//render your react application
ReactDOM.render(<Ren />, document.querySelector("#app"));
