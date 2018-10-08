import React, { Component } from "react";
import "./index.css";

import Tile11 from "./Event Icons/vl_icon_33.png"

class EventTile extends Component {
	render = () => (
		<div className="event-tile">
			<a href="">
				<img src={Tile11}/>
				<h1>{this.props.title}</h1>
				<h2>{this.props.time}</h2>
				<div class="overlay">
					<h3>eventbrite</h3>
				</div>
			</a>
		</div>
	);
}

export default EventTile;
