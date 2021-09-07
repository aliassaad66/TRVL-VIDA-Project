const React = require("react");

function Home(){
    return(
        <div style={{ backgroundImage: `url(${require("../img/home.jpg")})` }}>
          <h1>ADVENTURE AWAIT'S</h1>
          <h2>all excited for travel after pandemic covid-19 is over</h2>
          <button>Watch Trailer</button>
        </div>

    );
}

module.exports = Home;  