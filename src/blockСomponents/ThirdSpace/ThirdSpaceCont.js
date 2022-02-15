import React from "react";
import style from './ThirdSpace.module.css'

const MovementSun = () => {
    return <div className={style.fieldView}>

        <div className={style.ecliptic}>
        <div className={style.mainСircle}>
            <div className={style.sun}></div>
        </div>
        </div>
    </div>
}

export default MovementSun;