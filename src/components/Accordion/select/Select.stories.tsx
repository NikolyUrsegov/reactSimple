import React, {useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import Select from "./Select";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const SelectControl: ComponentStory<typeof Select> = (args) => {
    const [valueTitle, setValueTitle] = useState(1)
    return <Select {...args} value={valueTitle} onChange={(value) => setValueTitle(value)}/>
};
export const ControlSelect = SelectControl.bind({});
ControlSelect.args = {
    item: [{value: 1, title: "JS"}, {value: 2, title: "React"}, {value: 3, title: "HTML"}],
};