import React, { Component } from 'react'

export class Users extends Component {
  render() {
    return (
        <div className='user' key={this.props.user} id={this.props.user}>{this.props.user}</div>
    )
  }
}

export default Users