import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

//Redux Actions
import { toogleCartHidden } from '../../redux/cart/cart.actions'

// Assets
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';


const CartIcon = ({ toogleCartHidden }) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-cart-icon' />
        <span className='item-counter'> 0 </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: ()=> dispatch(toogleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);