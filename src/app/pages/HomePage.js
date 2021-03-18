import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';

export default function HomePage() {
	return (
		<div className="home-page">
			<div className="container-content">
				<div className="about-me-container">
					<picture className="bg">
						<img src="/assets/background/homepage-kv-desktop.png" alt="1" />
					</picture>
					<div className="left-container">
						<picture className="kv-person">
							<img src="/assets/homepage-person.png" alt=" 1" />
						</picture>
					</div>
					<div className="right-container">
						<picture className="logo">
							<img src="/assets/logotypes/logo-white-blue.svg" alt="1" />
						</picture>
						<article>
							<h2>
								Front-end Developer
								<br className="to-vHD" /> & UI/UX Designer
							</h2>
							<p>
								I am a hardworking, ambitious and resourceful person. I enjoy working in a team as I
								value direct contact and a good atmosphere. The most important to me is to{' '}
								<strong>develop, to constantly gain new experiences and skills.</strong> I’m not afraid
								of decision-making and responsibility, thanks to which{' '}
								<strong>I perform tasks entrusted to me conscientiously and reliably.</strong>
							</p>
						</article>
						<div className="about-me-footer">
							<img className="signature" src="/assets/signature.png" alt="Ernest Rudziec signature" />
							<div className="social-media-icons">
								<picture>
									<img src="/assets/icons/facebook.svg" alt="facebook" />
								</picture>
								<picture>
									<img src="/assets/icons/linkedin.svg" alt="linkedin" />
								</picture>
								<picture>
									<img src="/assets/icons/twitter.svg" alt="twitter" />
								</picture>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
