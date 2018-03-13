import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Dice } from '../../utils';
import '../../styles.css';

import AbilityScores from './abilityScore';

import { connect } from 'react-redux';
import {
  selectDice,
  setDice,
  setAbilityBulk,
  selectAbilityPoints,
  setAbilityPoints,
  setAbilityType
} from '../../../../actions';

class AbilityList extends Component {
  componentDidMount() {
    this.rollDice();
    ReactDOM.findDOMNode(this.abilityDiceRef).className = 'tab-item tab-active';
    ReactDOM.findDOMNode(this.abilityBuyRef).className = 'tab-item';
    ReactDOM.findDOMNode(this.abilityQuickRef).className = 'tab-item';
  }

  abilityDice = e => {
    this.rollDice();
    ReactDOM.findDOMNode(this.abilityDiceRef).className = 'tab-item tab-active';
    ReactDOM.findDOMNode(this.abilityBuyRef).className = 'tab-item';
    ReactDOM.findDOMNode(this.abilityQuickRef).className = 'tab-item';
    this.props.setAbilityType('Dice');
  }

  abilityBuy = e => {
    this.setState({ points: 27 });
    this.props.setAbilityBulk([8, 8, 8, 8, 8, 8]);
    ReactDOM.findDOMNode(this.abilityDiceRef).className = 'tab-item';
    ReactDOM.findDOMNode(this.abilityBuyRef).className = 'tab-item tab-active';
    ReactDOM.findDOMNode(this.abilityQuickRef).className = 'tab-item';
    this.props.setAbilityType('Buy');
    this.props.setAbilityPoints(27);
  }

  abilityQuick = e => {
    this.props.setAbilityBulk([15, 14, 13, 12, 10, 8]);
    ReactDOM.findDOMNode(this.abilityDiceRef).className = 'tab-item';
    ReactDOM.findDOMNode(this.abilityBuyRef).className = 'tab-item';
    ReactDOM.findDOMNode(this.abilityQuickRef).className = 'tab-item tab-active';
    this.props.setAbilityType('Quick');
  }

  renderAbilityType = () => {
    switch (this.props.abilityType) {
      case 'Dice':
        return <button onClick={this.rollDice}>ReRoll?</button>;

      case 'Buy':
        return <h4>{'Current Points: ' + this.props.abilityPoints}</h4>;

      case 'Quick':
        return ;
    
      default:
        break;
    }
    return null;
  }

  rollDice = e => {
    const dice = this.props.dice.map(v => {
      return Dice(6, 4).sort((a, b) => a - b).slice(1).reduce((p, c) => p + c, 0);
    });

    this.props.setDice(dice);
  }

  render() {
    return (
      <section>
        <h3>Ability Scores</h3>
          <ul className="tabs">
            <li 
              ref={el => this.abilityDiceRef = el}
              className="tab-item" 
              onClick={this.abilityDice}>
              <span className="tab-link">Dice</span>
            </li>
            <li 
              ref={el => this.abilityBuyRef = el}
              className="tab-item" 
              onClick={this.abilityBuy}>
              <span className="tab-link">Points</span>
            </li>
            <li 
              ref={el => this.abilityQuickRef = el}
              className="tab-item" 
              onClick={this.abilityQuick}>
              <span className="tab-link">Quick</span>
            </li>
          </ul>

          {this.renderAbilityType()}

          <AbilityScores />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  abilityPoints: selectAbilityPoints(state),
  abilityType: state.generator.abilityType,
  dice: selectDice(state)
});

const boundActions = {
  setAbilityBulk,
  setAbilityPoints,
  setAbilityType,
  setDice  
};

export default connect(mapStateToProps, boundActions)(AbilityList);