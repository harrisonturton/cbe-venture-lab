# Venture Lab ANU

🚀 The repo for the website of ANU's Venture Lab.

## Installation

### Requirements

- React
- Yarn
- Sass

```
$ git clone https://github.com/harrisonturton/venture-lab-website.git
$ cd venture-lab-website
$ yarn install
```

## Development

To just launch the website, run `yarn start` inside the project root.

Launching for development is slightly more involved, since we are preprocessing our stylesheets. To get live browser updates (super useful in development), we need to run Sass and the React server at the same time. We can do this a couple of ways:

- Use `tmux` (or any other terminal multiplexer) and split both processes into seperate panes
- Open two terminals, and run each process individually
- Split them both into background processes: `sass --watch . & yarn start &`.

We haven't integrated Sass into react, since that's pretty annoying and quite fiddly. This avoids a lot of yak shaving.

## Contributing

### Code Style

When creating a new component, create a new folder in `src/components/`. Name the actual component in `mycomponent/index.js`, and name the stylesheet `mycomponent/index.scss`. This makes importing really easy, since it enables singular imports, e.g. `import Sidebar from "./components/sidebar"`, and also destructured imports, e.g. `import { Sidebar, NavItem } from "./components/sidebar"`.

Example:

```javascript
/* Inside /src/components/sidebar/index.js */
with React, { Component } from "react";
with "./index.css";

class Sidebar extends Component {
  render = () => (
    <h1>I am a sidebar!</h1>
  );
}

const Header = () => <h1>Header</h1>;

export {
  Sidebar as default,
  Header
}
```

Can be imported as `import Sidebar, { Header } from "./components/sidebar"`
