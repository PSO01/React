import React from "react";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../page/LoginPage";
import SignupPage from "../page/SignupPage";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
};

export default Router;