import React from 'react';
import './preview-collection.styles.scss';


const PreviewCollection = ( {title, collection} ) => (
    
    <div className="collection-preview-container">
        <h1 className="collection-title">{title.toUpperCase()}</h1>
        <div className="perview-items">
            {collection.map( item => (
                <div key={item.id} className="Item">{item.name}</div>
            ) ).filter( (item, idx) => idx < 4)}

        </div>
    </div>
)

export default PreviewCollection;