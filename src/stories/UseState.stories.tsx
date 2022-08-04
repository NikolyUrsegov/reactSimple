import React, {useState} from 'react';

export default {
    title: 'useState'
}

const generation = () => {
    console.log('generation')
    return 1
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(generation)
    const changer = (state: number) => {
        console.log('changer')
        return state + 1
    }
    return (
        <div>
            <button onClick={() => setCounter(changer)}> +</button>
            {counter}
        </div>
    )
}