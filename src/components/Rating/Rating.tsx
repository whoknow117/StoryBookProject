import React, {useState} from 'react';
import classes from './Rating.module.scss';
import Star from "./Star/Star";
import {ValuesType} from "../../App";


export type RatingPropsType = {
    value: ValuesType
    setValue: (value: ValuesType) => void
}

const Rating: React.FC<RatingPropsType> = ({setValue,value}) => {


    return <div className={classes.rating}>

        <Star  setValue={setValue} active={value > 0} value={1}/>
        <Star setValue={setValue} active={value > 1} value={2}/>
        <Star  setValue={setValue} active={value > 2} value={3}/>
        <Star setValue={setValue} active={value > 3} value={4}/>
        <Star  setValue={setValue} active={value > 4} value={5}/>
    </div>
}

export default Rating;