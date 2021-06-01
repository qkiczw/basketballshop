import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    
    img {
        width: 100%;
          height: 100%;
        }
`;

export const TextContainer = styled.span`
    width: 23%;
`;


// I can wrtie new component expanding created one
export const QuantityContainer = styled(TextContainer)`
    display: flex;
    justify-content: flex-start;
    div {
        cursor: pointer;
    }
    span{
        margin: 0 10px;
    }
`;

export const RemoveButtonContainer = styled.div`
    width: 8%;
    cursor: pointer;
`;