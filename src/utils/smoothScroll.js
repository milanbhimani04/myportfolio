/**
 * Enhanced smooth scroll utilities with easing functions
 */

/**
 * Easing functions for smooth animations
 */
export const easingFunctions = {
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t) => 1 - (--t) * t * t * t,
  easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
  easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
};

/**
 * Smooth scroll to element with custom easing
 * @param {string|HTMLElement} target - Element ID or element itself
 * @param {Object} options - Scroll options
 */
export const smoothScrollTo = (target, options = {}) => {
  const {
    duration = 800,
    offset = 80,
    easing = easingFunctions.easeInOutCubic,
    callback = null
  } = options;

  const targetElement = typeof target === 'string' 
    ? document.getElementById(target) 
    : target;

  if (!targetElement) {
    console.warn(`Element with ID "${target}" not found`);
    return;
  }

  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easedProgress = easing(progress);
    const currentPosition = startPosition + (distance * easedProgress);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    } else if (callback) {
      callback();
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Smooth scroll to top of page
 * @param {Object} options - Scroll options
 */
export const smoothScrollToTop = (options = {}) => {
  const {
    duration = 600,
    easing = easingFunctions.easeOutQuart,
    callback = null
  } = options;

  const startPosition = window.pageYOffset;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easedProgress = easing(progress);
    const currentPosition = startPosition * (1 - easedProgress);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    } else if (callback) {
      callback();
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Get scroll percentage of page
 * @returns {number} Scroll percentage (0-100)
 */
export const getScrollPercentage = () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return (scrollTop / docHeight) * 100;
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} threshold - Visibility threshold (0-1)
 * @returns {boolean} Whether element is in viewport
 */
export const isElementInViewport = (element, threshold = 0.1) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
  if (!vertInView || !horInView) return false;
  
  // Check visibility threshold
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
  const visibleArea = visibleHeight * visibleWidth;
  const totalArea = rect.height * rect.width;
  
  return (visibleArea / totalArea) >= threshold;
};

/**
 * Throttle function for scroll events
 * @param {Function} func - Function to throttle
 * @param {number} limit - Throttle limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Debounce function for scroll events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
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