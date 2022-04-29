import React, { useState } from "react";

const Settings = () => {
    const [message, setMessage] = useState('')
    const [value, setValue] = useState('30')

    const startTimer = () => {
        setInterval(() => console.log(value - 1), 1000)
    }

    return (
        <div>
            Settings of the timer
            <div>
                <input placeholder="choose the message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div>
                <button onClick={() => setMessage(message)}>Validate</button>
            </div>
            <div>
                <input type={'range'} min={0} max={60} step={1} value={value} onChange={(e) => setValue(e.target.value)}></input>
            </div>
            <div>
                <p>Value of the timer:{value}</p>
            </div>
            <div>
                <button onClick={() => startTimer()}>Start Timer</button>
            </div>
        </div>
    )
}

export default Settings;