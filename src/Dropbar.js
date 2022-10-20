import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default class Dropbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 'All Horns',
    }
  }

  handleSelect = (event) => {
    this.setState({selected: event.target.id});
  }

  render() {
    let hornsDrop = this.props.horns.map((horn,index) => {
      return <Dropdown.Item href="#/action-1" id={horn} onClick={this.props.handleHorn} key={index}>{horn}</Dropdown.Item>
    })


    console.log(this.props.horns)
    return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {this.props.label}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        {hornsDrop}
      </Dropdown.Menu>
    </Dropdown>
    )
  }
}
