const React = require("react");

const { useState, useEffect } = require("react");
function Clock(){
    const [time, setTime] = useState(0);
    
    useEffect(function (){
        setTimeout(function (){
            setTime(time + 1); // update the time variable
        }, 1000); // wait a second and call the callback
    }, [time] // Anytime time changes, call the callback function
    );

    return(
        <div>
            <h4>You have been on the page for {time} seconds</h4>
        </div>
    );
}

module.exports = Clock;