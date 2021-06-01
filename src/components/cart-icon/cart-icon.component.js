import React from 'react';
import { connect } from 'react-redux';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectorItemsCount } from '../../redux/cart/cart.selectors';

//Redux Actions
import { toogleCartHidden } from '../../redux/cart/cart.actions'

// Styled Components
import {
    CartIconContainer,
    ItemCountContainer,
    ShoppingIcon,
} from './cart-icon.styles';


const CartIcon = ({ toogleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toogleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: ()=> dispatch(toogleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectorItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);