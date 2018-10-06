import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import Sidebar from "./components/sidebar";
import "./App.css";

class App extends Component {
	render = () => (
		<Router>
			<main>
				<Sidebar/>
				<h1>Testing</h1>
				<h1>Testing 2</h1>

				<div className="content">
					<Switch>
						<Route exact path="/"         component={Home}/>
						<Route path="/event-calendar" component={EventCalendar}/>
						<Route path="/about-us"       component={AboutUs}/>
						<Route path="/blog"           component={Blog}/>
					</Switch>
				</div>
			</main>
		</Router>
	);
}

const Home          = () => <h1>Home</h1>
const EventCalendar = () => <h1>Events Calendar</h1>
const AboutUs       = () => <h1>About Us</h1>
const Blog          = () => <h1>Blog</h1>

export default App;
