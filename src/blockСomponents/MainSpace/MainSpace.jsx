import React from "react";
import style from "./MainSpace.module.css"


const MainSpace = (props) => {

    let setAnimationText = props.setAnimationText;
    let textForAnimation = props.textForAnimation;
    let symbol = props.symbol;

    textForAnimation = textForAnimation.split(";");

    textForAnimation = textForAnimation.map((t, r) => {
        console.log(symbol===r);
        console.log("symbol " + symbol);
        console.log("r " + r);
        return <span
            className={symbol.some((el) => r === el)  ? style.itemSpanGo : style.itemSpan}
            onMouseOver={() => {
                props.overmous(r)
            }}
            key={r}>
            {t}
        </span>;
    })


    return (
        <div className={style.item}>
            {textForAnimation}
        </div>
    )
}

export default MainSpace;