import React from 'react';
import './cart-dropdown.styles.scss';

// Router
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Selectors
import { createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

//Components
import CustomButton from '../custom-button/Custom-button.component';
import CartItem from '../cart-item/Cart-Item.component';


const cartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length 
                ?
                cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
                :
                <span className='empty-cart-message'>Your Cart is empty!</span>
            }
        </div>
        <CustomButton className='custom-button' onClick={ ()=> history.push('/checkout')  }>Checkout</CustomButton>
    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(cartDropdown));