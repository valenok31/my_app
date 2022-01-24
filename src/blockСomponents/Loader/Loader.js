import React from "react";
import style from './Loader.module.css'
import LoadingImg from "../../assets/images/Loading.gif"


let Loader = () => {
    return <div className={style.item}>
        <img src={LoadingImg} alt='Loading' className={style.loading_img}/>
    </div>
}

export default Loader;