import React from 'react';

// Components
import CollectionItem from '../../components/collection-item/Collection-item.component';

// Styled Components
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItems
} from './collection.styles'

// Redux
import { connect } from 'react-redux'

//Selectors
import { sellectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    const {title,  items} = collection;

    return( 
        <CollectionPageContainer>
        <CollectionTitle> {title} </CollectionTitle>
        <CollectionItems>
            { items.map( item => <CollectionItem key={item.id} item={item} />)}
        </CollectionItems>
    </CollectionPageContainer>
)};



const mapStateToProps = (state, ownProps) => ({
    collection: sellectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);