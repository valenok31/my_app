import React from "react";
import style from "./TenthSpace.module.css"


const TenthSpace = (props) => {


    return (
        <div className={style.item}>


            {props.profile.fullName}


        </div>
    )
}

export default TenthSpace;