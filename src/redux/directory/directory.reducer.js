import cartReducer from "../cart/cart.reducer";

const INITIAL_STATE = {
    sections: [
        {
            title: 'shoes',
            bgImgUrl: 'https://cdn.pixabay.com/photo/2015/10/29/01/24/shoes-1011596_960_720.jpg',
            id: 1,
            size: 'normal', 
            linkURL: 'shoes'
        },
        {
            title: 'shirts',
            bgImgUrl: 'https://cdn.nba.com/manage/2020/10/GettyImages-1182741599-784x523.jpg',
            id: 2,
            size: 'normal', 
            linkURL: 'shirts'
        },
        {   
            title: 'balls',
            bgImgUrl: 'https://image.freepik.com/free-photo/basketball-ball-close-up-dark-black-background-basketball-concept_93675-80969.jpg',
            id: 3,
            size: 'normal', 
            linkURL: 'balls'
        },
        {
            title: 'accessories',
            bgImgUrl: 'https://dsgmedia.blob.core.windows.net/pub/2017/09/WhatToLookForBasketballBag1.jpg',
            id: 4,
            size: 'large',
            linkURL: 'accessories'
        },
        {
            title: 'other',
            bgImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51WHg-kV1PL._AC_SY1000_.jpg',
            id: 5,
            size: 'large', 
            linkURL: 'other'
        }
    ]
};


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;