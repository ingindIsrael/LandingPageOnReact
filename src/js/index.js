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
import { FourCards } from "./component/4cards";
import { Ren } from "./component/ren";

//render your react application
ReactDOM.render(<Ren />, document.querySelector("#app"));
