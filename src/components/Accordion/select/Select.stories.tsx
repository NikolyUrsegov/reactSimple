import React, {useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import Select from "./Select";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const SelectControl: ComponentStory<typeof Select> = (args) => {
    const [valueTitle, setValueTitle] = useState(args.value)
    return (
        <Select {...args}
                value={valueTitle}
                onChange={(value) => setValueTitle(value)}/>
    )
};
export const ControlSelect1 = SelectControl.bind({});
ControlSelect1.args = {
    value: 1,
    item: [
        {value: 1, title: "JS"},
        {value: 2, title: "React"},
        {value: 3, title: "HTML"}],
};

export const ControlSelect2 = SelectControl.bind({});
ControlSelect2.args = {
    value: 2,
    item: [
        {value: 1, title: "JS"},
        {value: 2, title: "React"},
        {value: 3, title: "HTML"}],
};

export const ControlSelect3 = SelectControl.bind({});
ControlSelect3.args = {
    value: 3,
    item: [
        {value: 1, title: "JS"},
        {value: 2, title: "React"},
        {value: 3, title: "HTML"}],
};