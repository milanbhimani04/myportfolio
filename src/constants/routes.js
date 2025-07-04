/**
 * Application route constants
 */
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    SKILLS: '/skills',
    EXPERIENCE: '/experience',
    PROJECTS: '/projects',
    CONTACT: '/contact',
    PRIVACY: '/privacy',
    TERMS: '/terms',
};

/**
 * Navigation items for the navbar
 */
export const NAV_ITEMS = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'About', path: ROUTES.ABOUT },
    { name: 'Skills', path: ROUTES.SKILLS },
    { name: 'Experience', path: ROUTES.EXPERIENCE },
    { name: 'Projects', path: ROUTES.PROJECTS },
    { name: 'Contact', path: ROUTES.CONTACT },
];

/**
 * Footer legal navigation items
 */
export const FOOTER_LEGAL_ITEMS = [
    { name: 'Privacy Policy', path: ROUTES.PRIVACY },
    { name: 'Terms of Service', path: ROUTES.TERMS },
];

/**
 * Page titles for SEO
 */
export const PAGE_TITLES = {
    [ROUTES.HOME]: 'Milan Bhimani - Full Stack Developer',
    [ROUTES.ABOUT]: 'About - Milan Bhimani',
    [ROUTES.SKILLS]: 'Skills - Milan Bhimani',
    [ROUTES.EXPERIENCE]: 'Experience - Milan Bhimani',
    [ROUTES.PROJECTS]: 'Projects - Milan Bhimani',
    [ROUTES.CONTACT]: 'Contact - Milan Bhimani',
    [ROUTES.PRIVACY]: 'Privacy Policy - Milan Bhimani',
    [ROUTES.TERMS]: 'Terms of Service - Milan Bhimani',
};

/**
 * Page descriptions for SEO
 */
export const PAGE_DESCRIPTIONS = {
    [ROUTES.HOME]: 'Milan Bhimani - Full Stack Developer specializing in React, Python, PHP, and modern web technologies. Building innovative web solutions.',
    [ROUTES.ABOUT]: 'Learn more about Milan Bhimani, a passionate Full Stack Developer with experience in modern web technologies and innovative solutions.',
    [ROUTES.SKILLS]: "Explore Milan Bhimani's technical skills including React.js, Python, PHP, Laravel, MySQL, and other modern web development technologies.",
    [ROUTES.EXPERIENCE]: "Discover Milan Bhimani's professional experience as a Full Stack Developer, including work at Phoenix Solutions and Tusker AI.",
    [ROUTES.PROJECTS]: "View Milan Bhimani's portfolio of projects including DriveTracker, LENSATION, and SAHAS - showcasing full-stack development expertise.",
    [ROUTES.CONTACT]: 'Get in touch with Milan Bhimani for collaboration opportunities, project discussions, or professional inquiries.',
    [ROUTES.PRIVACY]: "Privacy Policy for Milan Bhimani's portfolio website. Learn how personal information is collected, used, and protected.",
    [ROUTES.TERMS]: "Terms of Service for Milan Bhimani's portfolio website. Read the terms and conditions for using this website.",
};