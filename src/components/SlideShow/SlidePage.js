import React from  "react";
import { Link } from "react-router-dom";


export default props => { 
const { slideImage, slideID, genre } = props;
  return <Link to="/3333"> <div id={`card-${slideID}`} className="slidepiece"> <img  src={slideImage}  alt="slidePage"/> 
  <div>
  <h1 >{genre}</h1>
  </div>
  </div> 
  </Link>
   }