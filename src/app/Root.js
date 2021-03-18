import React from 'react';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Scrollbar from 'react-smooth-scrollbar';

export default function Root() {
	return (
		<div className="wrapper">
			<picture className="bg">
				<img src="/assets/background/homepage-bg-desktop.png" alt=" 1" />
			</picture>
			<div className="container">
				<Navigation />
				<Switch>
					<Route exact path="/" render={(props) => <HomePage />} />
				</Switch>
			</div>
		</div>
	);
}
