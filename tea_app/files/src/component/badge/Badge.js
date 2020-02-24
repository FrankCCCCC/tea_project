import React from 'react'
import Color from '../theme/color'

/**
 * 
 * @param {string} color - The background color of the badge
 * @param {string} text - The text of the badge
 */
export const Badge = (props) => {
    return (
        <span class="badge" style={{backgroundColor: props.color}}>{props.text}</span>
    )
}

/**
 * 
 * @param {string} color - The background color of the pill badge
 * @param {string} text - The text of the pill badge
 */
export const PillBadge = (props) => {
    return (
        <span class="badge badge-pill" style={{backgroundColor: props.color}}>{props.text}</span>
    )
}