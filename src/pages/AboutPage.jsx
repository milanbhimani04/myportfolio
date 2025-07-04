import PageTransition from '../components/PageTransition';
import About from '../components/About';

export default function AboutPage() {
  return (
    <PageTransition className="pt-20">
      <About />
    </PageTransition>
  );
}