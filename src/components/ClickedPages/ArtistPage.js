import React from "react";
import LowerDivision from "./LowerDivision";


export default props => {

    const { params, data } = props;

const selectedArtist = data.find( item => { return   params.artistName === item.artistName })
// console.table(data);
// console.table(selectedArtist);

const backgroundimage= ` linear-gradient( to right ,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.850),rgba(0, 0, 0, 0.850),rgba(0, 0, 0, 0.750),rgba(0, 0, 0, 0.750),rgba(0, 0, 0, 0.850)),  url(${selectedArtist.artistImage})`;
const boxStyle =()=>{ return {
    backgroundImage: backgroundimage,
    backgroundSize : "155vh"
    
} }

return <div className="artistPage">
<div className="largePic" style={boxStyle()} >
<div className="container">
<img src={selectedArtist.artistImage} alt="artistPic"/> 
<span>
<h1>{selectedArtist.artistName}</h1>
<h2 >{selectedArtist.artistGenre.map((item,index)=> <span key={index}>{item}_</span> )}</h2>
</span>
</div>
</div>

<div className="container">
<h2 id="songlyrics">About {selectedArtist.artistName}</h2>
<div className="artistDescritpion">
<p>{selectedArtist.aboutArtist}</p>
     
</div>


<LowerDivision selectedArtist={selectedArtist} data={data}/>

</div>
</div>
}