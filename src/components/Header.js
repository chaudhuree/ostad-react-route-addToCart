import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/cosmetics">Add To Cart</Link>
        </div>
    );
};

export default Header;