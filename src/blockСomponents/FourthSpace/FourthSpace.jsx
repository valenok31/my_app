import React, {useState} from "react";
import AppGeo from "./usePosition";

const FourthSpace = (props) => {

    const [latit, setLatit] = useState(0);
    const [longit, setLongit] = useState(0);

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLatit(position.coords.latitude);
        setLongit(position.coords.longitude);

    });

    return (
        <code>
            <AppGeo latit={latit} longit={longit}/>
        </code>
    );
}

export default FourthSpace;



