import React from "react";

import AlbumPic from "../images/kevinHart.png"
import trendpic from "../images/icons/trendHigher.png"


export default ()=>  <div className="TrendSong">
    <div className="trendBox">
<div className="trendImg"><img id="trendImg" src={AlbumPic} alt="AlbumPic"/></div>
<div className="trendSongName"><h4 >trendingSongName</h4></div>
<div className="trendMark"><img id="trendMark" src={trendpic} alt="trendMark"/></div>
   </div>
 </div>