import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';

import { connect } from 'react-redux';
import { 
  setCharacter,
  selectRaceObj
} from '../../../../actions';


class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ageDesc: false,
      heightDesc: false
    };
  }

  showDesc = desc => e => {
    ReactDOM.findDOMNode(this[desc]).style.display = 
      !this.state[desc] ? 'block' : 'none';
    this.setState({ [desc]: !this.state[desc]});
  }

  render() {
    return (
      <div>
        <label className="desc" htmlFor="character-name">Character Name: </label>
        <input
          name="character-name"
          className="input"
          type="text"
          onChange={ e => this.props.setCharacter({ name: e.target.value }) }
          value={this.props.character.name}/>

        <label className="desc" htmlFor="gender">Gender: </label>
        <input
          name="gender"
          className="input"
          type="text" 
          onChange={ e => this.props.setCharacter({ gender: e.target.value }) }
          value={this.props.character.gender}/>

        <label className="desc" htmlFor="age">Age
          <span onClick={this.showDesc('ageDesc')}> more info 
            <i className="fas fa-angle-down"></i>
          </span>: 
        </label>
        <input
          name="age"
          className="input"
          type="number" 
          min="0"
          onChange={ e => this.props.setCharacter({ age: e.target.value }) }
          value={this.props.character.age}/>

        <div 
          ref={ el => this.ageDesc = el } 
          className="ageDesc"
        >
          {this.props.raceObj.age.description}
        </div>

        <label className="desc" htmlFor="height">Height
          <span onClick={this.showDesc('heightDesc')}> more info 
            <i className="fas fa-angle-down"></i>
          </span>:
        </label>
        <input
          name="height"
          className="input"
          type="text" 
          onChange={ e => this.props.setCharacter({ height: e.target.value }) }
          value={this.props.character.height}/>

        <div 
          ref={ el => this.heightDesc = el } 
          className="heightDesc"
        >
          {this.props.raceObj.size.description}
        </div>

        <label className="desc" htmlFor="xp">XP: </label>
        <input
          name="xp"
          className="input"
          type="number" 
          min="0"
          onChange={ e => this.props.setCharacter({ xp: e.target.value }) }
          value={this.props.character.xp}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.generator.character,
  raceObj: selectRaceObj(state)
});

const boundActions = {
  setCharacter
};

export default connect(mapStateToProps, boundActions)(Description);