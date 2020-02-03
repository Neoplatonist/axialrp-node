import React, { Component } from 'react';

import { connect } from 'react-redux';

import { selectLevelObj, setLevelFeaturesSelected } from '../../../../actions';

import Feature from './components/feature';

class LevelFeatures extends Component {
  renderFeature = () => {
    const filteredFeatures =
      this.props.levelFeatures.data.filter(v => v != null);

    return filteredFeatures.map((v, k) => {
      return <Feature
        key={'levelFeature'+k}
        feature={v}
        levelObj={this.props.levelObj.data}
        setLevelFeaturesSelected={this.props.setLevelFeaturesSelected}/>;
    });
  }

  render() {
    const { levelFeatures, levelObj } = this.props;

    return (
      <div>
        <h3>Class Features</h3>

        { levelFeatures.status === 'success'
          && levelFeatures.data.length
          && levelObj.status === 'success'
            ? this.renderFeature()
            : 'Loading...' }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  levelFeatures: state.generator.levelFeatures,
  levelObj: selectLevelObj(state)
});

const boundActions = {
  setLevelFeaturesSelected
};

export default connect(mapStateToProps, boundActions)(LevelFeatures);
