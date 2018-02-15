import React, { Component } from 'react';
import '../../../styles.css';

export default class Ability extends Component {
  render() {
    const { id, label, mod, ...other } = this.props;
    console.log(this.props)
    return (
      <div className="abilityContainer">
        <label 
          htmlFor={id}
          className="ability">
          {label}
        </label>

        <input 
          name={id} 
          className="ability" 
          {...other} />

        <div className="ability">
          {' +' + mod}
        </div>
      </div>
    );
  }
}