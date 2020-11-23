import React from 'react';
import classes from  './Star.module.scss';
import {ValuesType} from "../../../App";


export type StarPropsType = {
    active: boolean
    setValue: (value: ValuesType) => void
    value: ValuesType
}

const Star:React.FC<StarPropsType>= ({setValue,value, active}) => {

    const changeStatusCallback = () => {setValue(value)}

    return <div onClick={changeStatusCallback}  className={`${classes.common} ${active ? classes.active : ""}`}>Star</div>
}

export default Star;