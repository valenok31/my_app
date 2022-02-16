import React from "react";


const AppGeo = (props) => {
    return (
        <div>
            <h4>Using geolocation JavaScript API in React</h4>
            <div>{props.latit}</div>
            <div>{props.longit}</div>
        </div>
    );

}

export default AppGeo;

