import React from "react";
import "./Button.css";
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']
export const Button = ({
    children, type, onCLick, buttonStyle, buttonSize
}) => {
    const checkbuttonStyle = STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0]
    const checkbuttonSize =  SIZES.includes(buttonSize) ? buttonStyle:SIZES[0]
    return (
        <Link to = "/" className = "btn-mobile">
            <button className = {`btn ${checkbuttonStyle} ${checkbuttonSize}`} 
                    onCLick = {onCLick}
                    type = {type}
            > 
                {children} 
            </button>
        </Link>
    )
}