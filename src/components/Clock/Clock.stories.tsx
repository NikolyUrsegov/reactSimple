import React, {useEffect, useState} from 'react';
import Clock from "./Clock";
import AnalogClock from "./AnalogClock";

export default {
    title: 'Clock',
    component: Clock
}


export const BaseExample = () => {
    return <Clock/>
}

export const AnalogExample = () => {
    return <AnalogClock/>
}