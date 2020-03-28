import React, {Component} from 'react';
import MapGL, {Source, Layer} from 'react-map-gl';
import axios from 'axios';
import {dataLayer} from './map-style.js';
import {updatePercentiles} from './utils'

const MAPBOX_TOKEN = 'pk.eyJ1Ijoicnlhbmhhcmxvdzk1IiwiYSI6ImNrNTJ1c2NtbDAxdzczZ250eGZ5ZXYyY2gifQ.2EN37mO-Fn8QNmu-FoOFDA'; // Set your mapbox token here


class Map extends Component{

  state = {
    data: null,
    viewport: {
      latitude: 21.595592196250625,
      longitude: -100,
      zoom: 3.2241780332970342,
      bearing: 0,
      pitch: 0
    }
  };

  componentDidMount() {
    axios.get('/api/geojson')
    .then(res => {
       let data = res.data;
       console.log(data)
      this._loadData(data);
    })
  }

  _loadData = data => {
    this.setState({
      data: updatePercentiles(data, f => f.properties.totalCases)
    });
  };

  _onViewportChange = viewport => this.setState({viewport});


  _onClick = event => {
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = event;
    const clickedFeature = features && features.find(f => f.layer.id === 'data');

    this.setState({clickedFeature, x: offsetX, y: offsetY});
  };

  _renderTooltip() {
    const {clickedFeature, x, y} = this.state;

    return (
      clickedFeature && (
        <div className="tooltip" style={{left: x, top: y, margin:'1em', fontSize:'20px', backgroundColor: 'white', display:'inline-block', padding: '1rem', border:'1px solid black', borderRadius:'1em'}}>
          <div>State: {clickedFeature.properties.name}</div>
          <div>Number Of Cases: {clickedFeature.properties.totalCases}</div>
        </div>
      )
    );
  }

  render(){
    const {viewport, data} = this.state;

    return(
      <div style={{height: '100%', width: '100%', position: 'relative'}}>
        <MapGL
          {...viewport}
          width="100vw"
          height="80vh"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onClick={this._onClick}
        >
          <Source type="geojson" data={data}>
            <Layer {...dataLayer} />
          </Source>
          {this._renderTooltip()}
        </MapGL>
      </div>
    )
  }
}

export default Map;


