import React, { Component } from 'react'
import  {Link} from 'react-router-dom'

export class Movie extends Component {
  updateRented = () => {
    this.props.changeRented(this.props.movie.id)  
  } 
  render() {
    let params = this.props
    return (
          <div key={params.movie.id} className='movie'>
                <Link to={`/catalog/${this.props.movie.id}`}  ><img alt={params.movie.title} src={params.movie.img} /></Link>
                <button onClick={this.updateRented} >{params.movie.isRented ? "-" : "+"}</button>
          </div>
    )
  }
}

export default Movie