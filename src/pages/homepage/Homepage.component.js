import React from 'react';
import './homepage.styles.scss';

// Components
import MenuItem from '../../components/menu-item/menu-item.component';


const HomePage = () => (
    <div className='homepage'>
        <div className="directory-menu">
                <MenuItem title={'SHOES'}/>
                <MenuItem title={'SHIRTS'}/>
                <MenuItem title={'BALLS'}/>
                <MenuItem title={'ACCESORIES'}/>
                <MenuItem title={'OTHER'}/>
        </div>
    </div>
)

export default HomePage;