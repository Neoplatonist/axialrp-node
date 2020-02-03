import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Choice from './components/choice';

export default class Feature extends Component {
  state = {
    showDesc: false
  }

  handleResetChoices = e => {
    this.props.setLevelFeaturesSelected([]);
  }

  showDesc = e => {
    ReactDOM.findDOMNode(this.featureDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  renderChoices = () => {
    const { feature } = this.props;

    return feature.choices.options.map((v, k) => {
      return <Choice 
        key={'choice-' + k} 
        choice={v} 
        total={feature.choices.choose} />;
    });
  }

  renderFeatureStats = () => {
    const { feature, levelObj } = this.props;

    let keys = Object.keys(levelObj).filter(v => 
      v.includes(feature.name.toLowerCase()));

    if (keys) {
      return keys.map((key, k) => 
        <p key={'featureStats-'+k}>{ key + ' ' + levelObj[key] }</p>);
    }

    return null;
  }

  render() {
    const { feature } = this.props;

    return (
      <li className="feature input skillContainer">
        <p>{ feature.name }
          <span 
            className="skill-append" 
            onClick={this.showDesc}> info <i className="fas fa-angle-down"></i>
          </span> 
        </p>

        <div>{ this.renderFeatureStats() }</div>

        <div 
          ref={ el => this.featureDesc = el } 
          className="skillDesc"
        >
          { feature.description }
        </div>

        <br />

        { feature.choices != null && feature.choices.choose > 0 
          ? 'Choose '+ feature.choices.choose + ' '
          : '' }

        { feature.choices != null && feature.choices.choose > 0 
          ? <button onClick={this.handleResetChoices}>Reset</button>
          : '' }

        { feature.choices != null
          ? this.renderChoices()
          : '' }
      </li>
    );
  }
}