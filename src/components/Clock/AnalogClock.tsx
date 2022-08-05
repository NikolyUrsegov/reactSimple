import React, {useEffect, useState} from 'react';
import s from './AnalogClock.module.css'

const makeStyleHand = (num: number) => {
    return {transform: `translate(-50%) rotate(${num * 360}deg)`}
}

const AnalogClock = () => {
    const [date, setDate] = useState(new Date())
    const secondRatio = date.getSeconds() / 60
    const minuteRatio = (secondRatio + date.getMinutes()) / 60
    const hourRatio = (minuteRatio + date.getHours()) / 12

    useEffect(() => {
        const AnClockInterval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(AnClockInterval)
        }
    })


    return (
        <div className={s.clockBlock}>
            <div className={`${s.clock}`}>
                <div className={`${s.hand} ${s.hour}`}
                     style={makeStyleHand(hourRatio)}></div>
                <div className={`${s.hand} ${s.minute}`}
                     style={makeStyleHand(minuteRatio)}></div>
                <div className={`${s.hand} ${s.second}`}
                     style={makeStyleHand(secondRatio)}></div>

                <div className={`${s.number} ${s.number1}`}>
                    <div>1</div>
                </div>
                <div className={`${s.number} ${s.number2}`}>
                    <div>2</div>
                </div>
                <div className={`${s.number} ${s.number3}`}>
                    <div>3</div>
                </div>
                <div className={`${s.number} ${s.number4}`}>
                    <div>4</div>
                </div>
                <div className={`${s.number} ${s.number5}`}>
                    <div>5</div>
                </div>
                <div className={`${s.number} ${s.number6}`}>
                    <div>6</div>
                </div>
                <div className={`${s.number} ${s.number7}`}>
                    <div>7</div>
                </div>
                <div className={`${s.number} ${s.number8}`}>
                    <div>8</div>
                </div>
                <div className={`${s.number} ${s.number9}`}>
                    <div>9</div>
                </div>
                <div className={`${s.number} ${s.number10}`}>
                    <div>10</div>
                </div>
                <div className={`${s.number} ${s.number11}`}>
                    <div>11</div>
                </div>
                <div className={`${s.number} ${s.number12}`}>
                    <div>12</div>
                </div>
            </div>
        </div>

    );
};

export default AnalogClock;