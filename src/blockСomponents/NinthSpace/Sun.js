import React from "react";
import style from './NinthSpace.module.css'

const Sun = (props) => {

    let temWos = props.tempe;
    let sunDay = <img src="https://cdn-icons.flaticon.com/png/512/3073/premium/3073665.png?token=exp=1644940669~hmac=b2a4ff18e8416a4e7dcd6f30ef5f8046"/>
    let nightDay = <img src="https://cdn-icons-png.flaticon.com/512/740/740878.png"/>

    return <div>

        <div
            className={style.sun}>{(props.dateNow > temWos.sunset || props.dateNow < temWos.sunrise) ? nightDay : sunDay}</div>


    </div>
}

export default Sun;