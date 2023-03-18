import React, { useState } from 'react'
import './input-field.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface IInputProps{
    placeholder?: string,
    required?: boolean,
    type?: string,
    onChange?: any,
}

const InputField: React.FC<IInputProps> = (props: IInputProps) => {
    const [errorString, setErrorString] = useState('');

    return (
        <div className={"input-container"}>

            <div className="input-border-container">
                <input
                className="input"
                placeholder={props.placeholder}
                type={props.type}
                required={props.required}
                onChange={props.onChange}
                />
            </div>

            {errorString ?
                <div className="input-error-container">
                <FontAwesomeIcon icon={ solid('circle-exclamation') } />
                <span className="input-error-label">{errorString}</span>
            </ div>
            : null }
        </div>
    )
}

InputField.defaultProps = {
    placeholder: '',
    required: false,
    type: 'text'
}

export default InputField