import {Accordion} from "./Accordion";
import {action} from '@storybook/addon-actions'
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

const callBack = action('clicked')
const onClickCallback = (id: any) => alert(id)

export const AccordionCollapsed = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callBack}
                                                   items={[]} onClick={() => {
}}/>
export const AccordionUnCollapsed = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callBack}
                                                     items={[{id: 1, name: 'Kiryll'},
                                                             {id: 2, name: 'Andry'},
                                                             {id: 3, name: 'Katya'}]}
                                                     onClick={onClickCallback}/>
export const AccordionChange = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}
                      items={[{id: 1, name: 'Kiryll'},
                          {id: 2, name: 'Andry'}, {id: 3, name: 'Katya'}]} onClick={onClickCallback}/>
}
