import React from  "react";

export default props=> {

    const{title, artistName, album, timesOfplay,dateUploaded} = props;

    return <section >
<div className="NowPlayingLists">
<div className="NowPlayingImgBoxLists">
<img src={album.coverimage} alt="albumpic" /> 

</div>
<div className="NowPlayingWordBoxLists">

<a href={`/${artistName}/${album.albumTitle}/${title}`}>
<h3>{title}</h3>
</a>

<div>
<h4>{artistName}</h4>
<h4>{dateUploaded}</h4>
<h4>{timesOfplay} plays</h4>

</div>
<div>
<button>Play</button>
<button>Download MP3</button>
</div>

</div>
</div>




</section>  
}