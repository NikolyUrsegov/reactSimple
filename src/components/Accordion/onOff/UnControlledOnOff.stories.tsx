import React, {useState} from 'react'
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from './UncontrolledOnOff'

export default {
    title: "Un Controlled OnOff",
    component: UncontrolledOnOff,
}

const callBack = action('clicked')

export const OnMode = () => <UncontrolledOnOff onChange={callBack}/>
