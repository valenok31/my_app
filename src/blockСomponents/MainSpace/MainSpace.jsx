import React from "react";
import style from "./MainSpace.module.css"


const MainSpace = (props) => {

    let overmous = (e) => {
        let boxChek = e.target.id;
        props.overmous(boxChek);
    }

    return (
        <div className={style.item}>
            <div>
                {/*<div>
                <div>
                    {props.collorBox}
                </div>
                <div>
                    {props.pageSize}
                </div>
                <div>
                    {props.totalUsersCount}
                </div>
                <div>
                    {props.currentPage}
                </div>
                <div>
                    {props.isFetching ? "четное" : "нечетное"}
                </div>
                <button onClick={plus}>X</button>
                <button onClick={minus}>O</button>
                </div>*/}
                <img alt="img" className={style.itemImg} src={`http://stattur.ru/assets/images/` + props.collorBox + `.jpg`}/>

                <div className={style.zebra_02} onMouseOver={overmous} id="1">1</div>
                <div className={style.zebra_01} onMouseOver={overmous} id="2">2</div>
                <div className={style.zebra_02} onMouseOver={overmous} id="3">3</div>
                <div className={style.zebra_01} onMouseOver={overmous} id="4">4</div>
                <div className={style.zebra_02} onMouseOver={overmous} id="5">5</div>
                <div className={style.zebra_01} onMouseOver={overmous} id="6">6</div>
                <div className={style.zebra_02} onMouseOver={overmous} id="7">7</div>
                <div className={style.zebra_01} onMouseOver={overmous} id="8">8</div>
                <div className={props.collorBox}>{props.collorBox}</div>




            </div>

        </div>
    )
}

export default MainSpace;