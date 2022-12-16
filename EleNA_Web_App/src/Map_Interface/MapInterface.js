import React, {useEffect, useRef} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import RoutingMachine from "./components/RoutingMachine";
import './MapInterface.css';

const MapInterface = ({route}) => {
    const rMachine = useRef();
    useEffect(() => {
        if (rMachine.current) {
            rMachine.current.setWaypoints(route);
        }
    }, [route, rMachine]);
    return  (
        <MapContainer center={[42.3685658, -72.505714]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RoutingMachine ref={rMachine} route={route}/>
        </MapContainer>
    );
}

export default MapInterface;