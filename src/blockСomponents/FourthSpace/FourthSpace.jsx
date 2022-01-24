import React from "react";
import style from "./FourthSpace.module.css"
import axios from "axios";
import Loader from "../Loader/Loader";

const FourthSpace = (props) => {

    let setUserId = (e) => {
        props.togglesIsFetching(true);
        let buttonValue = e.target.name;
        props.setUserId(buttonValue);

        axios.get(`https://jsonplaceholder.typicode.com/photos/` + buttonValue)
            .then(resp => {
                props.togglesIsFetching(false);
                props.setUsersProfile(resp.data.title);
            })
            .catch(resp => {
                props.togglesIsFetching(false);
                props.setUsersProfile('ERROR!!');
            })
    }

    let arr = [];
    for (let i = 1; i < 21; i++) {
        arr.push(i);
    }
    let buttt = arr.map((e) => <button onClick={setUserId} name={e}>{e}</button>)
    return (
        <div>
            {props.isFetching ? <Loader/> : null}
            <div className={style.item}>
                <div>{props.profile}</div>
                <div>{props.userId}</div>
            </div>
            <div className={style.item}>
                {buttt}
            </div>

        </div>
    )
}

export default FourthSpace;