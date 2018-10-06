import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import EventTile from "./components/event-tile";
import EventCalendar from "./components/event-calendar";
import Sidebar from "./components/sidebar";
import "./App.css";

// https://tylermcginnis.com/react-router-animated-transitions/

let bounce = val => spring (val, {
	stiffness: 330,
	damping: 22
});

const bounceTransition = {
	atEnter: {
		opacity: 0,
		transform: `TranslateY(-3%)`
	},
	atLeave: {
		opacity: bounce(0),
		transform: `TranslateY(${bounce(-3)}%)`
	},
	atActive: {
		opacity: bounce(1),
		transform: `TranslateY(${bounce(0)}%)`
	}
};

const App = () => (
	<Router>
		<main>
			<Sidebar />

			<div className="page">
				<AnimatedSwitch
					atEnter={bounceTransition.atEnter}
					atLeave={bounceTransition.atLeave}
					atActive={bounceTransition.atActive}
					className="route-wrapper"
				>
					<Route exact path="/calendar" component={EventCalendar}/>
					<Route exact path="/about-us" component={AboutUs}/>
					<Route exact path="/blog"     component={Blog}/>
					<Route render={() => <Redirect to="/calendar"/>}/>
				</AnimatedSwitch>
			</div>
		</main>
	</Router>
);

const AboutUs = () => <h1>About Us</h1>;
const Blog    = () => <h1>Blog</h1>;

export default App;
