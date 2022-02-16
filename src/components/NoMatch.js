import React, {useState, Fragment} from "react";

function NoMatch(props) {
    return (
        <div className="container">
            <div className="error-box">
                <h2 className="text-2xl text-red-600">
                    Such page was not found
                </h2>
            </div>
        </div>
    );
}

export default NoMatch;