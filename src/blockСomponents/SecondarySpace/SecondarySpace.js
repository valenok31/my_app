import React from "react";
import s from "./SecondarySpace.module.css"
import backSpaceIMG from "../../assets/images/2.png"


class SecondarySpace extends React.Component {
    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        let onKeyCodeDown = (ev) => {
            if (ev.keyCode == 13) {
                this.props.clickResult('=')
            }
            if (ev.keyCode == 106) {
                this.props.clickResult('*')
            }
            if (ev.keyCode == 107) {
                this.props.clickResult('+')
            }
            if (ev.keyCode == 109) {
                this.props.clickResult('-')
            }
            if (ev.keyCode == 111) {
                this.props.clickResult('/')
            }
            if (ev.keyCode == 46) {
                this.props.clickResult('C')
            }
            if (ev.keyCode == 32) {
                this.props.clickResult('C')
            }
        }

        let clickNumbersButtonId = (e) => {
            let buttonValueN = e.target.name;
            this.props.clickNumbersButtonId(buttonValueN);
            this.nameInput.focus();
        }
        let clickResult = (e) => {
            let buttonValue = e.target.name;
            this.props.clickResult(buttonValue);
            this.nameInput.focus();
        }
        let onPostChange = (e) => {
            let text = e.target.value;
            if (!isNaN(text)) {
                this.props.updateNewPostText(text);
                this.nameInput.focus();
            }
        }
        let vei = +this.props.value_a.toFixed(15);
        vei = (isNumber(vei) ? vei : null)
        vei = (isFinite(vei) ? (vei > 1e100 ? 'googol' : vei + this.props.matchControl) : 'error');

        function isNumber(num) {
            return typeof num === 'number' && !isNaN(num);
        }

        let arrButton = ['CE', 'C', 'Backspace', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, '.', '='];
        let ButtonGenerator = arrButton.map((e, r) => {
            return <button className={r === 2 ? s.buttonNull : s.numbers_button} key={r} value={e} name={e}
                           onClick={isNumber(e) || e === '.' ? clickNumbersButtonId : clickResult}>{r === 2 ?
                <img className={s.iconButton} src={backSpaceIMG} name={e}/> : e}</button>
        });
        return (
            <div className={s.item}>
                <div className={s.calculator_body}>
                    <div className={s.calculator_screen2}>{vei}</div>
                    {/*                    <textarea ref={(input) => {
                        this.nameInput = input;
                    }} className={s.calculator_screen1} onChange={onPostChange} onKeyDown={onKeyCodeDown}
                              value={this.props.text}/>*/}
                    <input type="text" ref={(input) => {
                        this.nameInput = input;
                    }} className={s.calculator_screen1} onChange={onPostChange} onKeyDown={onKeyCodeDown}
                           value={this.props.text}/>

                    {ButtonGenerator}


                    {/*                   <button className={s.numbers_button} name={'control'} id={1} key={1} value={'CE'}
                            onClick={clickResult}>{'CE'}</button>
                    <button className={s.numbers_button} name={'control'} id={2} key={2} value={'C'}
                            onClick={clickResult}>{'C'}</button>
                    <button className={s.numbers_button} name={'control'} id={3} key={3} value={'<x'}
                            onClick={clickResult}>{'<x'}</button>
                    <button className={s.numbers_button} name={'control'} id={4} key={4} value={'/'}
                            onClick={clickResult}>{'/'}</button>
                    <button className={s.numbers_button} name={'namber'} id={5} key={5} value={'7'}
                            onClick={clickNumbersButtonId}>{'7'}</button>
                    <button className={s.numbers_button} name={'namber'} id={6} key={6} value={'8'}
                            onClick={clickNumbersButtonId}>{'8'}</button>
                    <button className={s.numbers_button} name={'namber'} id={7} key={7} value={'9'}
                            onClick={clickNumbersButtonId}>{'9'}</button>
                    <button className={s.numbers_button} name={'control'} id={8} key={8} value={'*'}
                            onClick={clickResult}>{'*'}</button>
                    <button className={s.numbers_button} name={'namber'} id={9} key={9} value={'4'}
                            onClick={clickNumbersButtonId}>{'4'}</button>
                    <button className={s.numbers_button} name={'namber'} id={10} key={10} value={'5'}
                            onClick={clickNumbersButtonId}>{'5'}</button>
                    <button className={s.numbers_button} name={'namber'} id={11} key={11} value={'6'}
                            onClick={clickNumbersButtonId}>{'6'}</button>
                    <button className={s.numbers_button} name={'control'} id={12} key={12} value={'-'}
                            onClick={clickResult}>{'-'}</button>
                    <button className={s.numbers_button} name={'namber'} id={13} key={13} value={'1'}
                            onClick={clickNumbersButtonId}>{'1'}</button>
                    <button className={s.numbers_button} name={'namber'} id={14} key={14} value={'2'}
                            onClick={clickNumbersButtonId}>{'2'}</button>
                    <button className={s.numbers_button} name={'namber'} id={15} key={15} value={'3'}
                            onClick={clickNumbersButtonId}>{'3'}</button>
                    <button className={s.numbers_button} name={'control'} id={16} key={16} value={'+'}
                            onClick={clickResult}>{'+'}</button>
                    <button className={s.numbers_button} name={'control'} id={17} key={17} value={'+/-'}
                            onClick={clickResult}>{'+/-'}</button>
                    <button className={s.numbers_button} name={'namber'} id={18} key={18} value={'0'}
                            onClick={clickNumbersButtonId}>{'0'}</button>
                    <button className={s.numbers_button} name={'namber'} id={19} key={19} value={'.'}
                            onClick={clickNumbersButtonId}>{'.'}</button>
                    <button className={s.numbers_button} name={'control'} id={20} key={20} value={'='}
                            onClick={clickResult}>{'='}</button>*/}

                </div>

            </div>

        )
    }
}


/*let SecondarySpace_ = (props) => {


    let clickId = (e) => {
        let buttonId = e.target.id;
        let buttonValue = e.target.value;
        let buttonType = e.target.name;
        props.click(buttonId, buttonValue, buttonType);
    }
    let clickNumbersButtonId = (e) => {
        let buttonValueN = e.target.value;
        props.clickNumbersButtonId(buttonValueN);
    }
    let clickResult = (e) => {
        let buttonValue = e.target.value;
        props.clickResult(buttonValue);
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }
let vei = +props.isTotalEqua.toFixed(15);
    vei = (isFinite(vei) ? (vei > 1e100 ? 'googol' : vei + props.matchControl) : 'error');
    return (
        <div className={s.item}>
            <div className={s.calculator_body}>
                <div className={s.calculator_screen2}>{vei}</div>
                <textarea autoFocus className={s.calculator_screen1} onChange={onPostChange} value={props.text} />


                <button className={s.numbers_button} name={'control'} id={1} key={1} value={'CE'}
                        onClick={clickId}>{'CE'}</button>
                <button className={s.numbers_button} name={'control'} id={2} key={2} value={'C'}
                        onClick={clickResult}>{'C'}</button>
                <button className={s.numbers_button} name={'control'} id={3} key={3} value={'<x'}
                        onClick={clickId}>{'<x'}</button>
                <button className={s.numbers_button} name={'control'} id={4} key={4} value={'/'}
                        onClick={clickResult}>{'/'}</button>
                <button className={s.numbers_button} name={'namber'} id={5} key={5} value={'7'}
                        onClick={clickNumbersButtonId}>{'7'}</button>
                <button className={s.numbers_button} name={'namber'} id={6} key={6} value={'8'}
                        onClick={clickNumbersButtonId}>{'8'}</button>
                <button className={s.numbers_button} name={'namber'} id={7} key={7} value={'9'}
                        onClick={clickNumbersButtonId}>{'9'}</button>
                <button className={s.numbers_button} name={'control'} id={8} key={8} value={'*'}
                        onClick={clickResult}>{'*'}</button>
                <button className={s.numbers_button} name={'namber'} id={9} key={9} value={'4'}
                        onClick={clickNumbersButtonId}>{'4'}</button>
                <button className={s.numbers_button} name={'namber'} id={10} key={10} value={'5'}
                        onClick={clickNumbersButtonId}>{'5'}</button>
                <button className={s.numbers_button} name={'namber'} id={11} key={11} value={'6'}
                        onClick={clickNumbersButtonId}>{'6'}</button>
                <button className={s.numbers_button} name={'control'} id={12} key={12} value={'-'}
                        onClick={clickResult}>{'-'}</button>
                <button className={s.numbers_button} name={'namber'} id={13} key={13} value={'1'}
                        onClick={clickNumbersButtonId}>{'1'}</button>
                <button className={s.numbers_button} name={'namber'} id={14} key={14} value={'2'}
                        onClick={clickNumbersButtonId}>{'2'}</button>
                <button className={s.numbers_button} name={'namber'} id={15} key={15} value={'3'}
                        onClick={clickNumbersButtonId}>{'3'}</button>
                <button className={s.numbers_button} name={'control'} id={16} key={16} value={'+'}
                        onClick={clickResult}>{'+'}</button>
                <button className={s.numbers_button} name={'control'} id={17} key={17} value={'+/-'}
                        onClick={clickId}>{'+/-'}</button>
                <button className={s.numbers_button} name={'namber'} id={18} key={18} value={'0'}
                        onClick={clickNumbersButtonId}>{'0'}</button>
                <button className={s.numbers_button} name={'namber'} id={19} key={19} value={'.'}
                        onClick={clickNumbersButtonId}>{'.'}</button>
                <button className={s.numbers_button} name={'control'} id={20} key={20} value={'='}
                        onClick={clickResult}>{'='}</button>

            </div>

        </div>


        /!*<div className={style.item}>{props.b}</div>*!/
    )
}*/

export default SecondarySpace;