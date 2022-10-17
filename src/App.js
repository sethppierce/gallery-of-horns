import './App.css';
import React, { Component } from 'react'
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'



export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}


