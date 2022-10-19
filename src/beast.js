import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './beast.css'



export default class beast extends Component {
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
    }
  }

handleLikes = () => {
  this.setState({
    likes: this.state.likes + 1,
  });
};

handleClick = (e) => {
  this.props.handleModal(e); 
  this.props.openModal()
} 

  render() {
    return (
      <Card>
        <Card.Img src={this.props.thisBeast.image_url} alt={this.props.thisBeast.description} title={this.props.thisBeast.description} onClick={this.handleLikes}/>
        <Card.Title >{this.props.thisBeast.title}</Card.Title>
        <button onClick={this.handleClick} id={this.props.thisBeast._id} className='cardBtn'> Learn More!</button>
        <Card.Text id='likes'>💕{this.state.likes} likes</Card.Text>
      </Card>
    )
  }
}
