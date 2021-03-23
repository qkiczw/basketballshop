import React from 'react';
import { Redirect } from 'react-router-dom';
import './Collection-item.styles.scss';

// Components
import CustomButton from '../custom-button/Custom-button.component';

const CollectionItem = ({name, price, imgURL}) => (
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
        <CustomButton inverted >Add to Cart</CustomButton>
    </div>
)

export default CollectionItem;