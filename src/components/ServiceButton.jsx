import React from 'react'
import {data} from "../data.jsx";

export function getCard() {
        return data;
    }

    export function filterCard(categorieItem) {
        return getCard().filter(item => item.categorie === categorieItem);
    }
export default function ServiceButton() {

}