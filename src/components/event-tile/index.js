import React, { Component } from "react";
import "./index.css";
import Tile from "./vl_icon_43.png";

class EventTile extends Component {
	render = () => (
		<div className="event-tile">
			<img src={Tile}/>
			<h1>{this.props.title}</h1>
			<h2>{this.props.time}</h2>
		</div>
	);
}

export default EventTile;
