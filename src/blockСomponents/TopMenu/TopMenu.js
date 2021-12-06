import React from "react";
import style from './TopMenu.module.css'
import {NavLink} from "react-router-dom";


let TopMenu = () => {
    return <div className={style.item}>
        <NavLink to='/main' className={style.nLink}>main</NavLink>
        <NavLink to='/secondary' className={style.nLink}>secondary</NavLink>
        <NavLink to='/third' className={style.nLink}>third</NavLink>

    </div>
}

export default TopMenu;