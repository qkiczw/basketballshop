import React from 'react';

// Router
import { Route } from 'react-router-dom';


// Components
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection/collection.component';

// Higher Order Components
import WithSpinner from '../../components/with-spinner/With-spinner.component';


// Styled Components
import { ShopPageContainer } from './shoppage.styles';

// Redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

// Firebase utils
import { firestore, convertColelctionSnapshotToMap } from '../../firebase/firebase.utilities';
import { CollectionsOverviewContainer } from '../../components/collections-overview/collection-overview.styles';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {

        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertColelctionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        })
    }

    render() {
        const { loading } = this.state;
        const { match } = this.props;
        
        return (
        <ShopPageContainer>
            {/* <CollectionsOverview /> */}
            {/* { match.path - much flexible than hard coded '/shop' path } */}
            <Route exact path={`${match.path}`} render={ (props) => <CollectionsOverviewWithSpinner  isLoading={loading} {...props}/> }/> 
            <Route path={`${match.path}/:collectionId`} render={ (props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />}/>
        </ShopPageContainer>
        )

    }
    
}

const mapDispatchToProps = dispatch =>( {
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);