import styled from 'styled-components';

// Assets
import {ReactComponent as ShoppingIconSVG} from '../../assets/shopping-cart.svg'

export const CartIconContainer = styled.div`
    position: relative;
    width: 40px;
    cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
    width: 24px;
    height: 24px;
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    left: 10px;
    top: -10px;
    border: 1px solid crimson;
    padding: 1px 5px;
    border-radius: 50%;
    background-color: crimson;
    color: #fff;
`;
