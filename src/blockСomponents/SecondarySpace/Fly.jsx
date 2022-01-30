import React from "react";
import style from "../SixthSpace/SixthSpace.module.css";

const Fly = (props) => {
    return <div className={style.fly} key={props.i}
                style={{
                    left: Math.random() * 92 + '%',
                    top: Math.random() * 85 + 'vh',
                    transform: 'rotate(' + Math.random() * 360 + 'deg)'
                }}
    >
        <div className={style.fly1}></div>
        <div className={style.fly2}></div>
        <div className={style.fly3}></div>
        <div className={style.fly4}></div>
        <div className={style.fly0}></div>
        <div className={style.fly5}></div>
        <div className={style.fly6}></div>
        <div className={style.fly7}></div>
        <div className={style.fly8}></div>
    </div>
}

export default Fly;