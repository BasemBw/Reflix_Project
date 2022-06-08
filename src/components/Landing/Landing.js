import React, { Component } from 'react'
import Users from '../Users/Users'
import './Landing.css'

export class Landing extends Component {
  render() {
    return (
      <div className='contanier'>
        <div className='title'>WHO'S WHATCHING?</div>
        <div className='Users'>
          {this.props.users.map(user => {
            return(
              <Users key={user} user={user} updateCurrectUser={this.props.updateCurrectUser} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Landing