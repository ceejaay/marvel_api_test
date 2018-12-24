import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import md5 from 'md5'
import {publicKey, privateKey} from './secret.js'

class App extends Component {
  constructor() {
    super()
      this.state = {
        comics: ['1'],
        opts: 'series/1987',
        issue: [],
        error:  null
      }
  }

  getComics = (link) => {
    const ts = Date.now()
    const hash = md5(ts + privateKey + publicKey)
    // axios.get(`${link}?apikey=${publicKey}&hash=${hash}&ts=${ts}`)
    // .then(response => {
    //   this.setState({issue: response.data.data})
    // })
    // .catch(error => console.log(error))
  }

  componentDidMount() {
    const ts = Date.now()
    const hash = md5(ts + privateKey + publicKey)
    // axios.get(`https://gateway.marvel.com:443/v1/public/${this.state.opts}?apikey=${publicKey}&hash=${hash}&ts=${ts}`)
    // .then(res => {
    //   this.setState({comics: res.data.data.results[0].comics.items})
    // })
    // .catch(err => this.setState({error: err}))

  }
  render() {
    if(this.state.comics.length > 0) {
      return (
          <div>
          {this.state.comics.map((item, idx) => (
            // <p onClick={this.getComics(item.resourceURI)} key={idx}>{item.name}</p>
           <p>{item.name}</p>

          ))}
          </div>
          )
    } else {
      if(this.state.error) {
        return (
          <div>{this.state.error.message}</div>
          // <div>error</div>
            )
      } else {
      return (
          <div>Getting comics</div>
          )
      }
    }
  }
}

export default App;
