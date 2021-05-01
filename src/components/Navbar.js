import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { env } from '../ProjectProperties';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<Link to={env.nav.home}>
					<img src={logo} alt="cocktail db logo" className="logo" />
				</Link>
				<ul className="nav-links">
					<li>
						<Link to={env.nav.home}>home</Link>
					</li>
					<li>
						<Link to={env.nav.about}>about</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
