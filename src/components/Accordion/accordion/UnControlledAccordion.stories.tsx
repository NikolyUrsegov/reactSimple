import React  from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Un Controlled Accordion',
    component: UncontrolledAccordion
}

export const UnControlledAccordion = () => {
    return <UncontrolledAccordion titleValue={'Menu'}/>
}