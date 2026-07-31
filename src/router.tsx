import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const RootLayout = lazy(() => import('@/components/layout/RootLayout'));
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Industries = lazy(() => import('@/pages/Industries'));
const Coverage = lazy(() => import('@/pages/Coverage'));
const Leadership = lazy(() => import('@/pages/Leadership'));
const Careers = lazy(() => import('@/pages/Careers'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
    </div>
  );
}

function lazyPage(Component: React.LazyExoticComponent<React.ComponentType>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      { index: true, element: lazyPage(Home) },
      { path: 'about', element: lazyPage(About) },
      { path: 'services', element: lazyPage(Services) },
      { path: 'industries', element: lazyPage(Industries) },
      { path: 'coverage', element: lazyPage(Coverage) },
      { path: 'leadership', element: lazyPage(Leadership) },
      { path: 'careers', element: lazyPage(Careers) },
      { path: 'contact', element: lazyPage(Contact) },
      { path: 'privacy-policy', element: lazyPage(Privacy) },
      { path: 'terms', element: lazyPage(Terms) },
      { path: '*', element: lazyPage(NotFound) },
    ],
  },
]);
