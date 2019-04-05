import React, { Component } from 'react';


class House extends Component {
  
  
  
  
  handleDeleteHouse = () => {
    const {id} = this.props.house
    this.props.deleteHouse(id)
  }
  
  
  
  
  
  
  render() {
    console.log('PROPS', this.props)

    return (
      <div >
        
        <img src={this.props.house.img} alt="house"/>
        <div className="houseItems">
          <p> Property Name: {this.props.house.name}</p>
          <p> Address: {this.props.house.address}</p>
          <p> City: {this.props.house.city}</p>
          <p> State: {this.props.house.state}</p>
          <p> Zip: {this.props.house.zip}</p>
          <p> Mortagage: {this.props.house.mortgage}</p>
          <p> Rent: {this.props.house.rent}</p>
          <button onClick={this.handleDeleteHouse}> Delete </button>
        </div>


      </div>
    );
  }
}

export default House;