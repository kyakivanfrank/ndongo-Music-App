import React from "react";

// import albumArtPlaceholder from "../images/Album art placeholder.jpg";


export default props => {

   const {songName, songArtist, albumTitle, albumArt} = props;


return <a href ={`/${songArtist}/${albumTitle}/${songName}`}>
<span className="song" >
<img id="thumbnail" src={albumArt} alt="rer"/>
<h4>{songName}</h4>
<h5>{songArtist}</h5>
</span>
</a>

}