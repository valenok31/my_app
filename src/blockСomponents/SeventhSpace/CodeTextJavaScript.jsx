import React from "react";
import style from './SeventhSpace.module.css'
const CodeTextJS = <code className={style.codeSpace}>
    {`import React, {useEffect, useState} from 'react';`}<br/>
    {`import style from './SeventhSpace.module.css';`}<br/>
    {`const [time, setTime] = useState(0);`}<br/>
    {`const [start, setStart] = useState(false);`}<br/>
    {`const [laps, setLaps] = useState([]);`}<br/>
    {`const [paused, setPaused] = useState('paused');`}<br/>
    {`const [reset, setReset] = useState(false);`}<br/>
    {`const [typedText, setTypedText] = useState('');`}<br/>
</code>

export default CodeTextJS;