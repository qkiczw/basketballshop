import React from 'react';
import './directory.styles.scss';

//Components
import MenuItem from '../../components/menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super(); 

        this.state = {
            sections: [
                {
                    title: 'shoes',
                    bgImgUrl: 'https://cdn.pixabay.com/photo/2015/10/29/01/24/shoes-1011596_960_720.jpg',
                    id: 1,
                    size: 'normal', 
                },
                {
                    title: 'shirts',
                    bgImgUrl: 'https://cdn.nba.com/manage/2020/10/GettyImages-1182741599-784x523.jpg',
                    id: 2,
                    size: 'normal', 
                },
                {   
                    title: 'balls',
                    bgImgUrl: 'https://image.freepik.com/free-photo/basketball-ball-close-up-dark-black-background-basketball-concept_93675-80969.jpg',
                    id: 3,
                    size: 'normal', 
                },
                {
                    title: 'accessories',
                    bgImgUrl: 'https://dsgmedia.blob.core.windows.net/pub/2017/09/WhatToLookForBasketballBag1.jpg',
                    id: 4,
                    size: 'large',
                },
                {
                    title: 'other',
                    bgImgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51WHg-kV1PL._AC_SY1000_.jpg',
                    id: 5,
                    size: 'large', 
                }
            ]
        }
    }

    render() {
        return (      
            <div className="directory-menu">
                {this.state.sections.map( 
                    ({ id, title, bgImgUrl, size }) => 
                        <MenuItem 
                            key={id} 
                            title={title} 
                            bgImgUrl={bgImgUrl} 
                            size={size}

                        />
                )}
            </div>
        );
    }
}

export default Directory;