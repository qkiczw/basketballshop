import React from 'react';
import './collection.styles.scss';

// Components
import CollectionItem from '../../components/collection-item/Collection-item.component';

// Redux
import { connect } from 'react-redux'

//Selectors
import { sellectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection: {collection} }) => ( 
    <div className='collection'>
        <h2 className='collection-title'> Our collection</h2>
        <div className='collection-items'>
            {collection.map( item => <CollectionItem item={item} />)}
        </div>
    </div>
);



const mapStateToProps = (state, ownProps) => ({
    collection: sellectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);