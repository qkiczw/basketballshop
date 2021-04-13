import React from 'react';
import { Redirect } from 'react-router-dom';
import './Collection-item.styles.scss';

// redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

// Components
import CustomButton from '../custom-button/Custom-button.component';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imgURL } = item; 
    return (
    <div className="collection-item">
        <div 
            className="item-image"
            style={{ 
                backgroundImage: `url(${imgURL})`,
                }}
        ></div>
        <div className="item-footer">
            <span className="item-name">{name}</span>
            <span className="item-price">Price: {price} $</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted >Add to Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null , mapDispatchToProps)(CollectionItem);