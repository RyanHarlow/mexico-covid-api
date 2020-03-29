import React from 'react';

function Header(props) {
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io" style={{ margin: 0, padding: 0 }}>
            <h3 style={{ color: 'white', fontSize: '20px'}} class="title is-3"><strong>Coronavirus Tracker Mexico</strong></h3>
          </a>
        </div>
        <div style={{margin:0,padding:0}}>
          <p style={{margin:0,padding:0}}>total deaths;lkjfal;fjakl;</p>
          <p>total caseslkjad;kf</p>
          <p>asdfdsf</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;