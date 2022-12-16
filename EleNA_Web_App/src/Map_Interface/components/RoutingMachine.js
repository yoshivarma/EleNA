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
        }
    })
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;