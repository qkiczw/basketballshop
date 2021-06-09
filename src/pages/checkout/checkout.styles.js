import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    max-width: 55%;
    margin: 0 auto;
`;

export const CheckoutHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid darkgray;
`;

export const HeaderBlock = styled.div`
    width: 23%;
    text-transform: capitalize;
    &:last-child {
        width: 8%;
    }
`;

export const CheckoutTotal = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: flex-end;
    border-top: 1px solid darkgray;
    font-size: 2rem;
`;

export const TextWarnigContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
    span {
       font-weight: bold;
    }
`;

export const ButtonContainer = styled.div`
    float: right;
    margin: 50px 0;
`;