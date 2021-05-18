import React from 'react';
import './collectionsOverview.styles.scss';

// Redux
import { connect } from 'react-redux';

// Selector
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// Components
import PreviewCollection from '../../components/preview-collection/Preview-collection.component';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        <h1>Our Collection</h1>
        {collections.map( ({id, ...restofCollectionProps}) => (
            <PreviewCollection key={id} {...restofCollectionProps}/>
        ))}
    </div>
)

const mapSateTopProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapSateTopProps)(CollectionsOverview);