import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_TITLES, PAGE_DESCRIPTIONS } from '../constants/routes';

export default function SEO({ title, description, keywords, image }) {
    const location = useLocation();

    const defaultTitle = PAGE_TITLES[location.pathname] || 'Milan Bhimani - Full Stack Developer';
    const defaultDescription =
        PAGE_DESCRIPTIONS[location.pathname] ||
        'Milan Bhimani - Full Stack Developer specializing in React, Python, PHP, and modern web technologies.';

    const pageTitle = title || defaultTitle;
    const pageDescription = description || defaultDescription;
    const pageKeywords =
        keywords || 'Milan Bhimani, Full Stack Developer, React, Python, PHP, Laravel, Web Development, Portfolio';
    const pageImage = image || '/src/assets/man.png';
    const siteUrl = 'https://milanbhimani.dev';
    const currentUrl = `${siteUrl}${location.pathname}`;

    useEffect(() => {
        document.title = pageTitle;

        const updateMetaTag = (name, content, property = false) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let element = document.querySelector(selector);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(property ? 'property' : 'name', name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Basic SEO
        updateMetaTag('description', pageDescription);
        updateMetaTag('keywords', pageKeywords);
        updateMetaTag('author', 'Milan Bhimani');
        updateMetaTag('robots', 'index, follow');
        updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

        // Open Graph
        updateMetaTag('og:title', pageTitle, true);
        updateMetaTag('og:description', pageDescription, true);
        updateMetaTag('og:image', pageImage, true);
        updateMetaTag('og:url', currentUrl, true);
        updateMetaTag('og:type', 'website', true);
        updateMetaTag('og:site_name', 'Milan Bhimani Portfolio', true);

        // Twitter
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', pageTitle);
        updateMetaTag('twitter:description', pageDescription);
        updateMetaTag('twitter:image', pageImage);
        updateMetaTag('twitter:creator', '@milanbhimani');

        // Theme
        updateMetaTag('theme-color', '#2563eb');
        updateMetaTag('msapplication-TileColor', '#2563eb');

        // Canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', currentUrl);

        // JSON-LD Structured Data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Milan Bhimani",
            jobTitle: "Full Stack Developer",
            description: pageDescription,
            url: siteUrl,
            image: pageImage,
            sameAs: [
                "https://github.com/milanbhimani04",
                "https://linkedin.com/in/milan-bhimani",
            ],
            address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "India",
            },
            email: "mbhimani0410@gmail.com",
            telephone: "+91 84016 46441",
        };

        let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
        if (!structuredDataScript) {
            structuredDataScript = document.createElement('script');
            structuredDataScript.setAttribute('type', 'application/ld+json');
            document.head.appendChild(structuredDataScript);
        }
        structuredDataScript.textContent = JSON.stringify(structuredData);
    }, [pageTitle, pageDescription, pageKeywords, pageImage, currentUrl]);

    return null;
}
