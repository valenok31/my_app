import React from "react";
import TopMenu from "./blockСomponents/TopMenu/TopMenu";
import {Route, Routes} from "react-router-dom";
import MainSpaceCont from "./blockСomponents/MainSpace/MainSpaceCont";
import SecondarySpaceCont from "./blockСomponents/SecondarySpace/SecondarySpaceCont";
import ThirdSpaceCont from "./blockСomponents/ThirdSpace/ThirdSpaceCont";
import FourthSpaceCont from "./blockСomponents/FourthSpace/FourthSpaceCont";
import FifthSpaceCont from "./blockСomponents/FifthSpace/FifthSpaceCont";
import SixthSpaceCont from "./blockСomponents/SixthSpace/SixthSpaceCont";
import SeventhSpaceCont from "./blockСomponents/SeventhSpace/SeventhSpaceCont";
import EighthSpaceCont from "./blockСomponents/EighthSpace/EighthSpaceCont";
import Home from "./blockСomponents/Home/Home";
import NinthSpaceCont from "./blockСomponents/NinthSpace/NinthSpaceCont";
import TenthSpaceCont from "./blockСomponents/TenthSpace/TenthSpaceCont";


let App = (props) => {
    return (
        <div>
            <TopMenu/>
            <div>
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/main" element={<MainSpaceCont/>}/>
                    <Route path="/secondary" element={<SecondarySpaceCont/>}/>
                    <Route path="/third" element={<ThirdSpaceCont/>}/>
                    <Route path="/fourth" element={<FourthSpaceCont/>}/>
                    <Route path="/fifth" element={<FifthSpaceCont/>}/>
                    <Route path="/sixth" element={<SixthSpaceCont/>}/>
                    <Route path="/seventh" element={<SeventhSpaceCont/>}/>
                    <Route path="/eighth" element={<EighthSpaceCont/>}/>
                    <Route path="/ninth" element={<NinthSpaceCont/>}/>
                    <Route path="/tenth" element={<TenthSpaceCont/>}/>
                </Routes>
            </div>
        </div>
    )

}

export default App;
