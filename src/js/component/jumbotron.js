import React from "react";
import PropTypes from "prop-types";

export const Jumbo = props => {
	return (
		<div className="jumbotron pt-1 pb-1">
			<h1 className="display-4">{props.jum}</h1>
			<p className="lead">
				The flag of Puerto Rico flies from the head of the Statue of
				Liberty after 28 Puerto Rican nationals seized Liberty Island on
				Oct. 26, 1977. She seems to have a sense of humor about it.
			</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="https://www.youtube.com/watch?v=CWAJS0a1kgg"
					role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};

Jumbo.propTypes = {
	jum: PropTypes.string
};
