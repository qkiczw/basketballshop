import React from 'react';
import './Form-input.styles.scss'

const FormInput = ({ label, handleChange }) => (
    <div>
        <input name={label} onChange={handleChange} />
        
    </div>
)

export default FormInput