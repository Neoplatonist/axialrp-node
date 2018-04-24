import React, { Component } from 'react';
import { Option } from '../../utils';
import '../../styles.css';

import { connect } from 'react-redux';
import { 
  selectClass, 
  setClass,
  selectClassNameList,
  setClassNameList,
} from '../../../../actions';

class Class extends Component {
  componentWillMount() {
    this.props.setClassNameList();
    this.props.setClass('Bard');
  }

  handleClass = e => {
    return this.props.classNameList.data.map((v, k) => {
      return <Option key={k} {...v} />;
    })
  }

  onClassChange = e => {
    this.props.setClass(e.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor="class">Class: </label>
        <select
          name="class"
          className="input"
          onChange={this.onClassChange}
          value={this.props.class}
        >
          { this.props.classNameList.data.length 
            ? this.handleClass() 
            : <option value="">...Loading</option> }
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  class: selectClass(state),
  classNameList: selectClassNameList(state)
});

const boundActions = {
  setClass,
  setClassNameList,
};

export default connect(mapStateToProps, boundActions)(Class);