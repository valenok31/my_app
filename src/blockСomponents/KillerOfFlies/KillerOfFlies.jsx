import React, {useState} from 'react';
import style from './KillerOfFliesSpace.module.css'
import Fly from "./Fly";
import DeadFly from "./DeadFly";


const KillerOfFlies = (props) => {
    let initialState = 20;
    let initialStateDead = 0;
    const screenWidth = document.documentElement.clientWidth/2;
    const screenHeight = document.documentElement.clientHeight/2;
    const maxInvertPoint = Math.sqrt(screenWidth**2 + screenHeight**2);

    let tellFly = [
        'Hi',
        'Hello!',
        'Who are you?',
        'what do you need?',
        'my name is Zhuzha',
        'oh no!',

    ]

    const [counter, setCounter] = useState(initialState);
    const [counterDeadFly, setCounterDeadFly] = useState(initialStateDead)
    const [coordDeadFlyX, setCoordDeadFlyX] = useState([])
    const [coordDeadFlyY, setCoordDeadFlyY] = useState([])


    const slog = () => {
        if (counter === 0) return 1;
        if (counter < 0) return 1;
        /*return Math.pow(10, Math.floor(Math.log10(counter)))*/
        return 1;
    }

    const plus = () => {
        setCounter(getCount => getCount + (slog()));
    }

    const minus = () => {
        setCounter(getCount => getCount - (slog()))
    }


    const refresh = (xD, yD) => {
        setCounter(getCount => getCount - 1);
        setCounterDeadFly(getCountDead => getCountDead + 1);
        coordDeadFlyX.push(xD)
        coordDeadFlyY.push(yD)

        setCoordDeadFlyX(coordDeadFlyX);
        setCoordDeadFlyY(coordDeadFlyY);


    }

    const reset = () => {
        setCounter(initialState);
        setCounterDeadFly(initialState);
        setCoordDeadFlyX([]);
        setCoordDeadFlyY([]);
    }


    let flies = [];
    for (let i = 0; i < counter; i++) {
        flies.push(<Fly i={i} tellFly={tellFly} refresh={refresh}/>);
    }
const calcPoints = function (coordDeadFlyXs, coordDeadFlyYs) {
    let wH = (screenWidth - coordDeadFlyXs)**2;
    let hH = (screenHeight - coordDeadFlyYs)**2;
    let calcPoints = 0;
    if(Math.sqrt(wH + hH)<201){calcPoints = 10}
    if(Math.sqrt(wH + hH)<151){calcPoints = 40}
    if(Math.sqrt(wH + hH)<101){calcPoints = 70}
    if(Math.sqrt(wH + hH)<51){calcPoints = 100}
    console.log(calcPoints);
    return (calcPoints);

}
    let deadFlies = [];
    let coordDeadFly = [];
    let totalPoints;
    for (let d = 0; d < counterDeadFly; d++) {
        deadFlies.push(<DeadFly d={d} x={coordDeadFlyX[d]} y={coordDeadFlyY[d]}/>);
        /*deadFlies.push(<DeadFly d={d} x={screenWidth} y={screenHeight}/>);*/
        coordDeadFly.push(calcPoints(coordDeadFlyX[d], coordDeadFlyY[d]));
        totalPoints = coordDeadFly.reduce((z, d) => {
          return z+d
        })

    }

    return (
        <div className={style.space}>
            <div className={style.targetForShooting}>
                <div className={style.target__10}></div>
                <div className={style.target__40}></div>
                <div className={style.target__70}></div>
                <div className={style.target__100}></div>
            </div>
            <div className={style.flies}>МУХИ
                {flies}
                {deadFlies}
            </div>
            {totalPoints}
            <div className={style.numberFlies}>
                <span>Количество мух: {counter}</span>
            </div>
            <div className={style.countingFlies}>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default KillerOfFlies;