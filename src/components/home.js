const React = require("react"); 

const { Link } = require("react-router-dom");

function Home(){

    return(
        <div class="fix" style={{ backgroundImage: `url(${require("../img/home.jpg")})` }}> 
          <h1 class="adventure" style={{color:'white'}}>ADVENTURE AWAIT'S</h1>
          <h2 class="waiting" style={{color:'white'}}>What are you waiting for?</h2>
          <Link to="/service">
          <button class="button">Start Here</button>
          </Link>
        </div>
    );
}

module.exports = Home;  