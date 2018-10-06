import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./index";
import { HashRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Sidebar />, div);
	ReactDOM.render(
		<Router>
			<Sidebar/>
		</Router>, div);
	ReactDOM.unmountComponentAtNode(div);
});
