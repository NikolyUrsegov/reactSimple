import React from "react";
type RatingPropsType = {
    value: number
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0 }/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
            <Star selected={props.value > 5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return (
        props.selected === true ?
            <span> <b>star</b> </span> :
            <span>star </span>)
}

export default Rating;