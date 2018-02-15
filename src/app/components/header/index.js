import React, { Component } from 'react';
import { Nav } from './components/nav';
import './styles.css';

export default class Header extends Component {
  handleHamburg = e => {
    document.getElementById('sidebar').style.display = 'block';
  }

  render() {
    return (
      <header>
        <span 
          className="menuWrapper" 
          onClick={this.handleHamburg}
        >
          <i className='menu fas fa-bars fa-lg'></i>
        </span>

        {/* right nav  */}

        {/* dropdown menu */}

        {/* Dashboard Generator Character List Wiki login/out */}

        { !this.props.mobile && <Nav /> }

        
      </header>
    );
  }
}