const React = require("react");

const { Link } = require("react-router-dom");

function Nav({ title }) {
  return (
    <header class="header-nav">
      <h1>{title}</h1>
      <nav>
        <Link class="Home" to="/">HOME</Link>
        <Link class="about" to="/about">ABOUT</Link>
        <Link class="signup" to="/signup"></Link>
        <Link class="buttonClicks" to="/buttonClicks"></Link>
        <Link class="service" to="/service">SERVICE</Link>
        <Link class="menu" to="/menu">MENU</Link>
      </nav>
    </header>
  );
}

module.exports = Nav;