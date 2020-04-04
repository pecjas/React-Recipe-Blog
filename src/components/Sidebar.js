import React from 'react';

function Sidebar() {
  return (
      <nav className="nav recipe-nav p-2 rounded-right">
          <a className="nav-link text-white font-weight-bold" href="/">Home</a>
          <a className="nav-link text-white font-weight-bold" href="/search">Search</a>
          <a className="nav-link text-white font-weight-bold" href="/manage">Manage Recipes</a>
          <a className="nav-link text-white font-weight-bold" href="/login">Login</a>
          <a className="nav-link text-white font-weight-bold" href="/contact">Contact</a>
      </nav>
  );
}

export default Sidebar;