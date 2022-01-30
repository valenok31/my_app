import React, {useState} from 'react';
import style from './FifthSpace.module.css';

const FifthSpace = (props) => {



 const [typedText, setTypedText] = useState('');



    return (<>
        <div className={style.item}>
            <div className={style.example}>
                <span>Here text for trening</span>
            </div>
            <div className={style.workingArea}>
                <textarea cols='30' rows='10' value={typedText} onChange ={(e) => setTypedText(e.target.value)}></textarea>
            </div>
            <div className={style.result}>
                <span>{typedText.length}</span>
            </div>
        </div>
       </>
    );
}

export default FifthSpace;