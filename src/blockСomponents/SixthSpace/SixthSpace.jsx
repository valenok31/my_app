import React, {useState} from 'react';
import style from './SixthSpace.module.css'
import Fly from "../SecondarySpace/Fly";


const SixthSpace = (props) => {
    let initialState = 0;
    let tellFly = [
        'Hi',
        'Hello!',
        'Who are you?',
        'what do you need?',
        'my name is Zhuzha',
        'oh no!',

    ]
    /*    let tellFly = {
            0: 'Hi',
            1: 'Hello!',
            2: 'Who are you?',
            3: 'what do you need?'
        }*/
    const [counter, setCounter] = useState(initialState);


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

    const refresh = () => {
        setCounter(getCount => getCount - 1);
    }

    const reset = () => {
        setCounter(initialState)
    }


    let flies = [];
    for (let i = 0; i < counter; i++) {
        flies.push(<Fly i={i} tellFly={tellFly} refresh={refresh}/>);
    }

    return (
        <div className={style.space}>
            <div className={style.flies}>МУХИ
                {flies}
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