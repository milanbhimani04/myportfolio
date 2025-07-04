import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
// import Breadcrumb from './Breadcrumb';
// import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';
// import SectionIndicator from './SectionIndicator';
import SEO from './SEO';
import Footer from './Footer';
import MobileFooter from './MobileFooter';

export default function Layout() {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO />
      <ScrollProgress />
      <Navbar />
      {/* <Breadcrumb /> */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <Footer />
      </div>
      
      {/* Mobile Footer */}
      <div className="md:hidden">
        <MobileFooter />
      </div>
      
      {/* <SectionIndicator /> */}
      {/* <ScrollToTop /> */}
    </motion.div>
  );
}