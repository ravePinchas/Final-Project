import { Route, Routes } from "react-router";
import StayIndex from "./pages/StayIndex";
import StayDetails from "./pages/StayDetails";
import Header from "./cmp/Generals/Header";
import StayReservation from "./pages/StayReservation";
import Hosting from "./pages/Hosting";


export function App() {

    return (
        <section className='main-app'>
            <Header />
            <Routes>
                <Route path="/" element={<StayIndex />} />
                <Route path="/stay/:stayId" element={<StayDetails />} />
                <Route path="/stay/:stayId/reservation" element={<StayReservation />} />
                <Route path="/hosting" element={<Hosting/>}/>
            </Routes>
        </section >
    )
}

