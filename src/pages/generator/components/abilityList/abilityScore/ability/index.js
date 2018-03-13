import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AbilityPointMap } from '../../../../utils.js';
import Breakdown from './breakdown';
import '../../../../styles.css';

import { connect } from 'react-redux';
import { 
  setAbility,
  selectAbilityPoints,
  setAbilityPoints,
  setAbilitySwitch 
} from '../../../../../../actions';

class Ability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      downLock: false,
      upLock: false
    };
  }

  moveDown = e => {
    if (this.props.abilityType === 'Buy') {
      if (!this.state.downLock) {
        if (this.state.upLock) {
          this.setState({ upLock: false });
        }

        const abilityItem = parseInt(this.abilityItem.value, 10);
        const score = Math.max(8, abilityItem - 1);
        this.props.setAbility(this.props.index, score);

        const points = Math.min(
          27, this.props.abilityPoints + Math.abs(AbilityPointMap[score+1] - AbilityPointMap[score]));
        this.props.setAbilityPoints(points);

        if (abilityItem === 9) {
          this.setState({ downLock: true });
        }
      }
    } else {
      this.props.setAbilitySwitch(this.props.index, 'down');
    }
  }

  moveUp = e => {
    if (this.props.abilityType === 'Buy') {
      if (!this.state.upLock) {
        if (this.state.downLock) {
          this.setState({ downLock: false });
        }

        const abilityItem = parseInt(this.abilityItem.value, 10);
        const score = Math.min(15, abilityItem + 1);
        this.props.setAbility(this.props.index, score);

        const points = Math.max(
          0, this.props.abilityPoints - (AbilityPointMap[score] - AbilityPointMap[score-1]));
        this.props.setAbilityPoints(points);
        
        if (abilityItem === 14) {
          this.setState({ upLock: true });
        }
      }
    } else {
      this.props.setAbilitySwitch(this.props.index, 'up');
    }
  }

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
    // const { 
    //   id, index, mod, 
    //   race, subrace, total, value, 
    //   abilityType, setAbility, 
    //   setAbilityPoints, setAbilitySwitch, 
    //   ...other 
    // } = this.props;

    return (
      <div className="abilityContainer">
        <div className="ability-prepend">
          <label 
            htmlFor={this.props.id}
            className="ability">
            {this.props.id.slice(0, 3).toUpperCase()}
          </label>
        </div>

        <button 
          onClick={this.moveUp}
          className="ability-prepend ability-arrow">
          <i className="fas fa-chevron-up"></i>
        </button>

        <input 
          ref={el => this.abilityItem = el}
          name={this.props.id} 
          className="ability ability-text"
          value={this.props.value}
          type="number"
          onChange={ e => 
            this.props.setAbility(this.props.index, parseInt(e.target.value, 10)) }
        />

        <button 
          onClick={this.moveDown}
          className="ability-prepend ability-arrow">
          <i className="fas fa-chevron-down"></i>
        </button>

        <div 
          className="ability-append"
          onClick={this.showBreakdown}
          title={this.tooltip()}
        >
          <div className="ability">
            {'= ' + this.props.total}
          </div>
        </div>

        <div 
          className="ability-append"
          onClick={this.showBreakdown}
        >
          <div className="ability">
            {this.props.mod}
          </div>
        </div>

        <Breakdown
          ref={ el => this.brek = el }
          base={this.props.value}
          mod={this.props.mod}
          race={this.props.race}
          subrace={this.props.subrace}
          total={this.props.total}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  abilityPoints: selectAbilityPoints(state),
  abilityType: state.generator.abilityType
});

const boundActions = {
  setAbility,
  setAbilityPoints,
  setAbilitySwitch
};

export default connect(mapStateToProps, boundActions)(Ability);