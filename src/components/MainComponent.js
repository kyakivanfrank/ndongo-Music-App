import React from "react";
import ArtistPanel from "./ArtistPanel";
import MusicCollection from "./MusicCollection";
import RankingPanel from "./RankingPanel";
import SlideShow from "./SlideShow/SlideShow";


export default props => {

    const { data } = props;
    
return <>
<SlideShow />
<section className="container">
<h2>Popular Artists</h2>
<ArtistPanel artists={data}/>
<div className="detailsPanel">
<MusicCollection music={data} />
<RankingPanel music={data}/>
</div>
</section>

</>

}





