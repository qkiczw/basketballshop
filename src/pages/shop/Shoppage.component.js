import React from 'react';

// Router
import { Route } from 'react-router-dom';


// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection/collection.component';

// Styled Components
import { ShopPageContainer } from './shoppage.styles';

// Redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

// Firebase utils
import { firestore, convertColelctionSnapshotToMap } from '../../firebase/firebase.utilities';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {

        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertColelctionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        })
    }

    render() {
        
        const { match } = this.props;
        
        return (
        <ShopPageContainer>
            {/* <CollectionsOverview /> */}
            {/* { match.path - much flexible than hard coded '/shop' path } */}
            <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </ShopPageContainer>
        )

    }
    
}

const mapDispatchToProps = dispatch =>( {
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);