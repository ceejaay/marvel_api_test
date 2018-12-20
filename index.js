const request = require('request')
const axios = require('axios')
const md5 = require('md5')
const {publicKey, privateKey} = require('./secret')

const pubKey = publicKey
const privKey = privateKey
const ts = Date.now()
const hash = md5(ts + privateKey + publicKey)
// const opts = 'characters/1009215'
const opts = 'series/1987'

// axios.get(`${res.data.data.results[0].comics.items[0].resourceURI?apikey=${publicKey}&hash={hash}&ts=${ts}`

axios.get(`https://gateway.marvel.com:443/v1/public/${opts}?apikey=${publicKey}&hash=${hash}&ts=${ts}`)
// .then(res => console.log(Object.keys(res.data.data.results[0])))
// .then(res => console.log(res.data.data.results[0].comics.items[0].resourceURI))
.then(res => {
    
    const newAddress = res.data.data.results[0].comics.items
      console.log(newAddress)
  // axios.get(`${res.data.data.results[0].comics.items[0].resourceURI}?apikey=${publicKey}&hash={hash}&ts=${ts}`)
    // .then(comic => console.log(comic))
})
.catch(err => console.log(err))



