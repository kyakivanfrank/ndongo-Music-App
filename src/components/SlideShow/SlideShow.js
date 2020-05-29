import React from "react";
import SlidePage from "./SlidePage";
import databaseJson from "../databaseJson";
import previousBtn from  "../../images/icons/previousArrow.png";
import nextBtn from  "../../images/icons/nextArrow.png";
class SlideShow extends React.Component {

constructor(props){
    super(props);
    this.state = { slides: databaseJson.SlidesArray, currentSlide: databaseJson.SlidesArray[1] }
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
        
        <div className="buttonBox">
<button className="previousArrow" onClick={()=> this.forPrevious()} disabled={index === 0}> <img src={previousBtn}alt="previousBtn"/> </button>
<button className="NextArrow" onClick={()=> this.forNext()}  disabled={index === databaseJson.SlidesArray.length-1}> <img src={nextBtn}alt="nextBtn"/> </button>
</div>

<div className={`slider active-slide-${index}`}>
<div className="slider-wrapper" style={{  'transform': `translateX(-${index*(100/databaseJson.SlidesArray.length)}%)`   }}   >
{ slides.map(each => <SlidePage key={each.slideID} {...each} />) }
</div>
</div>
</div>
 </section>

}}

export default SlideShow;