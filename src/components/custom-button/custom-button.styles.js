import styled, {css} from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        color: black;
        background-color: white;
        border: 1px solid black;
    }
`;

const googleSignInStyles = css`
    background-color: #1565c0;
    border: none;
    &:hover {
        background-color: #0d47a1;
        color: white;
    }    
`
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

const getButtonStyles = (props) => {
    console.log(`props:`, props);
    if (props.isGoogleSignIn) {
        return googleSignInStyles
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    height: 50px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 1px;
    padding: 0 35px;
    cursor: pointer;
    transition-duration: 200ms;

    ${getButtonStyles}
`;