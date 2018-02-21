import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';

import { connect } from 'react-redux';
import {
  selectSkills,
  setSkills
} from '../../../../actions';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDesc: false
    };
  }

  handleInput = (name, e) => {
    const list = [...this.props.skills];
    list.push(name)
    this.props.setSkills(list);
  }

  showDesc = e => {
    ReactDOM.findDOMNode(this.skillDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  render() {
    return (
      <li className="input skillContainer"> 
        <input 
          type="checkbox"
          onClick={this.handleInput.bind(this, this.props.name)}
          disabled={this.props.skills.length > 1}
        />
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

const mapStateToProps = state => ({
  skills: selectSkills(state)
});

const boundActions = {
  setSkills
};

export default connect(mapStateToProps, boundActions)(Skills);