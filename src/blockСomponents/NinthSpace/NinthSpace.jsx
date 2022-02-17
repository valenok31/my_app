import React from "react";
import style from "./NinthSpace.module.css"
import Sun from "./Sun";


const NinthSpace = (props) => {
    let temWos = props.tempe;


    return <>
        <div className={style.item}>
            <div>{props.lat}, {props.lon}</div>
            <div>{props.name}</div>
            <Sun {...props}/>
            <div><span className={style.temp}>{props.fetching ? `...` : temWos.temp}</span><span className={style.temp_10}>&#176;</span></div>
            <div className={style.feels_like}>Ощущается как: {props.fetching ? `...загрузка` : temWos.feels_like}</div>


            <div>
                <div className={style.sunrise_sunset}>
                    <img
                        src='https://cdn-icons.flaticon.com/png/512/3920/premium/3920688.png?token=exp=1644936896~hmac=41570f6ad520d0340ca36b0d80d9a2ff'/>
                    <div>{props.fetching ? `...загрузка` : temWos.sunrise}</div>
                </div>
                <div className={style.sunrise_sunset}>
                    <img
                        src='https://cdn-icons.flaticon.com/png/512/3920/premium/3920799.png?token=exp=1644937327~hmac=46623f0c69eb627a5c7b6f6b7815acb6'/>
                    <div>{props.fetching ? `...загрузка` : temWos.sunset}</div>
                </div>
            </div>
            <div className={style.sunrise_sunset}>
                <img
                    src='https://cdn-icons-png.flaticon.com/512/2299/2299335.png'/>
                <div>Давление: {props.fetching ? `...загрузка` : temWos.pressure}</div>
            </div>
            <div className={style.sunrise_sunset}>
                <img
                    src='https://cdn-icons-png.flaticon.com/512/4005/4005831.png'/>
                <div>Влажность: {props.fetching ? `...загрузка` : temWos.humidity}</div>
            </div>
            <div className={style.sunrise_sunset}>
                <div className={style.windDeg} style={{transform: 'rotate(' + (props.wind.deg + 180) + 'deg)'}}>
                    <img
                        src='https://cdn-icons.flaticon.com/png/512/879/premium/879576.png?token=exp=1644939322~hmac=8fa36e9c4e387de4e04bfe1480114d37'/>
                </div>
                <div>{props.wind.speed} m/s</div>
            </div>

        </div>
    </>
}

export default NinthSpace;