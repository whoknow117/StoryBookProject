import React, {useState} from 'react';
import classes from './OnOff.module.scss';


export type OnOffPropsType = {}

const OnOff: React.FC<OnOffPropsType> = () => {

    const [on, setOn] = useState<boolean>(false);

    const toggleOn = () => {
        setOn(true)
    }
    const toggleOff = () => {
        setOn(false)
    }

    return <div className={classes.toggle}>
        <button onClick={toggleOn} className={on ? classes.green : ""}>on</button>
        <button onClick={toggleOff} className={!on ? classes.red : ""}>off</button>
    </div>
}

export default OnOff;