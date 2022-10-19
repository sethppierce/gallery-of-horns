import './App.css';
import React, { Component } from 'react'
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
import BeastModal from './BeastModal';
import data from './data.json'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      id: 0
    }
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  handleModal = (event) => this.setState({id: event.target.id - 1})
  
  render() {
    console.log(this.state.id)
    return (
      <>
        <Header />
        <Main openModal={this.openModal} closeModal={this.closeModal} handleModal={this.handleModal} data={data}/>
        <BeastModal openModal={this.openModal} closeModal={this.closeModal} isOpen={this.state.isOpen} id={this.state.id} data={data}/>
        <Footer />
      </>
    )
  }
}


