import React from 'react';

function Header(props){
    return(
<nav className="navbar is-black" role="navigation" aria-label="main navigation">
    <div className='container'>
  <div className="navbar-brand">
  <a className="navbar-item" href="https://bulma.io">
  <h3 style={{color: 'white', fontSize:'15px'}} class="title is-3">Coronavirus Tracker Mexico</h3>
    </a>
  </div>
  </div>
</nav>
    );
}

export default Header;