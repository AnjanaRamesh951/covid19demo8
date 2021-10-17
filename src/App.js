import React,{useState} from 'react'

import './App.css';
import Statewise from './Statewise';
import Map from './Map';
import "leaflet/dist/leaflet.css";


function App() {
  const [mapCenter, setMapCenter] = useState({ lat: 21.0000, lng: 78.0000 });
  const [mapZoom, setMapZoom] = useState(5);

  return (
    <div className="App">
     <Statewise/>
     <Map
     center={mapCenter}
     zoom={mapZoom}
     />
    </div>
  );
}

export default App;
