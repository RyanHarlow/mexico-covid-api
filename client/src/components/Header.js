import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Header(props) {

  const [totalDeaths, setTotalDeaths] = useState(null);
  const [totalCases, setTotalCases] = useState(null);
  
  useEffect(() => {
    axios.get('/api/total')
    .then(res => {
      setTotalDeaths(res.data.totalDeaths);
      setTotalCases(res.data.totalCases);
    })
  }, [])



  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io" style={{ margin: 0, padding: 0 }}>
            <h3 style={{ color: 'white', fontSize: '20px'}} class="title is-3"><strong>Coronavirus Tracker Mexico</strong></h3>
          </a>
        </div>
        <div style={{margin:0,padding:0}}>
  <p>Total Deaths: {totalDeaths}</p>
  <p>Total Cases: {totalCases}</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;