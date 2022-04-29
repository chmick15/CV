import React from "react";
import Display from '../components/projects/timer/display'
import Settings from '../components/projects/timer/settings'

const Timer = () => {

    return (
        <div>
            <p>This is the timer page</p>
            <Settings />
            <Display />
        </div>
    )
};

export default Timer;