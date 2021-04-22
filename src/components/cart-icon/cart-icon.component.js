import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

// Selectors
import { selectorItemsCount } from '../../redux/cart/cart.selectors';

//Redux Actions
import { toogleCartHidden } from '../../redux/cart/cart.actions'

// Assets
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';


const CartIcon = ({ toogleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-cart-icon' />
        <span className='item-counter'> {itemCount} </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: ()=> dispatch(toogleCartHidden())
})

const mapStateToProps = ( state ) => ({
    itemCount: selectorItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);