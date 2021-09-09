const React = require("react"); 

function Home(){
    return(
        <div class="fix" style={{ backgroundImage: `url(${require("../img/home.jpg")})` }}> 
          <h1 class="adventure" style={{color:'white'}}>ADVENTURE AWAIT'S</h1>
          <h2 class="waiting" style={{color:'white'}}>What are you waiting for?</h2>
          <button class="button">Start Here</button>
        </div>
    );
}

module.exports = Home;  