import React, { useEffect, useState } from "react";

const Timer = () => {
    const [flag, setFlag] = useState(false);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            if (flag) {
                if (second > 0) {
                    setSecond(second - 1);
                } else if (minute > 0) {
                    setSecond(59);
                    setMinute(minute - 1);
                } else if (hour > 0) {
                    setSecond(59);
                    setMinute(59);
                    setHour(hour - 1);
                } else {
                    clearInterval(id);
                    setFlag(false);
                }
            }
        }, 1000);

        return () => clearInterval(id);
    }, [hour, minute, second, flag]);

    const startTimer = () => {
        let newTime = time / 60;
        setHour(Math.floor(newTime));
        setMinute(time - (Math.floor(newTime) * 60) - 1);
        setSecond(59);
        setFlag(true);
    };

    const stopTimer = () => {
        setFlag(false);
    };

    const resetTimer = () => {
        setFlag(false);
        setHour(0);
        setMinute(0);
        setSecond(0);
        setTime(0);
    };

    return (
        <div>
            <h1>
                Timer: {hour} : {minute} : {second}
            </h1>

            <input type="number" onChange={(e) => setTime(e.target.value)} />
            <button onClick={startTimer} disabled={flag}>
                Start
            </button>
            <button onClick={stopTimer} disabled={!flag}>
                Stop
            </button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
