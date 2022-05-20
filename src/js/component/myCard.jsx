import React from "react";
import PropTypes from "prop-types";

export const MyCard = (props) => {
	return (
		<div className="card m-4 mb-5 text-center">
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title mx-auto">{props.cardTitle}</h5>
				<p className="card-text mx-auto">{props.cardDescription}</p>
				<div className="card-footer">
					<a href={props.buttonUrl} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};
MyCard.propTypes = {
	image: PropTypes.string,
	cardTitle: PropTypes.string,
	cardDescription: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
};
