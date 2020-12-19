import React from 'react';
import classes from  './Star.module.scss';
import {ValuesType} from "../../../App";


export type StarPropsType = {
    selected: boolean
    onClick: (value: ValuesType) => void
    value: ValuesType
}

const Star:React.FC<StarPropsType>= ({onClick,value, selected}) => {

    const changeStatusCallback = () => {onClick(value)}

    return <div onClick={changeStatusCallback}  className={`${classes.common} ${selected ? classes.active : ""}`}>Star</div>
}

export default Star;