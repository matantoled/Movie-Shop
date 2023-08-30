import React from 'react';
import {Link, useLocation} from "react-router-dom";

function ErrorPage() {
    const location = useLocation();
    const errorCode = location.state?.errorCode || 404;

    return (
        <div className="text-center my-5">
            <h1 className="text-danger">Error code: {errorCode}</h1><br></br>
            <h4 className="text-danger"><dl><dt>
                Oops! Something went wrong. Please try again later.
            </dt></dl></h4><br></br>
            <h5><Link to="/">Go to Home Page</Link></h5>
        </div>
    );
}

export default ErrorPage;
