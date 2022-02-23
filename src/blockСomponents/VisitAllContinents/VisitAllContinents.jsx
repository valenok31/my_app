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
                LAX: 73,
                PEK: 633,
                DXB: 276,
            },
            lat: 240,
            lon: 320,
            continent: 'North America',
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
                LAX: 440,
                PEK: 558,
                DXB: 140,
            },
            lat: 200,
            lon: 670,
            continent: 'Asia',
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
                LAX: 771,
                PEK: 968,
                DXB: 283,
            },
            lat: 430,
            lon: 545,
            continent: 'Africa',
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
                LAX: 311,
                PEK: 616,
                DXB: 58,
            },
            lat: 215,
            lon: 500,
            continent: 'Europe',
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
                LAX: 273,
                PEK: 1293,
                DXB: 636,
            },
            lat: 400,
            lon: 390,
            continent: 'South America',
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
                LAX: 366,
                PEK: 477,
                DXB: 464,
            },
            lat: 430,
            lon: 860,
            continent: 'Australia',
        },
        {
            name: 'LAX',
            title: 'Los Angeles',
            cost: {
                JFK: 51,
                OVB: 579,
                CPT: 614,
                CDG: 185,
                RIO: 293,
                SYD: 314,
                LAX: 0,
                PEK: 650,
                DXB: 406,
            },
            lat: 245,
            lon: 210,
            continent: 'North America',
        },
        {
            name: 'PEK',
            title: 'Beijing',
            cost: {
                JFK: 695,
                OVB: 462,
                CPT: 890,
                CDG: 544,
                RIO: 1669,
                SYD: 729,
                LAX: 778,
                PEK: 0,
                DXB: 542,
            },
            lat: 240,
            lon: 760,
            continent: 'Asia',
        },
        {
            name: 'DXB',
            title: 'Dubai',
            cost: {
                JFK: 325,
                OVB: 133,
                CPT: 359,
                CDG: 158,
                RIO: 451,
                SYD: 417,
                LAX: 381,
                PEK: 516,
                DXB: 0,
            },
            lat: 275,
            lon: 630,
            continent: 'Asia',
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

    const setIndexOf = (add, number) => {
        return add.indexOf(number);
    }

    const checkingСity = (previousСity, thisCity, numberCity) => {
        if (!previousСity) return;
        cityAddParam.map((oneCity) => {
            if (oneCity.name == thisCity) {
                cityAddParam.map((f, r) => {
                    if (setIndexOf(cityAddS, previousСity) == r) {
                        add = Object.values(f.cost);
                        totalCostArr.push(add[setIndexOf(cityAddS, thisCity)]);
                        setTotalCostArr(totalCostArr);
                        const sumWithInitial = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);
                        setTotalCost(sumWithInitial);
                    }
                })
            }
        })
    }

    const choosingCityAdd = (thisCity, numberCity) => {
        if (setIndexOf(queueСities, thisCity) == -1) {
            queueСities.push(thisCity);
            setQueueСities(queueСities);
            setChoosingCity(!choosingCity);
            let prevСity = queueСities[setIndexOf(queueСities, thisCity) - 1];
            checkingСity(prevСity, thisCity, numberCity);
        } else {
            if (thisCity == queueСities[queueСities.length - 1]) {
                queueСities.splice(setIndexOf(queueСities, thisCity), 1);
                setQueueСities(queueСities);
                if (totalCostArr.length > 0) totalCostArr.length = totalCostArr.length - 1;
                setTotalCostArr(totalCostArr);
                const sumWithInitial = totalCostArr.reduce(
                    (previousValue, currentValue) => previousValue + currentValue,
                    0
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
                 className={(setIndexOf(queueСities, a) != -1 ? style.city__selected : style.city__no_selected)}
                 onClick={() => choosingCityAdd(a, numberCity)}>
                {setIndexOf(queueСities, a) == -1 ? '' : `${setIndexOf(queueСities, a) + 1}`}
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