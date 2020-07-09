import React from "react"
import ArtistPanel from "../ArtistPanel"
import Collapsible from "./Collapsible";


export default props => {

    const {data, selectedArtist } =props;

   
return <div className="lower-division">
<div className="div-artistMusic">
<h2 >{selectedArtist.artistName}'s collection</h2>


<Collapsible {...props} />
</div>




<div className="div-relatedArtists">
<h2 >Related artists</h2>
<ArtistPanel  artists={data}/>

</div>

</div>

}