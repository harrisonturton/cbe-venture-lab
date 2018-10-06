import React, { Component } from "react";
import EventTile from "../event-tile";
import "./index.css";

class EventCalendar extends Component {
	render = () => (
		<div className="event-calendar">
			<div className="event-column">
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
			</div>
			<div className="event-column">
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
			</div>
			<div className="event-column">
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
			</div>
			<div className="event-column">
				<EventTile title="Fuel Talks" time="3rd Oct 4pm"/>
			</div>
		</div>
	);
}

export default EventCalendar;
