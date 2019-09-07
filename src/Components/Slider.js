import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' ;
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import SliderCss from '../css/slider.css'
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'


var images =[slide1,slide2,slide3]
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter:0}
    this.next = this.next.bind(this);
    this.previous=this.previous.bind(this);
    }

   
    
componentDidMount(){

}

next() {
    this.setState({ counter: this.state.counter + 1 })
    if (this.state.counter === images.length - 1){
        this.setState({counter:0})
    }
  }

previous(){
    this.setState({counter:this.state.counter -1})
    if(this.state.counter === 0){
        this.setState({counter:images.length -1})
    }
}
  
  
    render(){
       return(
           <div class='mainSlider'>
        <div class='slider'>
            <CSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={1}
            transitionLeaveTimeout={1}
            >
            <img src={images[this.state.counter]} key={this.state.counter} alt='slides'/>
            </CSSTransitionGroup>
            </div>
            <i onClick={this.previous} className="far fa-caret-square-left slideArrow leftArrow"></i>
            <i onClick={this.next} className="far fa-caret-square-right slideArrow rightArrow"></i>
            
            
        </div>
       )

    }

}