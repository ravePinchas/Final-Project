import { Route, Routes } from "react-router";
import Home from "./pages/StayIndex";
import HomeHeader from "./cmp/StayIndex/SearchStayBar";
import StayIndex from "./pages/StayIndex";
import StayDetails from "./pages/StayDetails";

export function App() {

    return (
        <section className='main-app'>
            <HomeHeader />
            <Routes>
                <Route path="/" element={<StayIndex />} />
                <Route path="/stay/:stayId" element={<StayDetails />} />
            </Routes>
        </section >
    )
}

