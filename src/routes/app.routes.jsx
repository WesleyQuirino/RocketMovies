import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Profile } from '../pages/Profile';
import { CreateMovie } from '../pages/CreateMovie';
import { MoviePreview } from '../pages/MoviePreview';

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={ < Home />} />
            <Route path="/signIn" element={ < SignIn />} />
            <Route path="/register" element={ < SignUp />} />
            <Route path="/user" element={ < Profile />} />
            <Route path="/createMovie" element={ < CreateMovie />} />
            <Route path="/moviePreview/:id" element={ < MoviePreview />} />
        </Routes>
    )
}