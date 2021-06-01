import styled, {css} from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
    top: -15px;
    font-size: 12px;
    color: ${subColor};
`;

export const FormGroupContainer = styled.div`
    position: relative;
    margin: 50px 0;

    input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 18px;
    background: none;
    border: none;
    border-bottom: 1px solid ${mainColor};
    &:focus {
    outline: none;
    }
    &:focus ~ label {
        ${shrinkLabelStyles}
    }
    
`;

export const FormInputLabel = styled.label`
    position: absolute;
    top: 10px;
    left: 10px;
    text-transform: uppercase;
    pointer-events: none;
    transition: 250ms ease-in-out all;

    &.shrink {
        ${shrinkLabelStyles};
    }
`;
