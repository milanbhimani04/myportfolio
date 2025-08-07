import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants/routes';
import { useScrollSpy, useSmoothScroll } from '../hooks/useScrollSpy';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    
    // Scroll spy for highlighting active sections
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const activeSection = useScrollSpy(sectionIds, { offset: 100 });
    const { scrollToSection } = useSmoothScroll();

    const navItems = NAV_ITEMS;

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navbarVariants = {
        top: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            backdropFilter: 'blur(0px)',
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        },
        scrolled: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    const menuItemVariants = {
        closed: {
            opacity: 0,
            x: -20,
        },
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: 'easeOut'
            }
        })
    };

    const logoVariants = {
        initial: { opacity: 0, x: -20 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    const navItemVariants = {
        initial: { opacity: 0, y: -20 },
        animate: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + i * 0.1,
                duration: 0.5,
                ease: 'easeOut'
            }
        }),
        hover: {
            scale: 1.05,
            color: '#2563eb',
            transition: { duration: 0.2 }
        }
    };

    const isActive = (path, index) => {
        // If we're on the home page, use scroll spy
        if (location.pathname === '/') {
            const sectionId = sectionIds[index];
            return activeSection === sectionId;
        }
        
        // For other pages, use route-based highlighting
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };
    
    const handleNavClick = (item, index) => {
        // If we're on the home page, scroll to section
        if (location.pathname === '/') {
            const sectionId = sectionIds[index];
            scrollToSection(sectionId);
            setIsOpen(false);
        }
        // Otherwise, navigation will be handled by Link component
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            variants={navbarVariants}
            animate={scrolled ? 'scrolled' : 'top'}
            initial="top"
        >
            <div className="container-custom">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        variants={logoVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    >
                        <Link to="/" className="text-2xl font-bold text-secondary-900">
                            <span className="text-gradient">MB</span>
                           {/* <link rel="icon" href="src/assets/favicon.png" type="image/png" /> */}
                            {/* <link rel="icon" type="image/svg+xml" href="src/assets/favicon.png" /> */}
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navItems.map((item, index) => {
                                const isItemActive = isActive(item.path, index);
                                return (
                                    <motion.div
                                        key={item.name}
                                        className="relative"
                                        variants={navItemVariants}
                                        initial="initial"
                                        animate="animate"
                                        whileHover="hover"
                                        custom={index}
                                    >
                                        {location.pathname === '/' ? (
                                            <button
                                                onClick={() => handleNavClick(item, index)}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 relative ${
                                                    isItemActive
                                                        ? 'text-primary-600 bg-primary-50'
                                                        : 'text-secondary-700 hover:text-primary-600'
                                                }`}
                                            >
                                                {item.name}
                                                {isItemActive && (
                                                    <motion.div
                                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                                                        layoutId="activeTab"
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 relative ${
                                                    isItemActive
                                                        ? 'text-primary-600 bg-primary-50'
                                                        : 'text-secondary-700 hover:text-primary-600'
                                                }`}
                                            >
                                                {item.name}
                                                {isItemActive && (
                                                    <motion.div
                                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                                                        layoutId="activeTab"
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={isOpen ? 'open' : 'closed'}
                                className="w-6 h-6 relative"
                            >
                                <motion.span
                                    className="absolute block h-0.5 w-6 bg-current transform"
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 8 }
                                    }}
                                    style={{ top: '6px' }}
                                />
                                <motion.span
                                    className="absolute block h-0.5 w-6 bg-current transform"
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 }
                                    }}
                                    style={{ top: '12px' }}
                                />
                                <motion.span
                                    className="absolute block h-0.5 w-6 bg-current transform"
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -8 }
                                    }}
                                    style={{ top: '18px' }}
                                />
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden overflow-hidden"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md border-t border-secondary-200">
                            {navItems.map((item, index) => {
                                const isItemActive = isActive(item.path, index);
                                return (
                                    <motion.div
                                        key={item.name}
                                        variants={menuItemVariants}
                                        custom={index}
                                    >
                                        {location.pathname === '/' ? (
                                            <button
                                                onClick={() => handleNavClick(item, index)}
                                                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                                                    isItemActive
                                                        ? 'text-primary-600 bg-primary-50'
                                                        : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                                                }`}
                                            >
                                                {item.name}
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                                                    isItemActive
                                                        ? 'text-primary-600 bg-primary-50'
                                                        : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                                                }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}