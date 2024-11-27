import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-200 text-2xl">
          <a href="/">My Portofolio</a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-blue-200 hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#work" className="text-blue-200 hover:text-gray-400">Work</a>
          </li>
          <li>
            <a href="#contact" className="text-blue-200 hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;