import L from 'leaflet';
import React from 'react';

export default class MapComponent extends React.PureComponent {
  map;

  componentDidMount() {
    this.map = L.map('map').setView([60.192059, 24.945831], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYW50dGltaWtrb25lbiIsImEiOiJjanZhcXFtejYxMTY2M3lwODRjMXk5b2poIn0.CqcITAA5UIQKmYEwfdOG7A'
    }).addTo(this.map);
  }

  render() {
    return (
      <div id="map" className="map">
      </div>
    );
  }
}
