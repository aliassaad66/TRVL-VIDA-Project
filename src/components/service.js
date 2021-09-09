const React = require("react");

function Service(){
    return(
        <div>
            <h2>The First-Timer's Travel Guide</h2>
            <video loop autoPlay muted id="vg-video"
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
            <source src={require('../mp4/video-2.mp4')} type="video/mp4" />
            </video>
        </div>
    );
}

module.exports = Service;