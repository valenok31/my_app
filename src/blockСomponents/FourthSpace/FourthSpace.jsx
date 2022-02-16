import React from "react";
import style from "./FourthSpace.module.css"

const FourthSpace = (props) => {

    const array = [1,3,5,30,10];
    const result = array.lastIndexOf(3)
    console.log(result);


    return (
        <div>
            <div className={style.item}>
                Hi!
            </div>


        </div>
    )
}

export default FourthSpace;