// Render Prop
import React, {useEffect, useState} from 'react';

let buttonLaps = "laps";
const FifthSpace = (props) => {

    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [laps, setLaps] = useState("00:00:00.00");


    useEffect(() => {
        let interval = null;



        if (start) {
            interval = setInterval(() => {
                setTime(time => time + 10)
            }, 10)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [start])

    let mSec = ("0" + (time / 10) % 1000).slice(-2);
    let sec = ("0" + (Math.floor((time / 1000) % 60))).slice(-2);
    let minut = ("0" + (Math.floor((time / 60000) % 60))).slice(-2);
    let hour = ("0" + (Math.floor((time / 60000 / 60) % 60))).slice(-2);
    let hmsmTime = hour + ":" + minut + ":" + sec + "." + mSec;


    const timeLaps = () => {

        if (time === 0) {

            setLaps(hmsmTime);
            buttonLaps = "laps";
        }
        if (time !== 0 && !start) {

            setLaps(hmsmTime);
            buttonLaps = "reset laps";
        }
        if (time !== 0 && start) {

            setLaps(hmsmTime);
            setTime(0);
            buttonLaps = "laps";
        }


    }


    return (
        <div>
            <h1>Stopwatch</h1>
            <h1>
                <span>{hmsmTime}</span>
            </h1>
            <div>
                {(!start) ? <button onClick={() => setStart(true)}>Start</button> :
                    <button onClick={() => {
                        setStart(false);
                        buttonLaps = "reset laps";
                    }}>Stop</button>}
                <button onClick={() => {
                    setTime(0);
                    setStart(false);
                }}>Reset
                </button>
                <button onClick={() => timeLaps()}>
                    {buttonLaps}
                </button>
            </div>
            <h1>
                <span>{laps}</span>
            </h1>
        </div>
    );
}

export default FifthSpace;