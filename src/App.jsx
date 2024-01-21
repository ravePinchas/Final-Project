import { Route, Routes } from "react-router";
import StayIndex from "./pages/StayIndex";
import StayDetails from "./pages/StayDetails";
import Header from "./cmp/Generals/Header";
import StayReservation from "./pages/StayReservation";


export function App() {

    return (
        <section className='main-app'>
            <Header />
            <Routes>
                <Route path="/" element={<StayIndex />} />
                <Route path="/stay/:stayId" element={<StayDetails />} />
                <Route path="/stay/:stayId/reservation" element={<StayReservation />} />
            </Routes>
        </section >
    )
}

