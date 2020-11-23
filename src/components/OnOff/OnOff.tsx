import React, {useState} from 'react';
import classes from  './OnOff.module.scss';


export type OnOffPropsType = {}

const OnOff:React.FC<OnOffPropsType>= () => {




    return <div className={classes.toggle}>
            <button  ></button>
            <button></button>
    </div>
}

export default OnOff;