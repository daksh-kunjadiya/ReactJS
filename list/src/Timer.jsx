import React, { useEffect, useState } from "react";

const Timer = () => {
  const [flag, setFlag] = useState(true);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(30);
  const [second, setSecond] = useState(0);

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

  return (
    <div>
      <h1>
        Sale Start In : {hour} : {minute} : {second}
      </h1>
    </div>
  );
};

export default Timer;
