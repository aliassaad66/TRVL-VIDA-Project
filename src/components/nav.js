const React = require("react");

const { Link } = require("react-router-dom");

function Nav({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/signup"></Link>
        <Link to="/button"></Link>
      </nav>
    </header>
  );
}

module.exports = Nav;