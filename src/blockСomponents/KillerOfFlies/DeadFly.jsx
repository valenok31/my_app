import React, {useState} from "react";
import style from "./KillerOfFliesSpace.module.css";


const DeadFly = (props) => {
    let d = props.d;

    return <>
        <div className={style.deadFly} key={d}
             title={'You killed me'}
             /*onClick={props.refresh}*/

             style={{
                 left: props.x-10 + 'px',
                 top: props.y-15 + 'px',
             }}


        >

{/*            <div className={style.blob1}></div>
            <div className={style.blob2}></div>
            <div className={style.blob3}></div>*/}
        </div>
    </>
}

export default DeadFly;