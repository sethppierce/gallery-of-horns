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
      id: 0,
      data: data,
      label: 'All Horns'
    }
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  handleModal = (event) => this.setState({id: event.target.id - 1});

  

  handleHorn = (event) => {
    let newHorn = data.filter(element => {
      if(event.target.id === 'All Horns'){
        return this.setState({label: 'All Horns', data: data})
      }
      else {
        return element.horns.toString() === event.target.id}
      })
      if(event.target.id !== 'All Horns'){
        return this.setState({data: newHorn, label: `Horns: ${event.target.id}`})
      }
  }
  
  render() {
    let hornsArr = data.map(beast => beast.horns)
    let uniqueHorns = ['All Horns', ...new Set(hornsArr)] 
    console.log(this.handleHorn)
    return (
      <>
        <Header />
        <Main openModal={this.openModal} closeModal={this.closeModal} handleModal={this.handleModal} data={this.state.data} horns={uniqueHorns} handleHorn={this.handleHorn} label ={this.state.label}/>
        <BeastModal openModal={this.openModal} closeModal={this.closeModal} isOpen={this.state.isOpen} id={this.state.id} data={data}/>
        <Footer />
      </>
    )
  }
}


