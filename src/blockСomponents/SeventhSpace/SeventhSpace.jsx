import React, {useEffect, useState} from 'react';
import style from './SeventhSpace.module.css';
import CodeTextJS from './CodeTextJavaScript'
import Button from "./htmlElement/Button";

const SeventhSpace = (props) => {

    let interval = null;

    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [laps, setLaps] = useState([]);
    const [paused, setPaused] = useState('paused');
    const [reset, setReset] = useState(false);
    const [typedText, setTypedText] = useState('');


    const createLaps = laps.map((element, index) => {
        return (<p key={index}>Laps {index + 1}: {element}
            <button onClick={() => remove(index)}>DELET</button>
        </p>);
    });

    const remove = (index) => {
        setLaps([...laps.slice(0, index), ...laps.slice(index + 1)]);
    }

    useEffect(
        () => {
            if (start) {
                interval = setInterval(() => {
                    setTime(getTime => getTime + 10)
                }, 10)
            }
            return () => clearInterval(interval);

        }, [start]
    )

    let mSec = ("0" + (time / 10) % 1000).slice(-2);
    let sec = ("0" + (Math.floor((time / 1000) % 60))).slice(-2);
    let minut = ("0" + (Math.floor((time / 60000) % 60))).slice(-2);
    let hour = ("0" + (Math.floor((time / 60000 / 60) % 60))).slice(-2);
    let msmTime = minut + ":" + sec + "." + mSec;
    let speed = Math.floor(typedText.length * 60 / (Math.floor(time / 1000)));

    return <Button
        time={time} setTime={setTime}
        start={start} setStart={setStart}
        laps={laps} setLaps={setLaps}
        paused={paused} setPaused={setPaused}
        reset={reset} setReset={setReset}
        typedText={typedText} setTypedText={setTypedText}
        msmTime={msmTime} speed={speed}
        createLaps={createLaps}
    />


}

export default SeventhSpace;