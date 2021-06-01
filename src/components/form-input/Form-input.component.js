import React from 'react';

// Styled Components
import {
    FormGroupContainer,
    FormInputContainer,
    FormInputLabel
} from './form-input.styles'

const FormInput = ({ label, handleChange, ...otherProps }) => (
    <FormGroupContainer>
        <FormInputContainer name={label} onChange={handleChange} {...otherProps} />
        {
            label ? <FormInputLabel className={`${otherProps.value.length ? 'shrink' : null }  form-label`}>{label}</FormInputLabel> : null
        }
    </FormGroupContainer>
)

export default FormInput