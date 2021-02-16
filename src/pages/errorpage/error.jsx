import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const NoMatch = () => {

    let location = useLocation();
  
    return (
      <div>
        <h3>
          404 Page not found, Click <Link to="/"> Here </Link> to go back.
        </h3>
      </div>
    );
  }

export default NoMatch