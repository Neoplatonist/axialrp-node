import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { 
  selectLevelObj, 
  setLevelFeaturesSelected 
} from '../../../../../../../../actions';

class Choice extends Component {
  state = {
    showDesc: false
  }

  componentDidUpdate() {
    if (this.checkbox != undefined 
      && !this.props.levelFeaturesSelected
        .find(v => v.name === this.props.choice.name)
    ) {
      this.checkbox.checked = '';
    }
  }

  showDesc = e => {
    ReactDOM.findDOMNode(this.chooseDesc).style.display = 
      !this.state.showDesc ? 'block' : 'none';
    this.setState({showDesc: !this.state.showDesc});
  }

  lock = () => {
    const { choice, levelFeaturesSelected, total } = this.props;

    return total <= levelFeaturesSelected.length 
      || levelFeaturesSelected.filter(v => v === choice.name).length > 0
        ? true : false; 
  }

  handleInput = e => {
    let list = this.props.levelFeaturesSelected
      .filter(v => v.name === this.props.choice.name);

    list = [...list, this.props.choice];

    this.props.setLevelFeaturesSelected(list);
  }

  render() {
    const { choice, select, total } = this.props;

    // console.log({choice, select})
    return (
      <div className="choice">
        { total > 0 
          ? <input 
              type="checkbox"
              onClick={this.handleInput}
              disabled={this.lock()}
              ref={el => this.checkbox = el}
            />
          : '' }

        <h5>{ choice.name }</h5>

        <span 
          className="skill-append" 
          onClick={this.showDesc}> info <i className="fas fa-angle-down"></i>
        </span>

        <div 
          ref={ el => this.chooseDesc = el } 
          className="skillDesc"
        >
          { choice.description }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  levelFeatures: state.generator.levelFeatures,
  levelFeaturesSelected: state.generator.levelFeaturesSelected,
  levelObj: selectLevelObj(state)
});

const boundActions = {
  setLevelFeaturesSelected
};

export default connect(mapStateToProps, boundActions)(Choice);