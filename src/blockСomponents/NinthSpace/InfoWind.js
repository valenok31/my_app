import React from "react";

const InfoWind = (info_wind) => {

    let degString = 'северный';
    if (info_wind > 22.5 && info_wind < 67.5) {
        degString = 'северо-восточный'
    }
    if (info_wind > 67.5 && info_wind < 112.5) {
        degString = 'восточный'
    }
    if (info_wind > 112.5 && info_wind < 157.5) {
        degString = 'юго-восточный'
    }
    if (info_wind > 157.5 && info_wind < 202.5) {
        degString = 'южный'
    }
    if (info_wind > 202.5 && info_wind < 247.5) {
        degString = 'юго-западный'
    }
    if (info_wind > 247.5 && info_wind < 292.5) {
        degString = 'западный'
    }
    if (info_wind > 292.5 && info_wind < 337.5) {
        degString = 'северо-западный'
    }

    return degString;
}

export default InfoWind;