import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewDish } from "../pages/NewDish";
import { ViewDish } from "../pages/ViewDish";

export function AppRoutes(){
    
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish" element={<NewDish />} />
            <Route path="/dish/:id" element={<ViewDish />} />
        </Routes>
    );
}