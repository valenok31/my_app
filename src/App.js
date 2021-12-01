import React from "react";
import TopMenu from "./blockСomponents/TopMenu/TopMenu";
import {Route, Routes} from "react-router-dom";
import MainSpaceCont from "./blockСomponents/MainSpace/MainSpaceCont";
import SecondarySpaceCont from "./blockСomponents/SecondarySpace/SecondarySpaceCont";


let App = (props) => {
    return (
        <div>
            <TopMenu/>
            <div>
                <Routes>
                    <Route path="/main" element={<MainSpaceCont/>}/>
                    <Route path="/secondary" element={<SecondarySpaceCont/>}/>
                </Routes>
            </div>
        </div>
    )

}

export default App;
