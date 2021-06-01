import styled from 'styled-components';

// Components
import CustomButton from '../custom-button/Custom-button.component';


export const CollectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 22vw;
    height: 350px;
    border: 1px solid gray;
    overflow: hidden;

    &:hover {
        .image {
        opacity: 0.8;
        }
        button {
        opacity: 0.85;
        display: flex;
        }
    }

`;

export const BackgroundImage = styled.div`
    z-index: 0;
    width: 100%;
    height: 80%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${ ({ imageURL })=> `url(${imageURL})` };
    overflow: hidden;
    transition-duration: .5s;
    &:hover {
        transform: scale(1.1);
    }
`;

export const AddButton = styled(CustomButton)`
    display: none;
    position: absolute; 
    bottom: 100px;
    opacity: .7;
`;

export const NameContainer = styled.span`
    font-weight: bold;
    text-align: center;
`;

export const PriceContainer = styled.span`
    color: crimson;
    font-weight: bold;
`;

export const CollectionFooterContainer = styled.div`
    z-index: 1;
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 18px; 
    background-color: rgb(221, 219, 219);
    border-top: 2px solid gray;
`;