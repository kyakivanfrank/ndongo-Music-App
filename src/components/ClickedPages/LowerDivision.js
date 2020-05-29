import React from "react";
import SongTile from "./SongTile";
import ArtistPanel from "../ArtistPanel";


export default props => {

    const {data, selectedArtist } =props;

   
return <div className="lower-division">
<div className="div-artistMusic">
<h2 >{selectedArtist.artistName}'s collection</h2>
{selectedArtist.albums.map((album, index) => { return <div key={index} className="albumDiv"> 
 <div className="albumSlot">
<h3>{album.albumTitle}</h3>
</div>

  {album.songs.map((song, index) => <SongTile key={index}  {...song} {...selectedArtist} album={album} />)}  </div> } )}
</div>

<div className="div-relatedArtists">
<h2 >Related artists</h2>
<ArtistPanel  artists={data}/>

</div>

</div>

}