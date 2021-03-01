import React from 'react';
import './shop.styles.scss';

// Dummy data for preview
import SHOP_DATA from '../../data/shop.data';

// Components
import PreviewCollection from '../../components/preview-collection/Preview-collection.component';


class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        }
    }
    
    render() {
        console.log(this.state.collections)
        return (
            <div>
                <h2>Shop Page</h2>
                <PreviewCollection />
                <PreviewCollection />
                <PreviewCollection />

            </div>
        );
    }
}

export default Shop