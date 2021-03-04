import React from 'react';
import './Form-input.styles.scss'

const FormInput = ({ label, handleChange, ...otherProps }) => (
    <div>
        <input name={label} onChange={handleChange} {...otherProps} />
        {
            label ? <label className={`${otherProps.value.length ? 'shrink' : null }  form-label`}>{label}</label> : null
        }
    </div>
)

export default FormInput