import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';

import { connect } from 'react-redux';
import { 
  setCharacter,
  selectRaceObj
} from '../../../../actions';


class Description extends Component {
  state = {
    ageDesc: false,
    heightDesc: false
  }

  showDesc = desc => e => {
    ReactDOM.findDOMNode(this[desc]).style.display = 
      !this.state[desc] ? 'block' : 'none';
    this.setState({ [desc]: !this.state[desc]});
  }

  render() {
    const {character, setCharacter, raceObj} = this.props;

    return (
      <div>
        <label className="desc" htmlFor="character-name">Character Name: </label>
        <input
          name="character-name"
          className="input"
          type="text"
          onChange={ e => setCharacter({ ...character, name: e.target.value }) }
          value={character.name}/>

        <label className="desc" htmlFor="gender">Gender: </label>
        <input
          name="gender"
          className="input"
          type="text" 
          onChange={ e => setCharacter({ ...character, gender: e.target.value }) }
          value={character.gender}/>

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
          onChange={ e => setCharacter({ ...character, age: e.target.value }) }
          value={character.age}/>

        <div 
          ref={ el => this.ageDesc = el } 
          className="ageDesc"
        >
          {raceObj.age.description}
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
          onChange={ e => setCharacter({ ...character, height: e.target.value }) }
          value={character.height}/>

        <div 
          ref={ el => this.heightDesc = el } 
          className="heightDesc"
        >
          {raceObj.size.description}
        </div>

        <label className="desc" htmlFor="xp">XP: </label>
        <input
          name="xp"
          className="input"
          type="number" 
          min="0"
          onChange={ e => setCharacter({ ...character, xp: e.target.value }) }
          value={character.xp}/>
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