const React = require("react");

function About(){
    return(
        <div>
            <h1 style={{color:'white'}}>Explore Wonderful Places</h1>
            <video loop autoPlay muted id="bg-video"
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
            <source src={require('../mp4/video-1.mp4')} type="video/mp4" />
            </video>
        </div>
    );
}

module.exports = About;