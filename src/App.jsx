import { FaRegHeart } from "react-icons/fa";
import { HiUsers, HiBookOpen } from "react-icons/hi";
import gambarLatar from './assets/bg-login.png';
import { useState } from "react";
import Button from "./components/Button";
import LandingItem from "./components/LandingItem";
import MiniHeader from "./components/MiniHeader";
// import { FiTarget, FiTrendingUp } from "react-icons/fi";
// import TentangSection from "./sections/secondsections/TentangSection";

import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Halaman Home yang baru kita buat
import RuangVolunteer from './pages/RuangVolunteer';
import RuangVolunteerPM from "./pages/RuangVolunteerPM";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/volunteer-home" element={<RuangVolunteer />} />
                <Route path="/volunteer-home-panduan-mengajar" element={<RuangVolunteerPM />} />
            </Routes>
        </div>
    )
}

export default App