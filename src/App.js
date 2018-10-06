import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import EventTile from "./components/event-tile";
import EventCalendar from "./components/event-calendar";
import Sidebar from "./components/sidebar";
import "./App.css";

class App extends Component {
	render = () => (
		<Router>
			<main>
				<Sidebar />

				<div class="page">
					<Switch>
						<Route exact path="/"         component={EventCalendar}/>
						<Route       path="/about-us" component={AboutUs}/>
						<Route       path="/blog"     component={Blog}/>
					</Switch>
				</div>
			</main>
		</Router>
	);
}

const AboutUs = () => <h1>About Us</h1>;
const Blog    = () => <h1>Blog</h1>;

export default App;
