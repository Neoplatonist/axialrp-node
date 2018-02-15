import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

export const Nav = () => {
  return (
    <ul id="navList">
      <li className="navListItem">
        <Link to='/'>Dashboard</Link>
      </li>

      <li className="navListItem">
        <Link to='/generator'>Generator</Link>
      </li>

      <li className="navListItem">
        <Link to='/character'>Character</Link>
      </li>

      <li className="navListItem">
        <Link to='/list'>List</Link>
      </li>

      <li className="navListItem">
        <Link to='/wiki'>Wiki</Link>
      </li>

      <li className="navListItem">Settings</li>
    </ul>
  );
};