import React from 'react';
import './shop.styles.scss';

// Redux
import { connect } from 'react-redux';


// Selectrors
import { selectCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

// Dummy data for preview
// import SHOP_DATA from '../../data/shop.data';

// Components
import PreviewCollection from '../../components/preview-collection/Preview-collection.component';


const Shop = ({ collections }) => (
    <div className="shop-page">
    {console.log('col: ', collections)}
        <h1>Our Collection</h1>
        {collections.map( ({id, ...restofCollectionProps}) => (
            <PreviewCollection key={id} {...restofCollectionProps}/>
        ))}
    </div>
)

const mapSateTopProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapSateTopProps)(Shop);