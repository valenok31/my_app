import React from "react";
import style from "./KillerOfFliesSpace.module.css";

const DeadFly = (props) => {
    return <>
        <div className={style.deadFly} key={props.d}
             title={'You killed me'}
             style={{
                 left: props.x - 10 + 'px',
                 top: props.y - 15 + 'px',
             }}>
        </div>
    </>
}

export default DeadFly;