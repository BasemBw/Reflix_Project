import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Catalog from './components/Catalog/Catalog';
import './App.css'
import MovieDetail from './components/MovieDetail/MovieDetail';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      moviesCatalogs: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 5, isRented: false, title: "Avatar", year: 2014, img: "/images/avatar.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 6, isRented: false, title: "Aquaman", year: 2013, img: "/images/aquaman.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 7, isRented: false, title: "The Dark knight", year: 2015, img: "/images/batman.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 8, isRented: false, title: "Iron Man", year: 2012, img: "/images/ironman.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 9, isRented: false, title: "Rush Hour 3", year: 2011, img: "/images/rushhour.png", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 10, isRented: false, title: "Red Notice", year: 2016, img: "/images/rednotice.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 11, isRented: false, title: "Spider-Man No Way Home", year: 2020, img: "/images/spider-man.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 12, isRented: false, title: "John Wick", year: 2017, img: "/images/jhonweek.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 13, isRented: false, title: "Man Of Steel", year: 2014, img: "/images/manofsteel.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      users: {
        'mone': {
          'budget': 10,
          'rented': []
        },
        'tina': {
          'budget': 10,
          'rented': []
        },
        'sara': {
          'budget': 10,
          'rented': []
        },
        'john': {
          'budget': 10,
          'rented': []
        }
      },
      currectUser: JSON.parse(localStorage.currectUser || 'empty')
    }
  }

  changeRented = (id,userName) => {
    let index = 0
    let count = 0
    let isExistInRented = this.state.users[userName].rented.some(element =>  element.id === id );
    this.state.moviesCatalogs.forEach(movie => {
        if(movie.id === id){
          index = count
        }
        count++
    })
    if( isExistInRented ){
      let newUsers = {...this.state.users}
      let rentedArray = [...this.state.users[userName].rented]
      rentedArray = rentedArray.filter(element => element.id !== id)
      newUsers[userName].rented = rentedArray
      newUsers[userName].budget = newUsers[userName].budget + 3
      this.setState({
        users : newUsers,
      })
    }else {
      if(this.state.users[userName].budget >= 3){
        let newUsers = {...this.state.users}
        let rentedArray = [...this.state.users[userName].rented]
        rentedArray.push(this.state.moviesCatalogs[index])
        newUsers[userName].rented = rentedArray
        newUsers[userName].budget = newUsers[userName].budget - 3
        this.setState({
          users : newUsers,
        })
      }else {
        alert("You don't have enough budget!!")
      }
    }
  }

  setUser = (userName) => {
    localStorage.currectUser = JSON.stringify(userName)
    this.setState({
      currectUser: userName
    })
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='Header'>
            <div className='Links'>
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
            </div>
            <div className='Logo'>Reflix</div>
          </div>
          <Routes>
            <Route path="/" element={<Landing
              users={this.state.users}
              setUser={this.setUser}
            />} />
            <Route path="/catalog" element={
              <Catalog
                userData={this.state.users[this.state.currectUser]}
                userName={this.state.currectUser}
                movies={this.state.moviesCatalogs}
                changeRented={this.changeRented}
              />} />
            <Route path='/catalog/:id' element={<MovieDetail movies={this.state.moviesCatalogs} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
