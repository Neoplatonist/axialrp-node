import React, { Component } from 'react';
import '../../../../../styles.css';
// ({base, mod, race, subrace, total})

export default class Breakdown extends Component { 
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.wrapperRef.parentNode.style.display = 'none';
    }
  }

  handleClose = e => {
    this.wrapperRef.parentNode.style.display = 'none';
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  render() {
    const {base, race, subrace, total, mod} = this.props;
    return (
      <section id="modal">
        {/* Just a modal off-click catcher */}
        <aside ref={this.setWrapperRef}>
          <span onClick={this.handleClose}>
            <i className="exit fas fa-times"></i>
          </span>

          <div className="modal-stats">
            <div className="modal-stat">
                {'Base: ' + base}
            </div>

            <div className="modal-stat">
              {'Race: ' + race}
            </div>

            <div className="modal-stat">
              {'SubRace: ' + subrace}
            </div>

            <div className="modal-stat">
              {'Total: ' + total}
            </div>

            <div className="modal-stat">
              {'Mod: ' + mod}
            </div>
          </div>
        </aside>  
      </section>
    );
  }
};