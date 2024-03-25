import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dating } from './components/dating';
import Home from './components/dev';
import { Navbar } from './components/navbar';
import './App.css';
import { Footer } from './components/footer';

function App() {
    const [y, setY] = useState();

    const handleNavigation = (e) => {
        setY(window.scrollY);
    };

    useEffect(() => {
        setY(window.scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));

        return () => { // return a cleanup function to unregister our function since it will run multiple times
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
    }, [y]);

    return (
        <BrowserRouter>
            <Navbar scrollY={y} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="dating" element={<Dating />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;