import React, { Component } from 'react';
import { MobileNav } from './components/mobilenav';
import './styles.css';

export default class Sidebar extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('click', this.handleNavClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('click', this.handleNavClick, false);
  }

  handleClickOutside = e => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.wrapperRef.parentNode.style.display = 'none';
    }
  }

  handleNavClick = e => {
    if (e.target !== e.currentTarget && e.target.nodeName === 'A') {
      document.getElementById('sidebar').style.display = 'none';
    }

    e.stopPropagation();
  }

  handleClose = e => {
    this.wrapperRef.parentNode.style.display = 'none';
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  render() {
    return (  
      <section id="sidebar" className="sidebar">
        {/* Just a nav off-click catcher */}

        <aside ref={this.setWrapperRef}>
          <span onClick={this.handleClose}>
            <i className="exit fas fa-times"></i>
          </span>
          
          <h1 className="logo">AxialRP</h1>

          { this.props.mobile && <MobileNav /> }

        </aside>  
      </section>
    );
  }
}