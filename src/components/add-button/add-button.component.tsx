import React from 'react'
import {NavLink} from "react-router-dom";
import './add-button.style.css'

interface IButtonProps {
    text?: string
    to: string
}

export default function AddButtonComponent(props: IButtonProps) {

    return (
        <div className="button-container">
            <NavLink to={props.to} className='link active add-item-button'>
                <span className="button-text">{props.text}</span>
            </NavLink>
        </div>
    )
}