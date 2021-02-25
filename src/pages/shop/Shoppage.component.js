import React from 'react';
import './shop.styles.scss';

// Components
import PreviewCollection from '../../components/preview-collection/Preview-collection.component';


class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: 'dummy data from array for now'
        }
    }

    render() {
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