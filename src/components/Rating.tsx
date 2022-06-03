import React from "react";

function Rating(props: any) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={true}/>
        </div>
    )
}

function Star(props: any) {
    return (
        props.selected === true ?
            <span> <b>star</b> </span> :
            <span>star </span>)
}

export default Rating;