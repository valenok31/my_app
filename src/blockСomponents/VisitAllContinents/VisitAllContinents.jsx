import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
import worldMap from './../../assets/images/worldMap.jpg'

const VisitAllContinents = (props) => {
    let cityAddParam = [
        {
            name: 'mov',
            title: 'New York city',
            cost: {
                mov: 0,
                ovb: 20000,
                tul: 25000,
                sor: 30000,
                pos: 22000,
                rom: 1000,
            },
            lat: 240,
            lon: 320,
        },
        {
            name: 'ovb',
            title: 'Novosibirsk',
            cost: {
                mov: 19000,
                ovb: 0,
                tul: 25000,
                sor: 30000,
                pos: 22000,
                rom: 1000,
            },
            lat: 200,
            lon: 670,
        },
        {
            name: 'tul',
            title: 'Cape Town',
            cost: {
                mov: 10000,
                ovb: 20000,
                tul: 0,
                sor: 30000,
                pos: 22000,
                rom: 1000,
            },
            lat: 430,
            lon: 545,
        },
        {
            name: 'sor',
            title: 'Paris',
            cost: {
                mov: 13000,
                ovb: 20000,
                tul: 25000,
                sor: 0,
                pos: 22000,
                rom: 1000,
            },
            lat: 215,
            lon: 500,
        },
        {
            name: 'pos',
            title: 'Rio de Janeiro',
            cost: {
                mov: 50000,
                ovb: 20000,
                tul: 25000,
                sor: 30000,
                pos: 0,
                rom: 1000,
            },
            lat: 400,
            lon: 390,
        },
        {
            name: 'rom',
            title: 'Sydney',
            cost: {
                mov: 140000,
                ovb: 200000,
                tul: 105000,
                sor: 300000,
                pos: 1290,
                rom: 0,
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
                        setTotalCost(totalСost + add[cityAddS.indexOf(thisCity)]);
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
            let ret = queueСities;
            ret.splice(queueСities.indexOf(thisCity), 1)
            setQueueСities(ret)
            setChoosingCity(!choosingCity);
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
            cityAddS = [];
            add = [];
            setChoosingCity(false);
        }
        }>Reset
        </button>
    </>
}

export default VisitAllContinents;