import React from "react";
import style from './TopMenu.module.css'
import {NavLink} from "react-router-dom";


let TopMenu = () => {
    console.log(window.location.pathname);

    return <div className={style.item}>
{/*        {!window.location.pathname == '/home' ? <NavLink to='/home' className={style.nLink}>{'<-- Back'}</NavLink> :
            <NavLink to='/home' className={style.nLink}>{'home'}</NavLink>}*/}


        {/*        <NavLink to='/main' className={style.nLink}>Falling letters</NavLink>
        <NavLink to='/secondary' className={style.nLink}>calculator</NavLink>
        <NavLink to='/third' className={style.nLink}>movement of the sun</NavLink>
        <NavLink to='/fourth' className={style.nLink}>geocoordinates</NavLink>
        <NavLink to='/fifth' className={style.nLink}>CountLetters</NavLink>
        <NavLink to='/sixth' className={style.nLink}>sixth</NavLink>
        <NavLink to='/seventh' className={style.nLink}>high-speed typing</NavLink>
        <NavLink to='/eighth' className={style.nLink}>eighth</NavLink>
        <NavLink to='/ninth' className={style.nLink}>weather forecast</NavLink>
        <NavLink to='/tenth' className={style.nLink}>exchange rate</NavLink>
        <NavLink to='/killerofflies' className={style.nLink}>killer of Flies</NavLink>
        <NavLink to='/visitAllContinents' className={style.nLink}>visitAllContinents</NavLink>*/}

    </div>
}

export default TopMenu;