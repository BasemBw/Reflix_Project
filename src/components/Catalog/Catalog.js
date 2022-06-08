import React, { Component } from 'react'
import Movie from '../Movie/Movie'
import './Catalog.css'

class Catalog extends Component {
  constructor() {
    super()
    this.state = {
      moviesList: [],
      search: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      moviesList: this.props.movies
    })
  }

  handelChangeEvent = (event) => {
    let value = event.target.value
    this.setState({
      search: value.toLowerCase()
    }, function () {
      let filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(value))
      this.setState({
        moviesList: filteredMovies
      })
    })
  }

  render() {
    let thereRented = false
    let rentedMovies = []
    let nonRentedMovies = []
    rentedMovies = this.state.moviesList.filter(movie => movie.isRented)
    nonRentedMovies = this.state.moviesList.filter(movie => !movie.isRented)
    if (rentedMovies.length === 0) { thereRented = true }
    return (
      <div className='container'>
        <div className='Nav'>
          <div className='input'>
            <input value={this.state.search} placeholder="Enter movie name :" onChange={this.handelChangeEvent} />
          </div>
          <div className='budget'>
            <span>Budget:$</span>
          </div>
        </div>
        <div className='MoviesCatalog'>
          <div className='rented'>
            <span>{thereRented ? '' : 'Rented :'}</span>
            <div className='rentedMovies'>
              {rentedMovies.map(movie => {
                return (
                  <Movie key={movie.id} changeRented={this.props.changeRented} movie={movie} />
                )
              })}
            </div>
          </div>
          <span>Catalog :</span>
          <div className='Movies'>
            {nonRentedMovies.map(movie => {
              return (
                <Movie key={movie.id} changeRented={this.props.changeRented} movie={movie} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Catalog