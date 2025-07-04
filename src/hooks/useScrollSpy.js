import { useState, useEffect } from 'react';
import { smoothScrollTo, throttle } from '../utils/smoothScroll';

/**
 * Custom hook for scroll spy functionality
 * Tracks which section is currently in view and updates active navigation
 */
export const useScrollSpy = (sectionIds, options = {}) => {
  const [activeSection, setActiveSection] = useState('');
  
  const {
    offset = 100, // Offset from top when section becomes active
    threshold = 0.3, // Percentage of section that needs to be visible
  } = options;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the current section
      let currentSection = '';
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if section is in view
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // If no section is found, check which section is closest to the top
      if (!currentSection) {
        let closestSection = '';
        let closestDistance = Infinity;
        
        for (const sectionId of sectionIds) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = sectionId;
            }
          }
        }
        
        currentSection = closestSection;
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with throttling
    const throttledHandleScroll = throttle(handleScroll, 16); // ~60fps

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, offset, threshold]);

  return activeSection;
};

/**
 * Hook for smooth scrolling to sections
 */
export const useSmoothScroll = () => {
  const scrollToSection = (sectionId, options = {}) => {
    smoothScrollTo(sectionId, {
      duration: 800,
      offset: 80,
      ...options
    });
  };

  return { scrollToSection };
};

/**
 * Hook for detecting scroll direction
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollDirection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
};