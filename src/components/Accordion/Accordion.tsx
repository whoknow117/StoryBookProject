import React, {useState} from 'react';
import classes from  './Accordion.module.scss';
import {ItemType} from "../../App";


export type AccordionPropsType = {
    menu: Array<ItemType>
    title: string
}

const Accordion:React.FC<AccordionPropsType>= ({title,menu}) => {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const collapseCallback = () => {setCollapsed(!collapsed)}


    return <div className={classes.wrapper}>
        <h3 className={classes.title} onClick={collapseCallback} >{title}</h3>
        <ul className={collapsed ? classes.menu : classes.common}>
            {menu.map( (i, idx) => {
                return <li key={idx}>{i.name}</li>
            } )}
        </ul>
    </div>
}

export default Accordion;