import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { CreateMovie } from '../pages/CreateMovie';
import { MoviePreview } from '../pages/MoviePreview';

export function AppRoutes(){
    
    return (
        <Routes>
            <Route path="/" element={ < Home />} />
            <Route path="/profile" element={ < Profile />} />
            <Route path="/createMovie" element={ < CreateMovie />} />
            <Route path="/moviePreview/:id" element={ < MoviePreview />} />
            
            <Route path="*" element={ <Navigate to="/"/> }/>
        </Routes>
    )
}