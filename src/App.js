import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ElementDetail from './components/elements/ElementDetail';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';

function App() {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});
	return (
		<Provider store={store}>
			<Router>
				<Header />

				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						exact
						path='/elements/:name'
						component={ElementDetail}
					/>
				</Switch>
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;
