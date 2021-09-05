const React = require("react");

function Home(){
    let img = document.querySelector("img"); 
    return(
        <div>
          <h1>ADVENTURE AWAIT'S</h1>
          <img src="img/snow.jpg" alt="" />
        </div>
            
    );
}

module.exports = Home;