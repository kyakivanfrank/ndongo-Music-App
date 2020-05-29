import React from "react";

import whatsapp from "../../images/icons/whatsapp.png";
import facebook from "../../images/icons/facebook.png";
import twitter from "../../images/icons/twitter.png";
import googlePlus from "../../images/icons/googleplus.png";
import LowerDivision from "./LowerDivision";

export default props => {

    const { params, data } = props;

    const selectedArtist = data.find(artist => { return artist.artistName === params.artistName});
    const selectedAlbum = selectedArtist.albums.find( album => {return album.albumTitle === params.albumTitle });
    const selectedSong = selectedAlbum.songs.find( song => {return song.title === params.title });

  
return <section >
<div className="NowPlayingBG">
<div className="container">
<div className="NowPlaying">
<div className="NowPlayingImgBox">
                 <img src={selectedAlbum.coverimage} alt="this is the albumpic" /> 
</div>
<div className="NowPlayingWordBox">
                <h1>{params.title}</h1>
                <h2>{selectedArtist.artistName}</h2>
                <div>
                <h3>{selectedAlbum.albumTitle}</h3>
                <h3>{selectedSong.dateUploaded}</h3>
                <h3>{selectedSong.timesOfplay} plays</h3>

</div>
<div>
<button >Play</button>
<button>Download MP3</button>
</div>
<div>
<a href="###"><img src={facebook} alt="fb"/></a>
<a href="###"><img src={twitter} alt="fb"/></a>
<a href="###"><img src={googlePlus} alt="fb"/></a>
<a href="###"><img src={whatsapp} alt="fb"/></a>
</div>
</div>
</div>
</div></div>

<div className="container">
<h2 id="songlyrics">Lyrics for the song</h2>
<div className="lyricsBox">
<p>
{selectedSong.lyrics}
</p>
</div>

 {
<LowerDivision selectedArtist={selectedArtist}  data={data}/>

}
</div>


</section>
}