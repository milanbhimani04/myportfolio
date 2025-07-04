import PageTransition from '../components/PageTransition';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <PageTransition className="pt-20">
      <Projects />
    </PageTransition>
  );
}