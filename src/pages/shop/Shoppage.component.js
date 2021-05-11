import React from 'react';
import './shop.styles.scss';

// Router
import { Route } from 'react-router-dom';


// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection/collection.component';


const Shop = ({ match }) => (
    <div className="shop-page">
        {/* <CollectionsOverview /> */}
        {/* { match.path - much flexible than hard coded '/shop' path } */}
        <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
)

export default Shop;