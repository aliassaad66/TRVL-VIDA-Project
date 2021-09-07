const React = require("react");

function Service(){
    return(
        <div>
            <h2>The First-Timer's Travel Guide</h2>
            <img class="Beach" src={require('../img/Beach.jpg')} />
        </div>
    );
}

module.exports = Service;