import React, {useEffect, useState} from 'react';
import style from './SeventhSpace.module.css';


const SeventhSpace = (props) => {

    let interval = null;

    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [laps, setLaps] = useState([]);
    const [paused, setPaused] = useState('paused');
    const [reset, setReset] = useState(false);

    const createLaps = laps.map((element, index) => {
        return (<p key={index}>Laps {index + 1}: {element}
            <button onClick={() => remove(index)}>DELET</button>
        </p>);
    });

    function remove(index) {
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


    return <div className={style.item}>
        <div>
            <h1>{msmTime}</h1>
        </div>
        <div>
            {
                !start ? (<button onClick={() => {
                    setStart(true);
                    setPaused('running')
                }}>Start
                </button>) : (<button onClick={() => {
                    setStart(false);
                    setPaused('paused');
                }}>Stop
                </button>)
            }


            <button disabled={start} onClick={() => {
                setStart(false);
                setTime(0);
                setLaps([]);
                setPaused('paused');
                setReset(!reset)
            }}>Reset
            </button>

            <button onClick={() => {
                setStart(start);
                setLaps([...laps, msmTime])
            }}>Laps
            </button>
        </div>
        <div>
            {createLaps}
        </div>
        <div className={reset ? style.arrowClock : style.arrowClock2} style={{animationPlayState: paused}}>
            <span className={style.arrow}></span>
        </div>

    </div>


}

export default SeventhSpace;