import React from 'react';
import './App.css';
import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bulma/css/bulma.css'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
}

export default App;
