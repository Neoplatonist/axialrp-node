import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDesc: false
    };
  }

  showDesc = e => {
    console.log('clikd')
    ReactDOM.findDOMNode(this.skillDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  render() {
    return (
      <li className="input skillContainer"> 
        <input type="checkbox" />
        <div className="skill-text"> { this.props.name }</div>
        <div className="skill-append"> ({ this.props.mod.slice(0, 3).toUpperCase() })</div>
        <span className="skill-append" onClick={this.showDesc}> info <i className="fas fa-angle-down"></i></span>

        <div 
          ref={ el => this.skillDesc = el } 
          className="skillDesc"
        >
          {this.props.desc}
        </div>
      </li>
    );
  }
}