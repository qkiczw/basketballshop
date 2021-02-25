import React from "react";


const Dummy = ( props ) => (
    <div>
        {console.log(console.log('url: ',props.match.url))}
        <h1>Dummy component for Router Test</h1>
        <p>This is te subpage with id of: {props.match.params.dummyID}</p>
    </div>
)


export default Dummy;