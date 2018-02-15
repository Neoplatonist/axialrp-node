import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

export const MobileNav = () => {
  return (
    <ul id="mobList">
      <li className="mobListItem">
        <Link to='/'>Dashboard</Link>
      </li>

      <li className="mobListItem">
        <Link to='/generator'>Generator</Link>
      </li>

      <li className="mobListItem">
        <Link to='/character'>Character</Link>
      </li>

      <li className="mobListItem">
        <Link to='/list'>List</Link>
      </li>

      <li className="mobListItem">
        <Link to='/wiki'>Wiki</Link>
      </li>

      <li className="mobListItem">Settings</li>
    </ul>
  );
};