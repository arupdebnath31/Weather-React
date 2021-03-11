import React from 'react';

export default class  Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <div className= "Weather-container">
      <div className = "header"> Location Name</div>
      <div className = "inner-container">
          <div className = "image">Image Goes here</div>
          <div className = "current-Weather">tempareture : 10 </div>
      </div>
      <div className = "footer"> Sunny </div>
    </div>
  }
}
