import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ComposableMap } from 'react-leaflet'
import './Map.css';

// import React from 'react';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker
// } from 'react-simple-maps';

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

// const MapChart = () => {
//   return (
//     <ComposableMap projection="geoAlbers">
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography
//               key={geo.rsmKey}
//               geography={geo}
//               fill="#DDD"
//               stroke="#FFF"
//             />
//           ))
//         }
//       </Geographies>
//       <Marker coordinates={[-74.006, 40.7128]}>
//         <circle r={8} fill="#F53" />
//       </Marker>
//     </ComposableMap>
//   );
// };

// export default MapChart;

function MapDisplay() {
    return  (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
            <Marker position={[-74.006, 40.7128]}>
                <circle r={8} fill="#F53" />
            </Marker>
        </MapContainer>

    );
}

export default MapDisplay;