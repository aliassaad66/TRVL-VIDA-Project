const React = require("react");
const { render } = require("react-dom");
const App = require("./components/app");

let target = document.querySelector("#app");

render(<App />, target); // Component to load, where to show it