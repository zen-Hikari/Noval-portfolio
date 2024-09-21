import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);

            // Menghapus kelas active jika user scroll
            if (isActive) {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActive]);

    

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <h1>NOVAL</h1>
                    </div>

                    {/* Mengatur kelas active pada nav-link */}
                    <div className={`nav-link ${isActive ? 'active' : ''}`}>
                        <a href="#experience">Experience</a>
                        <a href="#about">About Me</a>
                        <a href="#project">Project</a>
                    </div>

                    {/* Mengatur kelas active pada nav-btn */}
                    <div className={`nav-btn ${isActive ? 'active' : ''}`}>
                        <a href="#">Let`s Work</a>
                    </div>

                    <div className="ham-ico">
                        <i className="icon ai-three-line-horizontal"  onClick={toggleActive}></i>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
