import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <Link to='/'>
          <img src="https://images.vexels.com/media/users/3/205178/isolated/lists/218500861b2b211836bafd36757a22aa-black-film-reel.png" alt="" />
        </Link>
      </div>
      <div className="title">
        <h1>Movie Night</h1>
      </div>
      <div className="user-image">
        <img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="user" />
      </div>

    </div>
  );
};

export default Header;
