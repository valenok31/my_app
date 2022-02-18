import React from "react";
import style from './TopMenu.module.css'
import {NavLink} from "react-router-dom";


let TopMenu = () => {
    return <div className={style.item}>
        <NavLink to='/home' className={style.nLink}>Home</NavLink>
        <NavLink to='/main' className={style.nLink}>main</NavLink>
        <NavLink to='/secondary' className={style.nLink}>secondary</NavLink>
        <NavLink to='/third' className={style.nLink}>third</NavLink>
        <NavLink to='/fourth' className={style.nLink}>fourth</NavLink>
        <NavLink to='/fifth' className={style.nLink}>fifth</NavLink>
        <NavLink to='/sixth' className={style.nLink}>sixth</NavLink>
        <NavLink to='/seventh' className={style.nLink}>seventh</NavLink>
        <NavLink to='/eighth' className={style.nLink}>eighth</NavLink>
        <NavLink to='/ninth' className={style.nLink}>ninth</NavLink>
        <NavLink to='/tenth' className={style.nLink}>tenth</NavLink>
        <NavLink to='/killerofflies' className={style.nLink}>killer of Flies</NavLink>
        <NavLink to='/visitAllContinents' className={style.nLink}>visitAllContinents</NavLink>

    </div>
}

export default TopMenu;