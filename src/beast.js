import React, { Component } from 'react'

export default class beast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.thisBeast.title}</h2>
        <img src={this.props.thisBeast.image_url} alt={this.props.thisBeast.description} title={this.props.thisBeast.description}/>
        <p>{this.props.thisBeast.description}</p>
      </>
    )
  }
}
