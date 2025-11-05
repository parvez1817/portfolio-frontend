import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load below-the-fold components for better FCP/LCP
const AboutMe = lazy(() => import('@/components/AboutMe'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Certifications = lazy(() => import('@/components/Certifications'));
const Contact = lazy(() => import('@/components/Contact'));

// Loading skeleton for lazy components
const SectionSkeleton = () => (
  <div className="py-20">
    <div className="container mx-auto px-4">
      <Skeleton className="h-12 w-64 mx-auto mb-4" />
      <Skeleton className="h-6 w-96 mx-auto mb-12" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64 w-full" />
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<SectionSkeleton />}>
            <AboutMe />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Certifications />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
