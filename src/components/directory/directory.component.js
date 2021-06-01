import React from 'react';

//Components
import MenuItem from '../../components/menu-item/menu-item.component';

// Styled Components
import { DirectoryMenuContainer } from './directory.styles.js'

// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect'

// Redux
import { connect } from 'react-redux'

const Directory = ( {sections} ) => {
    return (      
        <DirectoryMenuContainer>
            {sections.map( 
                ({ id, ...otherSectionProps }) => 
                    <MenuItem key={id} {...otherSectionProps}/>
            )}
        </DirectoryMenuContainer>
    );
}

const mapSateTopProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapSateTopProps)(Directory);