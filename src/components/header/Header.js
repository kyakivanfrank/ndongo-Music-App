import React from "react";

import logo from "../../images/logo.png";
import InputBox from "./InputBox";


export default ()=> <header>
<div className="container">

<a href="/">
<img id="logo" src={logo} alt="websitelogo"/>
</a>

<InputBox/>

</div>


   
</header>