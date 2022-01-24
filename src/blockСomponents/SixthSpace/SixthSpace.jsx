import React, {useState} from 'react';

const SixthSpace = (props) => {
    let initialState = 0;
    const [counter, setCounter] = useState(initialState);

    const slog = () => {
        if(counter === 0) return 1;
        if(counter < 0) return 1;
        return Math.pow(10, Math.floor(Math.log10(counter)))
    }

    const plus = () => {
        setCounter(getCount => getCount + (slog()));
    }

    const minus = () => {
        setCounter(getCount => getCount - (slog()))
    }

    const reset = () => {
        setCounter(initialState)
    }

    return (
        <div>
            <div>
                <span>Counter: {counter}</span>
            </div>
            <div>
                <span>Slog: {slog()}</span>
            </div>
            <div>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default SixthSpace;