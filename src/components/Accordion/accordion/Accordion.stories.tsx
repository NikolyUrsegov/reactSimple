import { Accordion } from "./Accordion";
import { action } from '@storybook/addon-actions'
import { useState } from "react";

export default {
  title: 'Accordion',
  component: Accordion
}

const callBack = action('clicked')

export const AccordionCollapsed = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callBack} />
export const AccordionUnCollapsed = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callBack} />
export const AccordionChange = () => {
  const [value, setValue] = useState<boolean>(false)
  return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
}
