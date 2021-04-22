import React from 'react';
import './cart-dropdown.styles.scss';

// Redux
import { connect } from 'react-redux';

// Selectors
import { createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

//Components
import CustomButton from '../custom-button/Custom-button.component';
import CartItem from '../cart-item/Cart-Item.component';


const cartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/> )}
        </div>
        <CustomButton className='custom-button'>Checkout</CustomButton>
    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default connect(mapStateToProps)(cartDropdown);