import React from 'react';
import { Redirect } from 'react-router-dom';
// import './Collection-item.styles.scss';

// redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

// Components
import CustomButton from '../custom-button/Custom-button.component';

// Styled Components
import {
    CollectionItemContainer,
    AddButton,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    BackgroundImage
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imgURL } = item; 
    return (
    <CollectionItemContainer>
        <BackgroundImage  imageURL={imgURL}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>Price: {price} $</PriceContainer>
        </CollectionFooterContainer>
        <AddButton inverted onClick={()=> addItem(item)} >Add to Cart</AddButton>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null , mapDispatchToProps)(CollectionItem);