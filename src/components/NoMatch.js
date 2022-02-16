import React, {useState, Fragment} from "react";
import {Link} from "react-router-dom";
import notFoundImage from "../images/404_nomatch.jpg";
import NoMatchSass from "../styles/components/NoMatch.scss"

function NoMatch(props) {
    return (
        <div className="md:w-1/2 mx-auto text-center">
            <div className="error-box">
                <img src={notFoundImage}
                     alt="error 404 - page not found"
                     title="error 404 - page not found"
                     className="mx-auto"
                />
                <div className="contribute ">
                    <Link to="http://www.freepik.com" className="text-gray-500 text-xs hover:text-purple-300">
                        Designed by pikisuperstar / Freepik
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NoMatch;