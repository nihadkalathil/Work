import React, { Component } from 'react'

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red", name :"are"};
      }
      static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
      }
      
  render() {
    
    return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <h2>My name is  {this.state.name}</h2>
      <div>Project</div>
      </div>
    )
  }
}
