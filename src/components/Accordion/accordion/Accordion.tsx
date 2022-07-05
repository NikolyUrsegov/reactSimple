import { UserType } from "../../../App";

export type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void
  items: UserType[]
  onClick: (id: any) => void
};

export function Accordion(props: AccordionPropsType) {
  return <>
    <AccordionTitle title={props.titleValue} onChange={props.onChange}  />
    {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
  </>
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void
};

type AccordionBodyPropsType = {
  items: UserType[]
  onClick: (id: any) => void
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3
    onClick={(e) =>props.onChange()}>{props.title}</h3>;
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((el,index) => <li key={index} onClick={() => props.onClick(el.id)}>{el.name}</li>)}
    </ul>
  );
}

