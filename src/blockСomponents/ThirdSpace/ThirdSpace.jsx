import React from "react";
import style from "./ThirdSpace.module.css"


const ThirdSpace = (props) => {


    return (
        <div className={style.item}>


            {props.profile.fullName}


        </div>
    )
}

export default ThirdSpace;