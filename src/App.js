import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Elements from './components/elements/Elements';
import ElementDetail from './components/elements/ElementDetail';
import Header from './components/layout/Header';

import SearchElements from './components/layout/SearchElements';

function App() {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<SearchElements />

				<div className='container'>
					<Switch>
						<Route exact path='/' component={Elements} />
						<Route
							exact
							path='/elements/:name'
							component={ElementDetail}
						/>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
