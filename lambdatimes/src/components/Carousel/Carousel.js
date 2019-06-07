import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      current:0,
      images:[]
    }
  }
  componentDidMount(){
    this.setState({
      current:0,
      images:carouselData
    })    
  }

  leftClick = () => {
    let temp=this.state.current;
    if(temp===0)
      temp=this.state.images.length-1
    else
      --temp
    this.setState({current:temp})
  }

  rightClick = () => {
    let temp=this.state.current;
    if(temp===this.state.images.length-1)
      temp=0
    else
      ++temp
    this.setState({current:temp})
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.current]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}