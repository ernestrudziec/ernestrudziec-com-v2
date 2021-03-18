import React from 'react';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function Root() {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path="/" render={(props) => <HomePage />} />
			</Switch>
		</>
	);
}
