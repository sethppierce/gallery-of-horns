import React, { Component} from 'react'
import Beast from './beast'
import './main.css'
import Alert from 'react-bootstrap/Alert';
import Dropbar from './Dropbar';

export default class main extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true,
      input: ''
    }
  }
  
  setThis = () => {
  this.setState({
    show: false,
  });
  };
  
  setInput = (value) => {
    this.setState({
      input: value,
    });
    };

    
    
    render() {
  
    let filteredBeasts = this.props.data.filter(beast => {
      return beast.title.toLowerCase().includes(this.state.input.toLowerCase())
    })
  
    let filterDisplay = filteredBeasts.map((thisBeast, index) => {
      return <Beast thisBeast = {thisBeast} key={index} openModal={this.props.openModal} closeModal={this.props.closeModal} handleModal={this.props.handleModal} id={thisBeast._id}/>
    })
    console.log(filterDisplay)
    return (
      <main>
        <Alert variant="dark" id='welcome' show={this.state.show} onClick={this.setThis}>
            <Alert.Heading>Welcome to The Horned Beast Gallery! Drop Your Favorite Horned Beasts a Like!</Alert.Heading>
            <p>click on this message to dismiss and have fun!</p>
        </Alert>
        <div id='searchDiv'>
          <Dropbar horns={this.props.horns} handleHorn={this.props.handleHorn} label={this.props.label} id='dropbar'/>
          <input value={this.state.input} onChange={e => this.setInput(e.target.value)}type='search' id='searchBar'  placeholder='Search For Horned Animals Here!'></input>
        </div>
        <div id='cards'>
          {filterDisplay}
        </div>
      </main>
    )
  }
}
