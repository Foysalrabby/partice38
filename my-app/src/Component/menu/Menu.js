import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
            <li>
            <a href="/">Home</a>
          </li>
          
          <li>
          <a href="/friend">Friend</a>
          </li>
          <li>
          <a href="/about">About</a>
          </li>
            </ul>
        </div>
    );
};

export default Menu;