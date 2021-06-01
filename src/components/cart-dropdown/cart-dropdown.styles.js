import styled from 'styled-components';

// Comoponents
import CustomButton from '../custom-button/Custom-button.component'


export const CartDropdownContainer = styled.div`
     position: absolute;
    top: 120px;
    right: 100px;
    width: 250px;
    min-height: 350px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 10;
    background-color: white;
`;

export const CartItemsContainer = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 10px 25px;
    height: 220px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin: auto;
`;

export const EmptyCartMessageContainer = styled.span`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;