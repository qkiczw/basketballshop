import React from 'react';
import './preview-collection.styles.scss';

// Components
import CollectionItem from '../collection-item/Collection-item.component';

const PreviewCollection = ( {title, collection} ) => (
    
    <div className="collection-preview-container">
        <h1 className="collection-title">{title.toUpperCase()}</h1>
        <div className="preview-items">
            {collection.map( ({id, ...restOfItemProps}) => (
                <CollectionItem key={id} {...restOfItemProps} className="Item" />
            ) ).filter( (item, idx) => idx < 4)}

        </div>
    </div>
)

export default PreviewCollection;