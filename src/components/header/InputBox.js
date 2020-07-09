import React, {useState} from "react";
import SearchChip from "../SearchChip"
import databaseJson from "../databaseJson"


export default ()=>{
    const [text, setText] = useState("")

const artistNames = databaseJson.Music.map(each => each.artistName);
// const songNames = databaseJson.Music.map(each => each.albums.map(album =>  album.songs.map(each => each.title)))
const filteredItems = artistNames.filter( item => {  return item.includes(text) })

const onChange=(keys)=> { setText(keys) }

const getStyle =(keys)=> { 
    return keys ? { display: "flex", justifyContent: "flex-end", marginTop: "25px" }
    : { display:"none"} 
}

    return <>
    {/* <span className="searchDiv"> */}
<input id="searchbar" className="form-control" type="text" value={text}
onChange={(event) => { onChange(event.target.value) }}
placeholder="search for your favorite ugandan music" />
{/* </span> */}

<div style={getStyle(text)} class="chipsBox" >
    {filteredItems.length === 0 ? <h3 style={{color: "white"}}>no results for "{text}"</h3> : filteredItems.map((each, index) => <SearchChip key={index} keyWord={each}/>) }
</div>

</>
}