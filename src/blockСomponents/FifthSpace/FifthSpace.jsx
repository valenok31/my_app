import React, {useState} from 'react';
import style from './FifthSpace.module.css';

const FifthSpace = (props) => {



 const [typedText, setTypedText] = useState('');



    return (<>
        <div className={style.item}>
            <div className={style.example}>
                <h1>CountLetters</h1>
                <span>Счетчик букв CountLetters. Это лучший инструмент для подсчета букв в словах. Новая улучшенная версия счетчика позволяет быстро посчитать все буквы. Доступны все языки, включая языки племени Соаха. CountLetters анализирует текст и считает только те буквы, которые там есть. Счетчик CountLetters работает на 30% быстрее аналогичных сервисов. Ошибки при подсчете сведены к нулю. Вы всегда будете знать сколько букв в Вашем тексте. CountLetters - это точность в каждой букве!</span>
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