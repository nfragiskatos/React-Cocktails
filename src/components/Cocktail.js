import React from 'react';
import { Link } from 'react-router-dom';
import { env } from '../ProjectProperties';

const Cocktail = ({ id, image, name, info, glass }) => {
	return (
		<article className="cocktail">
			<div className="img-container">
				<img src={image} alt={name} />
			</div>
			<div className="cocktail-footer">
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{info}</p>
				<Link className="btn btn-primary btn-details" to={env.nav.cocktailDetails.replace(':id', id)}>
					details
				</Link>
			</div>
		</article>
	);
};

export default Cocktail;
