import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
import worldMap from './../../assets/images/worldMap.jpg'

const VisitAllContinents = (props) => {
    let cityAddParam = [
        {
            name: 'JFK',
            title: 'New York city',
            cost: {
                JFK: 0,
                OVB: 430,
                CPT: 538,
                CDG: 209,
                RIO: 218,
                SYD: 520,
            },
            lat: 240,
            lon: 320,
        },
        {
            name: 'OVB',
            title: 'Novosibirsk',
            cost: {
                JFK: 306,
                OVB: 0,
                CPT: 404,
                CDG: 126,
                RIO: 545,
                SYD: 543,
            },
            lat: 200,
            lon: 670,
        },
        {
            name: 'CPT',
            title: 'Cape Town',
            cost: {
                JFK: 557,
                OVB: 1200,
                CPT: 0,
                CDG: 332,
                RIO: 622,
                SYD: 639,
            },
            lat: 430,
            lon: 545,
        },
        {
            name: 'CDG',
            title: 'Paris',
            cost: {
                JFK: 202,
                OVB: 156,
                CPT: 394,
                CDG: 0,
                RIO: 279,
                SYD: 493,
            },
            lat: 215,
            lon: 500,
        },
        {
            name: 'RIO',
            title: 'Rio de Janeiro',
            cost: {
                JFK: 262,
                OVB: 1356,
                CPT: 786,
                CDG: 339,
                RIO: 0,
                SYD: 723,
            },
            lat: 400,
            lon: 390,
        },
        {
            name: 'SYD',
            title: 'Sydney',
            cost: {
                JFK: 486,
                OVB: 526,
                CPT: 702,
                CDG: 347,
                RIO: 779,
                SYD: 0,
            },
            lat: 430,
            lon: 860,
        },
    ];
    let cityAddS = [];
    let add = [];
    const [choosingCity, setChoosingCity] = useState(false);
    const [queueСities, setQueueСities] = useState([]);
    const [totalСost, setTotalCost] = useState(0);
    const [totalCostArr, setTotalCostArr] = useState([]);

    cityAddParam.map((f) => {
        cityAddS.push(f.name);
    })
    const checkingСity = (previousСity, thisCity, numberCity) => {
        if (!previousСity) return;
        cityAddParam.map((oneCity) => {
            if (oneCity.name == thisCity) {
                cityAddParam.map((f, r) => {
                    if (cityAddS.indexOf(previousСity) == r) {
                        add = Object.values(f.cost);
                        let newTotArr = totalCostArr;
                        newTotArr.push(add[cityAddS.indexOf(thisCity)]);
                        setTotalCostArr(newTotArr);
                        const initialValue = 0;
                        const sumWithInitial = totalCostArr.reduce(
                            (previousValue, currentValue) => previousValue + currentValue,
                            initialValue
                        );
                        setTotalCost(sumWithInitial);
                    }
                })
            }
        })
    }

    const choosingCityAdd = (thisCity, numberCity) => {
        if (queueСities.indexOf(thisCity) == -1) {
            queueСities.push(thisCity);
            setQueueСities(queueСities);
            setChoosingCity(!choosingCity);
            let prevСity = queueСities[queueСities.indexOf(thisCity) - 1];
            checkingСity(prevСity, thisCity, numberCity);
        } else {
            if (thisCity == queueСities[queueСities.length-1]) {
                let ret = queueСities;
                ret.splice(queueСities.indexOf(thisCity), 1);
                setQueueСities(ret);
                let delTotalCostArr = totalCostArr;
                if(delTotalCostArr.length>0){delTotalCostArr.length = delTotalCostArr.length-1;}
                setTotalCostArr(delTotalCostArr);
                const initialValue = 0;
                const sumWithInitial = totalCostArr.reduce(
                    (previousValue, currentValue) => previousValue + currentValue,
                    initialValue
                );
                setTotalCost(sumWithInitial);
                setChoosingCity(!choosingCity);
            }
        }
    }

    let CitiesInGame = cityAddS.map((a, numberCity, c) => {
        return <div className={style.city}
                    style={{top: cityAddParam[numberCity].lat + 'px', left: cityAddParam[numberCity].lon + 'px'}}>
            <div id={a}
                 title={cityAddParam[numberCity].title}
                 className={(queueСities.indexOf(a) != -1 ? style.city__selected : style.city__no_selected)}
                 onClick={() => choosingCityAdd(a, numberCity)}>
                {queueСities.indexOf(a) == -1 ? '' : queueСities.indexOf(a) + 1}
            </div>
        </div>
    });

    return <>
        <div className={style.item}>
            <div>{totalСost}</div>
            <img src={worldMap} alt='Worlt Map' className={style.world_map}/>
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