import React, {useEffect, useState} from 'react';

const SeventhSpace = (props) => {

    let interval = null;

    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [laps, setLaps] = useState([]);

    const createLaps = laps.map((element, index) => {
        return (<p key={index}>Laps {index + 1}: {element} <button onClick={() => remove(index)}>DELET</button></p>);
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


    return <div>
        <div>
            <h1>{msmTime}</h1>
        </div>
        <div>
            {
                !start ? (<button onClick={() => {
                    setStart(true)
                }}>Start
                </button>) : (<button onClick={() => {
                    setStart(false)
                }}>Stop
                </button>)
            }


            <button onClick={() => {
                setStart(false);
                setTime(0);
                setLaps([]);
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

    </div>


}

export default SeventhSpace;