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
                    <input type="text" ref={(input) => {
                        this.nameInput = input;
                    }} className={s.calculator_screen1} onChange={onPostChange} onKeyDown={onKeyCodeDown}
                           value={this.props.text}/>
                    {ButtonGenerator}
                </div>
            </div>
        )
    }
}

export default SecondarySpace;