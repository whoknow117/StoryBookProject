import React, {useState} from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import Rating from "./components/Rating/Rating";
import Select from "./components/Select/Select";

export type ValuesType = 0 | 1 | 2 | 3 | 4 | 5
export type ItemType = {
    name: string
}

export type ActionType = {
    type: string
}
export type MenuType = {
    [key:string] : Array<ItemType>
}


const someMenues:MenuType = {
    menu1: [
        {name: "CellPhones"},
        {name: "Adresses"},
        {name: "Emails"},
    ],
    menu2: [
        {name: "Something"},
        {name: "Something"},
        {name: "Something"},
    ]
}
console.log(someMenues.menu1)

function App() {



    const [value, setValue] = useState<ValuesType>(0);


    const accordion1 = someMenues.menu1;
    const accordion2 = someMenues.menu2;

    // const reducer = (state: boolean, action:ActionType) => {
    //     if(action.type === )
    // }

  return (
    <div className="App">

      <OnOff/>
      <Rating onClick={setValue} value={value}/>
      <Accordion title={'Contacts'} menu={accordion1} />
      <Accordion title={'Adress'} menu={accordion2}/>
      <Select/>
    </div>
  );
}

export default App;
