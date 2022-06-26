import React, {useState} from 'react'
import {action} from "@storybook/addon-actions";
import {OnOff} from './onOff'

export default {
    title: "OnOff",
    component: OnOff,
}

const callBack = action('clicked')

export const OnMode = () => <OnOff on={true} onChange={callBack}/>
export const OffMode = () => <OnOff on={false} onChange={callBack}/>

export const OnOffChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}