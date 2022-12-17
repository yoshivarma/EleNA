import L from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
    // destructured route from props
    const {route} = props
    // created routing control with generated route
    return L.Routing.control({
        waypoints: route,
        lineOptions: {
            styles: [{color: "blue", weight: 4}]
        },
        autoRoute: true,
        draggableWaypoints: false,
        reverseWaypoints: true,
        addWaypoints: true,
        enableHighAccuracy: true,
        startIcon: L.icon({
            iconUrl: '/marker7.jpeg',
            iconSize: [30, 30]
        }),
        endIcon: L.icon({
            iconUrl: '/marker8.png',
            iconSize: [30, 30]
        }),
        createMarker: function(i, wp, nWps) {
            if (i === 0 ) {
                return L.marker(wp.latLng, {icon: this.startIcon });
            }
            if(i === nWps - 1){
                return L.marker(wp.latLng, {icon: this.endIcon });
            }
        }
    })
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;