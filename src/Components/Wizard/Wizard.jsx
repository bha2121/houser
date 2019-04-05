import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class Wizard extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  handleOnChange = (e) => {
    const {value, name} = e.target
    console.log(value)
    this.setState({
      [name]: value
    })
  }



  render() {
    return (
      <div >
        Wiz
        <Link to='/'>
          <button>Cancel</button> 
        </Link>

        <input name="name" placeholder="Name" onChange={this.handleOnChange}></input>
        <input name="address" placeholder="Address" onChange={this.handleOnChange}></input>
        <input name="city" placeholder="City" onChange={this.handleOnChange}></input>
        <input name="state" placeholder="State" onChange={this.handleOnChange}></input>
        <input name="zipcode" placeholder="Zipcode" onChange={this.handleOnChange}></input>


      </div>
    );
  }
}

export default Wizard;