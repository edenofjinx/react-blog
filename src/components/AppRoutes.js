import {Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import NoMatch from "./NoMatch";

function AppRoutes(props) {
    return (
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/about" element={<Homepage />} />
                <Route path="*" element={<NoMatch />}>
                </Route>
            </Routes>
    )
}

export default AppRoutes;