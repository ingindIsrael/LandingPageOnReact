import React from "react";
import PropTypes from "prop-types";
import { Card } from "./card";

export const FourCards = props => {
	return (
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
	);
};
