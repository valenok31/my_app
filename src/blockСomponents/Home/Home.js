import React from "react";
import style from './Home.module.css'
import {NavLink} from "react-router-dom";


let Home = () => {
    return <div className={style.item}>

        <NavLink to='/main' className={style.nLink}><div>Выбиваем буквы</div></NavLink>
        <NavLink to='/secondary' className={style.nLink}><div>Калькулятор</div></NavLink>
        <NavLink to='/ninth' className={style.nLink}><div>Погода в Алтайском крае</div></NavLink>
        <NavLink to='/fourth' className={style.nLink}><div>Запросы на тестовый сервак</div></NavLink>
        <NavLink to='/fifth' className={style.nLink}><div>Счетчик букв CountLetters</div></NavLink>
        <NavLink to='/sixth' className={style.nLink}><div>Мухи</div></NavLink>
        <NavLink to='/seventh' className={style.nLink}><div>Тренажер скоростного набора кода</div></NavLink>
        <NavLink to='/tenth' className={style.nLink}><div>Курсы валют</div></NavLink>


    </div>
}

export default Home;