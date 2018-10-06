import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const nav_items = [
	{ key: 0, text: "Event Calendar", route: "/event-calendar" },
	{ key: 1, text: "About Us",       route: "/about-us" },
	{ key: 2, text: "Blog",           route: "/blog" },
];

class Sidebar extends Component {
	render = () => (
		<nav>
			<ul>
				{nav_items.map(elem => (
					<NavLink
						key={elem.key}
						to={elem.route}
						className="nav-item"
						activeClassName="nav-item active"
					>
						{elem.text}
					</NavLink>
				))}
			</ul>
		</nav>
	);
}

export default Sidebar;
