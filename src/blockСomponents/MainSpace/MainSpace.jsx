import React from "react";
import style from "./MainSpace.module.css"

const MainSpace = (props) => {

    let textForAnimation = props.textForAnimation;
    let symbol = props.symbol;

    textForAnimation = textForAnimation.split("");

    textForAnimation = textForAnimation.map((t, r) => {
        return <span
            style={symbol.some((el) => r === el) ? {
                left: Math.random() * 600 - 300 + 'px',
                transitionDuration: 1 + Math.random() + '5s'
            } : {}}
            className={symbol.some((el) => r === el) ? style.itemSpanGo : style.itemSpan}
            onMouseOver={(w) => {
                symbol.some((el) => r === el) ? console.log('No') : props.overmous(r);
                console.log(w.clientX + ' / ' + w.clientY);
            }}
            key={r}>
            {t}
        </span>;
    })

    return <div className={style.item}>
        {textForAnimation}
    </div>
}

export default MainSpace;