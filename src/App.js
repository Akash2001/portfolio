import { useState, useEffect } from 'react';
import Home from './components/home';
import { Navbar } from './components/navbar';
import './App.css';

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
        <>
            <Navbar scrollY={y} />
            <Home />
        </>
    );
}

export default App;