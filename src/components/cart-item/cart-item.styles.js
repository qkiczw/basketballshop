import styled from 'styled-components';

export const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
    max-width: 35%;
`;

export const CartItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
        font-weight: 700;
    }
`;