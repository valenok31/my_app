import React from "react";
import style from "./MainSpace.module.css"


const MainSpace = (props) => {

    let setAnimationText = props.setAnimationText;
    let textForAnimation = props.textForAnimation;
    let symbol = props.symbol;

    textForAnimation = textForAnimation.split(";");

    textForAnimation = textForAnimation.map((t, r) => {
        console.log(symbol === r);
        console.log("symbol " + symbol);
        console.log("r " + r);
        return <span
            style={symbol.some((el) => r === el) ? {
                left: Math.random() * 600-300 + 'px',
                transitionDuration: 1+Math.random() + '5s'
            } : { }}
            className={symbol.some((el) => r === el) ? style.itemSpanGo : style.itemSpan}
            onMouseOver={() => {
                symbol.some((el) => r === el) ? console.log('No') : props.overmous(r)

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