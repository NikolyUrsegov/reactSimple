import {useState} from "react";
import "./App.css";
import {Accordion} from "./components/Accordion/accordion/Accordion";
import {UncontrolledOnOff} from "./components/Accordion/onOff/UncontrolledOnOff";
import Rating from "./components/Accordion/Rating/Rating";
import {UncontrolleRating} from "./components/Accordion/Rating/UncontrolledRating";
import AnalogClock from "./components/Clock/AnalogClock";

export type UserType = {
    id: number,
    name: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<number>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false)


    const users: UserType[] = [
        {id: 1, name: 'Kiryll'},
        {id: 2, name: 'Andry'},
        {id: 3, name: 'Katya'}
    ]

    return (
        <div className="App">

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolleRating/>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       items={[]}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       onClick={(id) => alert(id)}
            />


            {/* <OnOff on={switchOn} onChange={setSwitchOn} /> */}
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            {/* <UncontrolledAccordion titleValue={"Menu"} />  */}


            {/* <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
            <AnalogClock/>
        </div>
    );
}

type PageTitlePropsType = {
    titleValue: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.titleValue}</h1>;
}

export default App;
