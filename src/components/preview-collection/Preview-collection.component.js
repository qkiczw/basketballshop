import React from 'react';

// Components
import CollectionItem from '../collection-item/Collection-item.component';

// Styled Components
import {
    CollectionPreviewContainer,
    CollectionTitle,
    PreviewItems
} from './preview-collection.styles'

const PreviewCollection = ( {title, items} ) => (
        <CollectionPreviewContainer>
        <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
        <PreviewItems>
            {items.map( (item) => (
                <CollectionItem key={item.id} item={item} className="Item" />
            ) ).filter( (item, idx) => idx < 4)}

        </PreviewItems>
    </CollectionPreviewContainer>
)

export default PreviewCollection;