import React from "react";
import Artist from "./Artist";


export default props => {

    // console.table(props.artists[0])

return <section >
<div className="artistpanel">{ props.artists.map( (artist, index) => <Artist key={index} artistData={artist} /> ) }</div>
</section>

}