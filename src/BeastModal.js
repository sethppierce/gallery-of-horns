import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './BeastModal.css'


export default class BeastModal extends Component {
  render() {
    return (
      <Modal show={this.props.isOpen}>
        <Modal.Header id='modalHead'>
          <Modal.Title id='modalTtl'>{this.props.data[this.props.id].title}</Modal.Title>
        </Modal.Header>
        <img src={this.props.data[this.props.id].image_url} alt={this.props.data[this.props.id].description}></img>
        <Modal.Body>{this.props.data[this.props.id].description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

