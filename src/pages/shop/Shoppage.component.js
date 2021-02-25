import React from 'react';
import './shop.styles.scss';


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
            </div>
        );
    }
}

export default Shop