import React from "react";
import facebook from "../../images/icons/facebook.png"
import twitter from "../../images/icons/twitter.png"
import instagram from "../../images/icons/instagram.png"


export default ()=> <footer >

<section className="footerData container">
<h1>This part will be organised on commencement</h1>
</section>

<section className="container footer">
<div className="aboutings">
<a target="blank" href="####"><h4>ABOUT US</h4></a> <h4>|</h4>
<a target="blank" href="####"><h4>ADVERTS</h4></a> <h4>|</h4>
<a target="blank" href="####"><h4>TERMS APPLIED</h4></a> <h4>|</h4>
</div>

<div className="oursocialMedia">
<a target="blank" href="###"><img src={facebook} alt="facebook"/></a>
<a target="blank" href="###"><img src={twitter} alt="twitter"/></a>
<a target="blank" href="###"><img src={instagram} alt="instagram"/></a>
</div>

<div>
<h4>powered by<a  href="http://frank-portifolio.herokuapp.com" target="blank">kyakivanfrank</a></h4>
</div>

</section>
</footer>