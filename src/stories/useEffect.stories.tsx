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

export const Example2 = () => {
    console.log('Example2')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimout')
    //         document.title = counter.toString()
    //     }, 1000)
    //
    // }, [counter])

    useEffect(() => {
        setInterval(() => {
            console.log('setInterval')
            setCounter(state => state + 1)
        }, 1000)

    }, [])


    return (
        <div>
            {/*<button onClick={() => setCounter(counter + 1)}> + counter</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}> + fake</button>*/}
            Counter : {counter} - Fake : {fake}
        </div>
    )
}