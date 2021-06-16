import React from 'react';

// Router
import { Route } from 'react-router-dom';


// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection/collection.component';

// Styled Components
import { ShopPageContainer } from './shoppage.styles';

// Firebase utils
import { firestore, convertColelctionSnapshotToMap } from '../../firebase/firebase.utilities';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot( async snapshot => {
            convertColelctionSnapshotToMap(snapshot);
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

export default ShopPage;