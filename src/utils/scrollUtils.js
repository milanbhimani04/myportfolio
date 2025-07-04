/**
 * Smooth scroll to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from the top (default: 80px for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Scroll to top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Get the current scroll position
 */
export const getScrollPosition = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} threshold - Percentage of element that should be visible (0-1)
 */
export const isElementInViewport = (element, threshold = 0.1) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const elementHeight = rect.bottom - rect.top;
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
  return visibleHeight / elementHeight >= threshold;
};

/**
 * Debounce function for scroll events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};