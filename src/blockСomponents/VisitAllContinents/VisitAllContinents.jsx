import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
import worldMap from './../../assets/images/worldMap.jpg'
/*import checkingСity from './checkingCity'*/

const VisitAllContinents = (props) => {

    let cityAddParam = props.cityAddParam;
    let cityAddS = [];
    let add = [];
    const [choosingCity, setChoosingCity] = useState(false);
    const [queueСities, setQueueСities] = useState([]);
    const [totalСost, setTotalCost] = useState(0);
    const [totalCostArr, setTotalCostArr] = useState([]);

    cityAddParam.map((f) => {
        cityAddS.push(f.name);
    })

    const setIndexOf = (add, number) => {
        return add.indexOf(number);
    }

    const checkingСity = (previousСity, thisCity) => {
        if (!previousСity) return;
        let previousNumberСity = setIndexOf(cityAddS, previousСity);
        totalCostArr.push(props.getCostCity(thisCity, previousNumberСity));
        setTotalCostArr(totalCostArr);
        const sumWithInitial = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);
        setTotalCost(sumWithInitial);
    }

    const choosingCityAdd = (thisCity, numberCity) => {
        if (setIndexOf(queueСities, thisCity) == -1) {
            queueСities.push(thisCity);
            setQueueСities(queueСities);
            setChoosingCity(!choosingCity);
            let prevСity = queueСities[setIndexOf(queueСities, thisCity) - 1];
            return checkingСity(prevСity, thisCity);
        }
        if (thisCity == queueСities[queueСities.length - 1]) {
            queueСities.splice(setIndexOf(queueСities, thisCity), 1);
            setQueueСities(queueСities);
            (totalCostArr.length > 0) && (totalCostArr.length = totalCostArr.length - 1);
            setTotalCostArr(totalCostArr);
            const sumWithInitial = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);
            setTotalCost(sumWithInitial);
            setChoosingCity(!choosingCity);
        }
    }

    let CitiesInGame = cityAddS.map((a, numberCity, c) => {
        return <div className={style.city}
                    style={{top: props.getCityParameter(numberCity, 'lat') + 'px', left: props.getCityParameter(numberCity, 'lon') + 'px'}}>
            <div id={a}
                 title={props.getCityParameter(numberCity, 'title')}
                 className={(setIndexOf(queueСities, a) != -1 ? style.city__selected : style.city__no_selected)}
                 onClick={() => choosingCityAdd(a, numberCity)}>
                {setIndexOf(queueСities, a) == -1 ? '' : `${setIndexOf(queueСities, a) + 1}`}
            </div>
        </div>
    });

    return <>
        <div className={style.item}>
            <div>{totalСost}</div>
            <img src={worldMap} alt='World Map' className={style.world_map}/>
            {CitiesInGame}
        </div>
        <button onClick={() => {
            setQueueСities([]);
            setTotalCost(0);
            setTotalCostArr([]);
            cityAddS = [];
            add = [];
            setChoosingCity(false);
        }
        }>Reset
        </button>
    </>
}

export default VisitAllContinents;