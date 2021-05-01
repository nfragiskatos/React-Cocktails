import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import { env } from './ProjectProperties';
function App () {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={env.nav.home}>
						<Home />
					</Route>
					<Route path={env.nav.about}>
						<About />
					</Route>
					<Route path={env.nav.cocktailDetails}>
						<SingleCocktail />
					</Route>
					<Route path={env.nav.error}>
						<Error />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
