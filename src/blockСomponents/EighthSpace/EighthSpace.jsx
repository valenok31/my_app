import React, {useEffect, useState} from "react";
import style from "./EighthSpace.module.css"


const EighthSpace = (props) => {
   let  positionX;
    const [spaceX, setSpaceX] = useState(0)
    const [fire, setFire] = useState(false)
    const [fireX, setFireX] = useState(0)

    useEffect(
        (spaceX) => {
           console.log(spaceX)
        },[spaceX]
    )

    let setAnimationText = props.setAnimationText;
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


    return (
        <div className={style.item}>
            {textForAnimation}
            <div className={style.universe} onMouseOver={(e) => {
                 setSpaceX(e.clientX);
                setFireX(e.clientX);
            }}>
                <div className={style.spaceShuttle} style={{left: spaceX + 'px'}} onClick={() => {
                    setFire(true);
                    setFireX(spaceX)
                }}></div>
                <div className={fire ? style.bulletGo : style.bullet} style={{left: fireX + 'px'}}></div>
            </div>
        </div>
    )
}

export default EighthSpace;