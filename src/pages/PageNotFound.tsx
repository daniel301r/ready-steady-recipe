import React from 'react'
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {

    let location = useLocation();

    return (
        <div>
            Uh oh, the page '{location.pathname}' does not exist!!
        </div>
    )
}

export default PageNotFound
