import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats:  100,
    shoes: 200,
    balls: 300,
    accessories: 400,
    other: 500
}


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.sections
)

export const sellectCollection = collectionUrlParam => createSelector (
    [selectCollections],
    collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)