import React from "react";
import picture from  "../../images/chameleone.jpg"


import song from "../../musicFolder/Winnie Nwagi - Matala.mp3";
export default props=> {

    return <div className="playBar">

    <div className="playbarArtist">
    <img src={picture} alt="playBarImg"/>
    </div>

    <div className="playText">
    <h4>Wanchekecha</h4>        
    <h5>Saida Karoli wachekecha</h5>
    </div>

    <audio className="audio" controls>
    <source src={song} type="audio/mpeg"/>
    </audio>

</div>}