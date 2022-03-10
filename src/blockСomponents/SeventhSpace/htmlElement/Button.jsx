import React from "react";
import style from "../SeventhSpace.module.css";
import CodeTextJS from "../CodeTextJavaScript";

const Button = (props) => {
    return <div className={style.item}>
        <div className={style.item__clock}>
            <div>
                <h1>{props.msmTime}</h1>
            </div>
            <div>
                {
                    !props.start ? (<button onClick={() => {
                        props.setStart(true);
                        props.setPaused('running')
                    }}>Start
                    </button>) : (<button onClick={() => {
                        props.setStart(false);
                        props.setPaused('paused');
                    }}>Stop
                    </button>)
                }


                <button disabled={props.start} onClick={() => {
                    props.setStart(false);
                    props.setTime(0);
                    props.setLaps([]);
                    props.setPaused('paused');
                    props.setReset(!props.reset)
                    props.setTypedText('');
                }}>Reset
                </button>

                <button onClick={() => {
                    props.setStart(props.start);
                    props.setLaps([...props.laps, props.msmTime])
                }}>Laps
                </button>
            </div>
            <div>
                {props.createLaps}
            </div>
            <div className={style.arrowClock}>
                <div className={props.reset ? style.arrowClock__arrow_min_1 : style.arrowClock__arrow_min_2}
                     style={{animationPlayState: props.paused}}>
                    <span className={style.arrow}></span>
                </div>
                <div className={props.reset ? style.arrowClock__arrow_sec_1 : style.arrowClock__arrow_sec_2}
                     style={{animationPlayState: props.paused}}>
                    <span className={style.arrow}></span>
                </div>
                <div className={props.reset ? style.arrowClock__arrow_milsec_1 : style.arrowClock__arrow_milsec_2}
                     style={{animationPlayState: props.paused}}>
                    <span className={style.arrow}></span>
                </div>
            </div>
        </div>
        <div className={style.itemere}>
            <div className={style.example}>
                {/*CodeTextJS*/}
            </div>
            <div className={style.workingArea}>
                <textarea cols='40' rows='5' value={props.typedText} onChange={(e) => {
                    props.setTypedText(e.target.value);
                    props.setStart(true);
                    props.setPaused('running');
                }}></textarea>
            </div>
            <div className={style.result}>
                <span>{props.time > 1000 ? props.speed : 'calculation...'}</span>
                {/*<div><span>{props.typedText.length}</span></div>*/}
            </div>
        </div>
    </div>
}


export default Button;