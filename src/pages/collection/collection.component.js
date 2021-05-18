import React from 'react';
import './collection.styles.scss';

// Components
import CollectionItem from '../../components/collection-item/Collection-item.component';

// Redux
import { connect } from 'react-redux'

//Selectors
import { sellectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    const {title,  items} = collection;

    return( 
    <div className='collection'>
        <h2 className='collection-title'> {title} </h2>
        <div className='collection-items'>
            { items.map( item => <CollectionItem key={item.id} item={item} />)}
        </div>
    </div>
)};



const mapStateToProps = (state, ownProps) => ({
    collection: sellectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);