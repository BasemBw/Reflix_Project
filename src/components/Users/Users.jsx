import React, { Component } from 'react'

export class Users extends Component {
  chouseUser =()=>{
    this.props.setUser(this.props.user)
  }
  render() {
    return (
        <div className='user' onClick={this.chouseUser} key={this.props.user} id={this.props.user}>{this.props.user}</div>
    )
  }
}

export default Users