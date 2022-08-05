import React, {useEffect, useState} from "react";

const get2numbersClockString = (num: number) => {
    return num < 10 ? "0" + num : num
}

const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const IdIntervalClock = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(IdIntervalClock)
        }
    }, [])

    return (
        <div>
            Time:
            {get2numbersClockString(date.getHours())}
            :{get2numbersClockString(date.getMinutes())}
            :{get2numbersClockString(date.getSeconds())}
        </div>
    )
};

export default Clock;


