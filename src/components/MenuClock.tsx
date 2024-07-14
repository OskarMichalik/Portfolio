import { useState } from 'react';
import classes from './MenuClock.module.css';

const MenuClock = () => {
    var date: Date = new Date(), hours: number = date.getHours(), minutes: number = date.getMinutes();
    const [time, setTime] = useState<String>(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`)

    setInterval(() => {
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        setTime(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`);
    }, 5000)

    return <div className={classes.menuClockDiv}>
        {time}
    </div>
}

export default MenuClock;