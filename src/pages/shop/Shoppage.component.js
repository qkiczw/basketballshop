import React from 'react';
import './shop.styles.scss';

// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';

// // Redux
// import { connect } from 'react-redux';


// // Selectrors
// import { selectCollections } from '../../redux/shop/shop.selectors';
// import { createStructuredSelector } from 'reselect';


// // Components
// import PreviewCollection from '../../components/preview-collection/Preview-collection.component';


// const Shop = ({ collections }) => (
//     <div className="shop-page">
//         <h1>Our Collection</h1>
//         {collections.map( ({id, ...restofCollectionProps}) => (
//             <PreviewCollection key={id} {...restofCollectionProps}/>
//         ))}
//     </div>
// )

const Shop = () => (
    <div className="shop-page">
        <CollectionsOverview />
    </div>
)

// const mapSateTopProps = createStructuredSelector({
//     collections: selectCollections
// })

export default Shop;