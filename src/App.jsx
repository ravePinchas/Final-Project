import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import HomeHeader from "./cmp/homeHeader";

export function App() {

    return (
        <section className='main-app'>
            <HomeHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
            </Routes>
        </section>
    )
}

