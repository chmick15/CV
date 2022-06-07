import React, { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const handleMinuteMore = () => {
        setMinutes(minutes + 1)
    }
    const handleMinuteLess = () => {
        minutes === 0 ? setMinutes(0) : setMinutes(minutes - 1)
    }

    const handleSecondMore = () => {
        setSeconds(seconds + 5)
        if (seconds >= 55) {
            setSeconds(0)
            setMinutes(minutes + 1)
        }
    }

    const handleSecondLess = () => {
        setSeconds(seconds - 5)
        if (seconds <= 0) {
            setSeconds(55)
            setMinutes(minutes - 1)
        }
        if (minutes <= 0) {
            setMinutes(0)
        }
        if (seconds === 0 && minutes === 0) {
            setSeconds(0)
        }
    }

    const time = ((minutes * 60) + seconds) * 1000

    const handleTimer = () => {
        console.log(time);
        setTimeout(() => {
            alert('go')
        }, time);
    }

    useEffect(() => {
        if (seconds < 10) {
            setSeconds('0' + seconds)
        } else {
            setSeconds(seconds)
        }
    }, [minutes])

    return (
        <div>
            This is the timer
            <div className="flex justify-center items-center">
                <div className="flex-column">
                    <button onClick={() => handleMinuteMore()}>+</button>
                    <p>{minutes}</p>
                    <button onClick={() => handleMinuteLess()}>-</button>
                </div>
                <p>:</p>
                <div className="flex-column">
                    <button onClick={() => handleSecondMore()}>+</button>
                    <p>{seconds}</p>
                    <button onClick={() => handleSecondLess()}>-</button>
                </div>
            </div>
            <button onClick={() => handleTimer()} >Go Work</button>
        </div>
    )
}

export default Timer;