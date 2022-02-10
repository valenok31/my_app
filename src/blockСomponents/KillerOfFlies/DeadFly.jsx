import React from "react";
import style from "./KillerOfFliesSpace.module.css";


const DeadFly = (props) => {
    let d = props.d;

    return <>
        <div className={style.deadFly} key={d}
             title={'You killed me'}
             style={{
                 left: props.x - 10 + 'px',
                 top: props.y - 15 + 'px',
             }}>
        </div>
    </>
}

export default DeadFly;