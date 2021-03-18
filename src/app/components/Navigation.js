import React from 'react';

export default function Navigation() {
	return (
		<div className="nav-container">
			<nav className="navigation">
				<ul>
					<picture className="logo">
						<img src="/assets/logotypes/logo-mini.svg" alt="logo mini" />
					</picture>
					<li className="active">HOME</li>
					<li>PROJECTS</li>
					<li>SKILLS</li>
					<li>CONTACT</li>
				</ul>
			</nav>
		</div>
	);
}
