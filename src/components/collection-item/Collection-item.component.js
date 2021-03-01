import React from 'react';
import { Redirect } from 'react-router-dom';
import './Collection-item.styles.scss';


const CollectionItem = ({name, price, imgURL}) => (
    <div className="collection-item">
        <div 
            className="item-image"
            style={{
                backgroundImage: `url(${imgURL})`,
                }}
        ></div>
        <div className="item-footer">
            <span>{name}</span>
            <span>{price}</span>
        </div>

    </div>
)

export default CollectionItem;