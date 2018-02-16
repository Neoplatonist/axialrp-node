import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Breakdown from './breakdown';
import '../../../styles.css';

export default class Ability extends Component {
  showBreakdown = e => {
    ReactDOM.findDOMNode(this.brek).style.display = 'block';
  }

  tooltip = () => {
    const str = k => `${this.props[k] < 0 ? '' : '+'}${this.props[k]} (${k})`;
    return [
    	`${this.props.value} (base)`,
      str('race'), 
      str('subrace'),
      '—————',
      str('total'),
      str('mod'),
    ].join('\n');
  }

  render() {
    const { id, mod, race, subrace, total, value, ...other } = this.props;
    // console.log(this.props)

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

        <Breakdown
          ref={ el => this.brek = el }
          base={this.props.value}
          mod={this.props.mod}
          race={this.props.race}
          subrace={this.props.subrace}
          total={this.props.total}
        />

        <div 
          className="ability-append"
          onClick={this.showBreakdown}
          title={this.tooltip()}
        >
          <div className="ability">
            {'= ' + total}
          </div>
        </div>

        <div 
          className="ability-append"
          onClick={this.showBreakdown}
        >
          <div className="ability">
            {' +' + mod}
          </div>
        </div>
      </div>
    );
  }
}