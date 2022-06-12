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
    let movies = this.props.movies
    rentedMovies = this.props.userData.rented
    rentedMovies.forEach(element => {
        movies = movies.filter(movie => movie.id !== element.id)
    });
    nonRentedMovies = [...movies]
    if(rentedMovies.length === 0){
      nonRentedMovies = [...movies]
    }
    if (rentedMovies.length === 0) { thereRented = true }
    return (
      <div className='container'>
        <div className='Nav'>
          <div className='input'>
            <input value={this.state.search} placeholder="Enter movie name :" onChange={this.handelChangeEvent} />
          </div>
          <div className='budget'>
            <span>Budget:${this.props.userData.budget}</span>
          </div>
        </div>
        <div className='MoviesCatalog'>
          <div className='rented'>
            <span>{thereRented ? '' : 'Rented :'}</span>
            <div className='rentedMovies'>
              {rentedMovies.map(movie => {
                return (
                  <Movie key={movie.id} flag="-" userName={this.props.userName} changeRented={this.props.changeRented} movie={movie} />
                )
              })}
            </div>
          </div>
          <span>Catalog :</span>
          <div className='Movies'>
            {nonRentedMovies.map(movie => {
              return (
                <Movie key={movie.id} flag="+" userName={this.props.userName} changeRented={this.props.changeRented} movie={movie} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Catalog