import React, { Component } from 'react'
import Users from '../Users/Users'
import './Landing.css'

export class Landing extends Component {
  render() {
    return (
      <div className='contanier'>
        <div className='title'>WHO'S WHATCHING?</div>
        <div className='Users'>
          {Object.keys(this.props.users).map(user => {
            return(
              <Users key={user} setUser={this.props.setUser} user={user} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Landing