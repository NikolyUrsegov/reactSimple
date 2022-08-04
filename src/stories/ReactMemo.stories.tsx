import React, {useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

const NewMessagesCounter = (props: {count: number}) => {
    console.log('render counter')
    return <div>{props.count}</div>
}
const User = (props: {user: Array<string>}) => {
    console.log('render user')
    return <div>{props.user.map((el, i) => (
        <div key={i}>{el}</div>
    ))}</div>
}
const ReactMemo = (props: {children: any}) => {
    console.log('render ReactMemo')
    return (
  <div>{props.children}</div>
)
}

export default {
    title: 'ReactMemo',
    component: ReactMemo
}as ComponentMeta<typeof ReactMemo>

export const SelectControl:ComponentStory<typeof ReactMemo> = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Kolya', 'Shasha', 'Vasya'])
    const Users = React.memo(User)

    return (
        <ReactMemo>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <NewMessagesCounter count={counter}/>
            <Users user={users}/>
        </ReactMemo>
    )
};
export const ControlSelect1 = SelectControl.bind({});



