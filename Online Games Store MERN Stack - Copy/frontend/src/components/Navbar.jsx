import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logoStyle = {
    fontFamily: "'Pixelify Sans', sans-serif",
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="images/logo.png"  className="w-10 h-10 mr-2" />
          <div className="text-gray-300 text-2xl font-semibold" style={logoStyle}>
            Digital Dreams
          </div>
        </div>
        <div className="flex space-x-8">
          <Link to="/store" className="text-gray-300 hover:text-blue-500">Game Store</Link>
          <Link to="/cart" className="text-gray-300 hover:text-blue-500">Cart</Link>
          <Link to="myAccount" className="text-gray-300 hover:text-blue-500">My Account</Link>
          <Link to="/" className="text-gray-300 hover:text-blue-500">Log Out</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
