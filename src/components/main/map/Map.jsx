import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, LayersControl, Marker, Popup } from 'react-leaflet';
import osm from '../../../services/osm-providers';
import './map.css';
import 'leaflet/dist/leaflet.css'
const API_KEY_2 = import.meta.env.VITE_REACT_APP_API_KEY;

const WeatherMap = (props) => {

  const [position, setPosition] = useState({ lat: props.coords.lat, lng: props.coords.lon });
  const ZOOM_LEVEL = 10;
  const mapRef = useRef();
  useEffect(() => {
    setPosition({ lat: props.coords.lat, lng: props.coords.lon });
  
  }, [props.coords, mapRef]);

  return (
    <section className='map-wrapper' id='map'>
      <MapContainer
        center={position}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={position}> 
          <Popup>
            Your Location
          </Popup>
        </Marker>
        <LayersControl position='topright' exclusiveGroups>
          <LayersControl.Overlay name='Temperature' checked>
            <TileLayer url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY_2}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name='Clouds'>
            <TileLayer url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY_2}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name='Precipitation'>
            <TileLayer url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY_2}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name='Wind'>
            <TileLayer url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY_2}`}
            />
          </LayersControl.Overlay>
        </LayersControl>

      </MapContainer>
    </section>
  )
}

export default WeatherMap