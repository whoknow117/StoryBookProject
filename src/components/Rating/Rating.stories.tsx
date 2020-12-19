import React, {useState} from 'react';
import { action } from "@storybook/addon-actions";
import Rating from "./Rating";
import {ValuesType} from "../../App";


export default {
    title: 'Rating stories',
    component: Rating
}

export const EmptyStars = () => <Rating value={0} onClick={x=>x}/>
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<ValuesType>(5);
    return <Rating value={rating} onClick={setRating}/>
}