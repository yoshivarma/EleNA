import L from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
    const {route} = props
    return L.Routing.control({
        waypoints: route,
        lineOptions: {
            styles: [{color: "blue", weight: 4}]
        }
    })
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
