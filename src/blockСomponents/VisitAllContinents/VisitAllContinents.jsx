import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"


const VisitAllContinents = (props) => {
    let cityAddParam = [
        {
            name: 'mov',
            cost: {
                mov: 0,
                ovb: 20000,
                tul: 25000,
                sor: 30000,
                pos: 22000,
            },
            lat: 120,
            lon: 50,
        },
        {
            name: 'ovb',
            cost: {
                mov: 19000,
                ovb: 0,
                tul: 25000,
                sor: 30000,
                pos: 22000,
            },
            lat: 220,
            lon: 600,
        },
        {
            name: 'tul',
            cost: {
                mov: 10000,
                ovb: 20000,
                tul: 0,
                sor: 30000,
                pos: 22000,
            },
            lat: 300,
            lon: 400,
        },
        {
            name: 'sor',
            cost: {
                mov: 13000,
                ovb: 20000,
                tul: 25000,
                sor: 0,
                pos: 22000,
            },
            lat: 120,
            lon: 500,
        },
        {
            name: 'pos',
            cost: {
                mov: 50000,
                ovb: 20000,
                tul: 25000,
                sor: 30000,
                pos: 0,
            },
            lat: 500,
            lon: 100,
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
    const checkingСity = (previousСity, thisCity, b) => {
        if (!previousСity) return;
        cityAddParam.map((oneCity) => {
            if (oneCity.name == thisCity) {

                cityAddParam.map((f,r) => {
                    if(cityAddS.indexOf(thisCity) == r){
                        add = Object.values(f.cost);
                        console.log('add='+add);
                        console.log('r='+cityAddS.indexOf(previousСity));
                        console.log('add[r]='+add[cityAddS.indexOf(previousСity)]);
                        console.log('thisCity='+thisCity);
                        console.log('previousСity='+previousСity);
                        setTotalCost(totalСost+add[cityAddS.indexOf(previousСity)]);
                    }
                })

            }
        })

    }




    const choosingCityAdd = (a, b) => {
        /*console.log(queueСities.includes(a.name));*/
        if (queueСities.indexOf(a) == -1) {
            queueСities.push(a);
            setQueueСities(queueСities);
            setChoosingCity(!choosingCity);
            let w = queueСities[queueСities.indexOf(a) - 1];
            checkingСity(w, a, b);

        } else {
            let ret = queueСities;
            ret.splice(queueСities.indexOf(a), 1)
            setQueueСities(ret)
            setChoosingCity(!choosingCity);
        }
        /* console.log(queueСities);*/
    }


    let CitiesInGame = cityAddS.map((a, b, c) => {

        return <div className={style.city}
                    style={{top: 100 * (b + 1) + 'px', left: 100 * (b + 1) + 'px'}}>
            <div id={a}
                 title={a}
                 className={(queueСities.indexOf(a) != -1 ? style.city__selected : style.city__no_selected)}
                 onClick={() => choosingCityAdd(a, b)}>
                {queueСities.indexOf(a) == -1 ? '' : queueСities.indexOf(a) + 1}
            </div>
        </div>
    });


    return <div className={style.item}>
        <div>{totalСost}</div>
        {CitiesInGame}

    </div>

}

export default VisitAllContinents;