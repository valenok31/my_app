import React from "react";
import style from "./KillerOfFliesSpace.module.css";


const Fly = (props) => {
    let i = props.i;
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;

    let styleLeft = () => {
        return Math.random() * (screenWidth - 100) + 50 + 'px'
    }

    let styleTop = () => {
        return Math.random() * (screenHeight - 100) + 50 + 'px';
    }

    return <>
        <div className={style.fly} key={i}
             title={props.tellFly[i]}
             onClick={
                 (e) => {
                     props.refresh(e.clientX, e.clientY);
                 }}

             style={{
                 left: styleLeft(),
                 top: styleTop(),
                 transform: 'rotate(' + Math.random() * 360 + 'deg)',
             }}>
            <div className={style.fly1}></div>
            <div className={style.fly2}></div>
            <div className={style.fly3} style={i == 5 ? {backgroundColor: 'red'} : {backgroundColor: 'black'}}></div>
            <div className={style.fly4} style={i == 5 ? {backgroundColor: 'red'} : {backgroundColor: 'black'}}></div>
            <div className={style.fly0} style={i == 5 ? {backgroundColor: 'red'} : {backgroundColor: 'black'}}></div>
            <div className={style.fly5}></div>
            <div className={style.fly6}></div>
            <div className={style.fly7}></div>
            <div className={style.fly8}></div>
        </div>
    </>
}

export default Fly;