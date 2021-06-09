import React from 'react';
import { withRouter } from 'react-router-dom';

// Styled Components
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, bgImgUrl, size, history, match, linkURL}) => (
    <MenuItemContainer  size={size} onClick={() => history.push(`${match.url}${linkURL}`)} >
        <BackgroundImageContainer imageUrl={bgImgUrl} className='background-image'></BackgroundImageContainer>
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer> 
)
export default withRouter(MenuItem);

