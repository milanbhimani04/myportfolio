import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';
import ExperiencePage from '../pages/ExperiencePage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'skills',
        element: <SkillsPage />,
      },
      {
        path: 'experience',
        element: <ExperiencePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms',
        element: <TermsOfService />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;