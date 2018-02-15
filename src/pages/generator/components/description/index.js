import React, { Component } from 'react';
import '../../styles.css';

import { connect } from 'react-redux';
import { setCharacter } from '../../../../actions';


class Description extends Component {
  render() {
    return (
      <div>
        <label htmlFor="character-name">Character Name: </label>
        <input
          name="character-name"
          className="input"
          type="text"
          onChange={ e => this.props.setCharacter({ name: e.target.value }) }
          value={this.props.character.name}/>

        <label htmlFor="gender">Gender: </label>
        <input
          name="gender"
          className="input"
          type="text" 
          onChange={ e => this.props.setCharacter({ gender: e.target.value }) }
          value={this.props.character.gender}/>

        <label htmlFor="age">Age: </label>
        <input
          name="age"
          className="input"
          type="number" 
          onChange={ e => this.props.setCharacter({ age: e.target.value }) }
          value={this.props.character.age}/>

        <label htmlFor="height">Height: </label>
        <input
          name="height"
          className="input"
          type="text" 
          onChange={ e => this.props.setCharacter({ height: e.target.value }) }
          value={this.props.character.height}/>

        <label htmlFor="xp">XP: </label>
        <input
          name="xp"
          className="input"
          type="text" 
          onChange={ e => this.props.setCharacter({ xp: e.target.value }) }
          value={this.props.character.xp}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.generator.character
});

const boundActions = {
  setCharacter
};

export default connect(mapStateToProps, boundActions)(Description);