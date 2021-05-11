import React from 'react';
import './collection.styles.scss';

// Components
import CollectionItem from '../../components/collection-item/Collection-item.component';

// match is added to props because is in the route in a shoppage component
const CollectionPage = ({ match }) => ( 
    <div className='collection'>
        <h2 className='collection-title'>{match.params.collectionId} collection</h2>
    </div>
);

export default CollectionPage;