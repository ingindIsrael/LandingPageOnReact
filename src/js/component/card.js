import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" styles="width: 25%;">
			<img
				className="card-img-top"
				src="https://i.pinimg.com/originals/16/1f/2f/161f2f9b617f78bb0916f9f84b082be8.jpg"
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on.
				</p>
				<a href="#" className="btn btn-primary">
					{props.ca}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	ca: PropTypes.string
};
