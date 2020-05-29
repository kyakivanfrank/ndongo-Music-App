import React from "react";


export default props => {
     
    const { artistImage, artistName } = props.artistData;
    
    return <a href={`/${artistName}`} >
    <div id="ArtistSpan" >
        <img id="artist" src={artistImage} alt="artists" />
        <h3 id="artistName">{artistName}</h3>
    </div></a>


}