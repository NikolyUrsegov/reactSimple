import React, {useState} from 'react';

type ItemType = {
    value: any, title: string
}

type SelectPropsType = {
    value: any
    item: ItemType[]
    onChange: (value: any) => void
}

const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    let titleItem = props.item.filter(el => el.value === props.value)

    const classDiv = {
        padding: "3px",
        width: "50px",
        fontSize: "12px",
        border: "1px solid black",
        background: "white"
    }

    return (
        <div>
            <div onClick={() => setCollapsed(!collapsed)} style={classDiv}>{titleItem[0].title}</div>
            {collapsed
                ? props.item.map(el => {
                    const onClickHandler = () => {
                        props.onChange(el.value)
                        setCollapsed(!collapsed)
                    }
                    return <div onClick={onClickHandler} style={classDiv}>{el.title}</div>
                })
                : undefined}

        </div>
    );
};

export default Select;