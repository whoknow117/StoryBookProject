import React from 'react';
import classes from  './Accordion.module.scss';


export type AccordionPropsType = {}

const Accordion:React.FC<AccordionPropsType>= () => {

    return <ul className={classes.accordion}>
        <li>item</li>
        <li>item</li>
        <li>item</li>
    </ul>
}

export default Accordion;