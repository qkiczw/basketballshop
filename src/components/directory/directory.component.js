import React from 'react';
import './directory.styles.scss';

//Components
import MenuItem from '../../components/menu-item/menu-item.component';

// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect'

// Redux
import { connect } from 'react-redux'

const Directory = ( {sections} ) => {
    return (      
        <div className="directory-menu">
            {sections.map( 
                ({ id, ...otherSectionProps }) => 
                    <MenuItem key={id} {...otherSectionProps}/>
            )}
        </div>
    );
}

const mapSateTopProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapSateTopProps)(Directory);