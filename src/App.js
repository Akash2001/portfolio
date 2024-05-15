import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dating } from './pages/dating';
import Home from './pages/dev';
import { Navbar } from './pages/navbar';
import './App.css';
import { Footer } from './pages/footer';

function App() {
    const [y, setY] = useState();
    const [loading, setLoading] = useState(true);

    const handleNavigation = (e) => {
        setY(window.scrollY);
    };

    useEffect(() => {
        setY(window.scrollY);
        setTimeout(() => setLoading(false), 2000);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));

        return () => { // return a cleanup function to unregister our function since it will run multiple times
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
    }, [y]);

    return (
        <BrowserRouter>
            {loading ? (
                <div className='initial-screen w-[100vw] h-[100vh] flex flex-col gap-4 justify-center items-center'>
                    <img className='w-40 h-40' src='/images/me.png' alt="Akash Gadhave" />
                    <div>Hi, I'm Akash Gadhave. Welcome to my Portfolio.</div>
                </div>
            ) : (
                <>
                    <Navbar scrollY={y} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="dating" element={<Dating />} />
                    </Routes>
                    <Footer />
                </>
            )
            }
        </BrowserRouter >
    );
}

export default App;