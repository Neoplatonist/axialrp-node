import React, { Component } from 'react';
import '../../../styles.css';

export default class Ability extends Component {
  render() {
    const { id, mod, value, ...other } = this.props;

    return (
      <div className="abilityContainer">
        <div className="ability-prepend">
          <label 
            htmlFor={id}
            className="ability">
            {id.slice(0, 3).toUpperCase()}
          </label>
        </div>
        

        <input 
          name={id} 
          className="ability ability-text"
          value={value}
          {...other} />

        {/* TODO: add onClick/onHover stats breakdown */}
        {/* <div className="ability-append">
          <div className="ability">
            {'+ ' + raceMod}
          </div>
        </div>

        <div className="ability-append">
          <div className="ability">
            {'+ ' + otherMod}
          </div>
        </div> */}

        <div className="ability-append">
          <div className="ability">
            {'= ' + value}
          </div>
        </div>

        <div className="ability-append">
          <div className="ability">
            {' +' + mod}
          </div>
        </div>
      </div>
    );
  }
}