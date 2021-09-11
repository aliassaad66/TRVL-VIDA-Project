const React = require("react");

function Service(){
    return(
        <div>
            <h1 class="firstTimer" style={{color:'white'}}>The First-Timer's Travel Guide</h1>
            <h2 class="checkOut" style={{color:'white'}}>Check out below activities</h2>
            <div class="head-text">
                <div class = "head-image">
                    <img class="snow" src={require('../img/snow2.jpg')} />
                    <img class="HotBallon" src={require('../img/HotBallon.jpg')} />
                    <img class="Sakura" src={require('../img/Sakura.jpg')} />
                    <img class="venice" src={require('../img/venice.jpg')} />
                </div>
                <div class="snow__text">
                     <h3>Switzerland's ski resort of Zermatt</h3>
                </div>
                <div class="HotBallon__text">
                     <h3>Colourful hot air balloons in Cappadocia, Turkey</h3>
                </div>
                <div class="Sakura__text">
                     <h3>Cruise down the Grand Canal venice, Italy</h3>
                </div>
                <div class="venice__text">
                     <h3>Cherry blossoms and Mt.Fuji, Japan</h3>
                </div>
            </div>
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