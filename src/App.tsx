import React, {useState} from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import Rating from "./components/Rating/Rating";

export type ValuesType = 0 | 1 | 2 | 3 | 4 | 5

function App() {



    const [value, setValue] = useState<ValuesType>(0);





  return (
    <div className="App">

      <OnOff/>
      <Rating setValue={setValue} value={value}/>
      <Accordion/>
    </div>
  );
}

export default App;
