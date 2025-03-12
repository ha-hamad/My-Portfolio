import { useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeLink, setActiveLink] = useState('#home'); // Default active link

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    // Update active link based on the current hash
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['#home', '#about', '#projects', '#contact'];
            let currentSection = '';

            sections.forEach((section) => {
                const element = document.querySelector(section);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            });

            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg ${menuOpen ? 'blur-background' : ''}`}>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <style>
                        {`
                            .logo-container {
                                background: linear-gradient(to right, #ffffff, #e8e4c9, #ffffff);
                                -webkit-background-clip: text;
                                background-clip: text;
                                color: transparent;
                                background-size: 200% 100%;
                                animation: logoGradient 4s ease-in-out infinite alternate;
                            }

                            @keyframes logoGradient {
                                0% { background-position: 0% 50%; }
                                100% { background-position: 100% 50%; }
                            }

                            .nav-link {
                                position: relative;
                                opacity: 0.7;
                                transition: opacity 0.3s ease;
                            }

                            .nav-link::after {
                                content: '';
                                position: absolute;
                                width: 0;
                                height: 2px;
                                bottom: -6px;
                                left: 0;
                                background-color: white;
                                transition: width 0.3s ease;
                            }

                            .nav-link:hover {
                                opacity: 1;
                            }

                            .nav-link:hover::after {
                                width: 100%;
                            }

                            .nav-link.active {
                                opacity: 1;
                            }

                            .nav-link.active::after {
                                width: 100%;
                                opacity: 1;
                            }
                        `}
                    </style>
                    <a href="#home" className="font-mono text-xl font-bold"> 
                        <span className="logo-container">Albaker.Corp</span>
                    </a>

                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? (
                            <span className="text-white text-3xl">&times;</span>
                        ) : (
                            <span className="text-white text-3xl">&#9776;</span>
                        )}
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="space-x-8">
                            <a 
                                href="#home" 
                                className={`nav-link ${activeLink === '#home' ? 'active' : ''}`} 
                                onClick={() => setActiveLink('#home')}
                            >
                                Home
                            </a>
                            <a 
                                href="#about" 
                                className={`nav-link ${activeLink === '#about' ? 'active' : ''}`} 
                                onClick={() => setActiveLink('#about')}
                            >
                                About
                            </a>
                            <a 
                                href="#projects" 
                                className={`nav-link ${activeLink === '#projects' ? 'active' : ''}`} 
                                onClick={() => setActiveLink('#projects')}
                            >
                                Projects
                            </a>
                            <a 
                                href="#contact" 
                                className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`} 
                                onClick={() => setActiveLink('#contact')}
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </nav>
    );
};