import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './store';
import Elements from './components/elements/Elements';
import ElementDetail from './components/elements/ElementDetail';
import SearchElements from './components/layout/SearchElements';

function App() {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});
	return (
		<Provider store={store}>
			<Router>
				<h1>Chemistry</h1>
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
