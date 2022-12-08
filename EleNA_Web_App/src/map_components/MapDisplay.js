import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ComposableMap } from 'react-leaflet'
import './Map.css';
import { Polyline } from 'react-leaflet';
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


// state = {
//     ...
//     data: [
//       {
//         from_lat: "12.92415",
//         from_long: "77.67229",
//         id: "132512",
//         to_lat: "12.92732",
//         to_long: "77.63575",
//       },
//       {
//         from_lat: "12.96691",
//         from_long: "77.74935",
//         id: "132513",
//         to_lat: "12.92768",
//         to_long: "77.62664",
//       }
//     ]
//   };



{/* <Map
      style={{ height: "100vh" }}
      center={position}
      zoom={this.state.zoom}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {this.state.data.map(({id, from_lat, from_long, to_lat, to_long}) => {
        return <Polyline key={id} positions={[
          [from_lat, from_long], [to_lat, to_long],
        ]} color={'red'} />
      })}
    </Map> */}

function MapDisplay({route}) { 
    // console.log(route)

    // const [routePath, setRoutePath] = useState({})
    // if (route) {
    //    setRoutePath(route)
    // }
    // console.log(routePath)
    return  (
        // <div>
        //     {route && route.map((path) =>
        //         <li>
        //             source_lat: {path[0][0]}, source_long: {path[0][1]},
        //             destination_lat{path[1][0]}, destination_lat{path[1][1]}
        //         </li>
        //     )}
        // </div>
        <MapContainer center={[42.3685658, -72.505714]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[42.3685658, -72.505714]}>
                <Popup>
                    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                </Popup>
            </Marker> */}
            {route && route.map((path) => 
                <Marker position={[path[0][1], path[0][0]]}>
                <Popup>
                    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                </Popup>
                </Marker>
            )}
            
            {route && route.map((path) => {
                console.log(path[0])
                return <Polyline positions={[
                    [path[0][1], path[0][0]], [path[1][1], path[1][0]],
                ]} color={'red'} />
            })}
        </MapContainer>

    );
}

export default MapDisplay;