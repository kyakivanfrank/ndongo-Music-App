import React from "react";
import SlidePage from "./SlidePage";
import databaseJson from "../databaseJson";
class SlideShow extends React.Component {

constructor(props){
    super(props);
    this.state = { 
        slides: databaseJson.SlidesArray,
    currentSlide: databaseJson.SlidesArray[1] 
}
}

forNext =() => {
    const newIndex = databaseJson.SlidesArray.indexOf(this.state.currentSlide)+1;
    this.setState({currentSlide: databaseJson.SlidesArray[newIndex]})
}

forPrevious =() => {
    const newIndex = databaseJson.SlidesArray.indexOf(this.state.currentSlide)-1;
    this.setState({currentSlide: databaseJson.SlidesArray[newIndex]})
}
    render(){
const { slides, currentSlide } = this.state;
const index = databaseJson.SlidesArray.indexOf(currentSlide)
const slidesBackgroundImage=`linear-gradient(to top, rgba(255,255,255, 1), rgba(255,255,255, 0.94)),  url(${currentSlide.slideImage})`;
const backgroundStyler=()=> { return { backgroundImage: slidesBackgroundImage} }
       
       
       return <section>
        <div className="slideShower" style={backgroundStyler()}>   
      
<button className="buttonZ previousArrow" onClick={()=> this.forPrevious()} disabled={index === 0}> 
<div className="arrow L"></div>
</button>
<button className="buttonZ nextArrow" onClick={()=> this.forNext()}  disabled={index === databaseJson.SlidesArray.length-1}>
<div className="arrow R"></div>
</button>

<div className={`slider active-slide-${index}`}>
<div className="slider-wrapper" style={{  'transform': `translateX(-${index*(100/databaseJson.SlidesArray.length)}%)` }} >
{ slides.map(each => <SlidePage key={each.slideID} {...each} />) }
</div>
</div>
</div>
 </section>

}}

export default SlideShow;