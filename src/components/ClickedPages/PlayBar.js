import React from "react";
import picture from  "../../images/kevinHart.png";

import song from "../../musicFolder/Fire Dancer - Winnie Nwagi & Slim Prince (Howwe.biz).mp3";

export default props=> {
    
    
    
    return <div className="playBar">



<div className="playbarArtistdisplay popup">
<img src={picture} alt="playBarImg"/>
<span>
<audio autoPlay="on" src={song}>this is e song</audio>
<h4>Song TItle </h4>
<h5>Song name </h5></span>
</div>


<div>
<button>play</button>
<span>progressbar compoonent</span>

<button>refresh button</button>
</div>

</div>}