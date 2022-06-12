import React, { Component , Fragment} from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'

export class Movie extends Component {
  updateRented = () => {
    this.props.changeRented(this.props.movie.id,this.props.userName)
  }

  render() {
    let params = this.props
    return (
        <Fragment>
          <div className='movieCard'>
          <Link to={`/catalog/${this.props.movie.id}`}><div className='movieImg' style={{backgroundImage: `url("${params.movie.img}")`}}></div></Link> 
            <button className='addButton' onClick={this.updateRented} >{params.flag}</button>
          </div>
        </Fragment>
    )
  }
}

export default Movie
