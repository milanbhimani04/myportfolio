import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtils';

/**
 * Custom hook for handling navigation between pages and sections
 */
export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Navigate to a section on the home page or to a specific page
   * @param {string} sectionId - The section ID to scroll to
   * @param {string} fallbackPath - The path to navigate to if section doesn't exist
   */
  const navigateToSection = (sectionId, fallbackPath) => {
    // If we're on the home page, scroll to section
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to home page with section hash
      navigate(`/#${sectionId}`);
    }
  };

  /**
   * Navigate to a specific page
   * @param {string} path - The path to navigate to
   */
  const navigateToPage = (path) => {
    navigate(path);
  };

  /**
   * Navigate to contact section or page
   */
  const navigateToContact = () => {
    if (location.pathname === '/') {
      scrollToSection('contact');
    } else {
      navigate('/contact');
    }
  };

  /**
   * Navigate to projects section or page
   */
  const navigateToProjects = () => {
    if (location.pathname === '/') {
      scrollToSection('projects');
    } else {
      navigate('/projects');
    }
  };

  /**
   * Navigate to about section or page
   */
  const navigateToAbout = () => {
    if (location.pathname === '/') {
      scrollToSection('about');
    } else {
      navigate('/about');
    }
  };

  /**
   * Navigate to skills section or page
   */
  const navigateToSkills = () => {
    if (location.pathname === '/') {
      scrollToSection('skills');
    } else {
      navigate('/skills');
    }
  };

  /**
   * Navigate to experience section or page
   */
  const navigateToExperience = () => {
    if (location.pathname === '/') {
      scrollToSection('experience');
    } else {
      navigate('/experience');
    }
  };

  return {
    navigateToSection,
    navigateToPage,
    navigateToContact,
    navigateToProjects,
    navigateToAbout,
    navigateToSkills,
    navigateToExperience,
    currentPath: location.pathname,
    isHomePage: location.pathname === '/',
  };
};