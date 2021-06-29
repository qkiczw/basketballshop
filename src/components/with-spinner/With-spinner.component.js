import React from 'react';

// Styled components
import {
    SpinnerOverlay,
    SpinnerContainer
} from './with-spinner.styles.js'

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? 
    (<SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
    ) :
    (<WrappedComponent {...otherProps} />)
}

export default WithSpinner;