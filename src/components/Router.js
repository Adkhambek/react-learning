import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePicker from "./StorePicker";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<StorePicker />}>
                <StorePicker />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
