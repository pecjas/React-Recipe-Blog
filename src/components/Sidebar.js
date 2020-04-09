import React from 'react';

function Sidebar() {
  return (
      <nav className="nav recipe-nav rounded-right">
          <a className="nav-link text-white font-weight-bold rounded-right" href="/">Home</a>
          <a className="nav-link text-white font-weight-bold rounded-right" href="/recipes">Recipes</a>
          <a className="nav-link text-white font-weight-bold rounded-right" href="/login">Login</a>
          <a className="nav-link text-white font-weight-bold rounded-right" href="/contact">Contact</a>
      </nav>
  );
}

export default Sidebar;