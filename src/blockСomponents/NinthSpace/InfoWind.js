import React from "react";

const InfoWind = (infoWind) => {
    let degString = 'северный';
    if (infoWind > 22.5 && infoWind < 67.5) {
        return degString = 'северо-восточный'
    }
    if (infoWind > 67.5 && infoWind < 112.5) {
        return degString = 'восточный'
    }
    if (infoWind > 112.5 && infoWind < 157.5) {
        return degString = 'юго-восточный'
    }
    if (infoWind > 157.5 && infoWind < 202.5) {
        return degString = 'южный'
    }
    if (infoWind > 202.5 && infoWind < 247.5) {
        return degString = 'юго-западный'
    }
    if (infoWind > 247.5 && infoWind < 292.5) {
        return degString = 'западный'
    }
    if (infoWind > 292.5 && infoWind < 337.5) {
        return degString = 'северо-западный'
    }

    return degString;
}

export default InfoWind;