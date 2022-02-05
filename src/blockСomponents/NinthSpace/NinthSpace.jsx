import React from "react";
import style from "./NinthSpace.module.css"


const NinthSpace = (props) => {


    return (
        <div className={style.item}>


            {props.profile.fullName}


        </div>
    )
}

export default NinthSpace;