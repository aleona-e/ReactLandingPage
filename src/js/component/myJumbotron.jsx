import React from "react";
import PropTypes from "prop-types";

export const MyJumbotron = (props) => {
	return (
		<div className="jumbotron m-4 p-5 bg-light rounded">
			<h1 className="display-4">
				<strong>{props.title}</strong>
			</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};
MyJumbotron.proptypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
};
