import React from "react";
import style from "./NinthSpace.module.css"


const NinthSpace = (props) => {

    let temWos = props.tempe;

    return <>
        <div className={style.item}>
            <div>Температура: {props.fetching ? `...загрузка` : temWos.temp}</div>
            <div>Ощущается как: {props.fetching ? `...загрузка` : temWos.feels_like}</div>
            <div>Давление: {props.fetching ? `...загрузка` : temWos.pressure}</div>
            <div>Влажность: {props.fetching ? `...загрузка` : temWos.humidity}</div>
            <div>Ветер {props.fetching ? `...загрузка` : temWos.windSpeed}</div>
            <div>Восход: {props.fetching ? `...загрузка` : temWos.sunrise}</div>
            <div>Закат: {props.fetching ? `...загрузка` : temWos.sunset}</div>
        </div>
    </>
}

export default NinthSpace;