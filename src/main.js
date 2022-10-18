import React, { Component} from 'react'
import Beast from './beast'
import './main.css'
import data from './data.json'
import Alert from 'react-bootstrap/Alert';

export default class main extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true,
    }
  }
  
  setThis = () => {
  this.setState({
    show: false,
  });
  };

  render() {
    let dataArr = data.map((thisBeast, index) => {
      return <Beast thisBeast = {thisBeast} key={index}/>
    })
    return (
      <main>
        <Alert variant="dark" id='welcome' show={this.state.show} onClick={this.setThis}>
            <Alert.Heading>Welcome to The Horned Beast Gallery! Drop Your Favorite Horned Beasts a Like!</Alert.Heading>
            <p>click on this message to dismiss and have fun!</p>
        </Alert>
        <div id='cards'>
          {dataArr}
        </div>
      </main>
    )
  }
}
