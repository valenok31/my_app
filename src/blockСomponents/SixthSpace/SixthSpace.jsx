import React, {useState} from 'react';
import style from './SixthSpace.module.css'
import Fly from "./Fly";
import DeadFly from "./DeadFly";


const SixthSpace = (props) => {
    let initialState = 0;
    let initialStateDead = 0;
    let x = 300;
    let y = 300;
    let coordXY = [];
    let tellFly = [
        'Hi',
        'Hello!',
        'Who are you?',
        'what do you need?',
        'my name is Zhuzha',
        'oh no!',

    ]

    let tellFly2 = [
        {
            id: 1,
            tell: 'Hi',
            x: null,
            y: null
        },

    ]
    /*    let tellFly = {
            0: 'Hi',
            1: 'Hello!',
            2: 'Who are you?',
            3: 'what do you need?'
        }*/
    const [counter, setCounter] = useState(initialState);
    const [counterDeadFly, setCounterDeadFly] = useState(initialState)
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

        console.log(coordDeadFlyX);

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

    let deadFlies = [];
    for (let d = 0; d < counterDeadFly; d++) {
        deadFlies.push(<DeadFly d={d} x={coordDeadFlyX[d]} y={coordDeadFlyY[d]}/>);
    }

    return (
        <div className={style.space}>
            <div className={style.flies}>МУХИ
                {flies}
                {deadFlies}
            </div>
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

export default SixthSpace;