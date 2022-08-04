import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect'
}


export const useEffectExample1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    useEffect(() => {
        console.log('every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('first render')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('first render and counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}> + counter</button>
            <button onClick={() => setFake(fake + 1)}> + fake</button>
            {counter}
            {fake}
        </div>
    )
}