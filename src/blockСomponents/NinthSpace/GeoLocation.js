import React, {useState} from "react";
import {connect} from "react-redux";
import {setGeoLocation} from "../../redux/ninthSpace_reducer";


const GeoLocation = (props) => {

    const [latit, setLatit] = useState(0);
    const [longit, setLongit] = useState(0);

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLatit(position.coords.latitude);
        setLongit(position.coords.longitude);
    });
    props.setGeoLocation(latit, longit);
return <></>
}

let mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setGeoLocation})(GeoLocation)