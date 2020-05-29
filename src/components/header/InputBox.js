import React from "react";
import searchicon from "../../images/searchIcon.png"




export default ()=>{




    return <span className="searchDiv">
<input id="searchbar" 
type="text"
// value={}
// onChange={}
placeholder="search for your favorite ugandan music" />
<button>
<img id="searchicon" src={searchicon} alt="searchIcon"/>
</button>
</span>}