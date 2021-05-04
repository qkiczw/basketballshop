import React from 'react';
import './directory.styles.scss';

//Components
import MenuItem from '../../components/menu-item/menu-item.component';

// Redux
import { connect } from 'react-redux'

const Directory = ({ directory : { sections } }) => {
    return (      
        <div className="directory-menu">
            {sections.map( 
                ({ id, ...otherSectionProps }) => 
                    <MenuItem key={id} {...otherSectionProps}/>
            )}
        </div>
    );
}

const mapSateTopProps = ( state ) => ({
    directory: state.directory
})


export default connect(mapSateTopProps)(Directory);