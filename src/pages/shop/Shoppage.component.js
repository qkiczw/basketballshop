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
        const {collections} = this.state;
        return (
            <div>
                <h2>Shop Page</h2> 
               {collections.map( ({id, ...restofCollectionProps}) => (
                   <PreviewCollection key={id} {...restofCollectionProps}/>
               ))}
            </div>
        );
    }
}

export default Shop