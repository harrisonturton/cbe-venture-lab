import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import logo from "./vl_wordmark.svg";

const nav_items = [
	{ key: 0, text: "Event Calendar", route: "/calendar" },
	{ key: 1, text: "About Us",       route: "/about-us" },
	{ key: 2, text: "Blog",           route: "/blog"     },
];

class Sidebar extends Component {
	render = () => (
		<nav className="sidebar">
			<img src={logo}/>
			<ul>
				{nav_items.map(elem => (
					<li>
						<NavLink
							to={elem.route}
							className="nav-elem"
							activeClassName="nav-elem-active"
						>{elem.text}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Sidebar;
