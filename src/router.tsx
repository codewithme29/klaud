
import {
  Component,
  lazy,
  Suspense,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { AlertTriangle, RefreshCw, Home as HomeIcon } from 'lucide-react';

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

// Loading component
function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
    </div>
  );
}

// Application error component
function RouteError() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-6">
      <div className="max-w-md text-center">
        <AlertTriangle className="mx-auto h-14 w-14 text-primary" />

        <h1 className="mt-5 text-2xl font-bold text-[var(--text-primary)]">
          Something went wrong!
        </h1>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          We couldn't load this page. This may be due to a temporary
          connection issue or an outdated application version.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <RefreshCw className="h-4 w-4" />
            Reload Page
          </button>

          <button
            onClick={() => (window.location.href = '/')}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-color)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)]"
          >
            <HomeIcon className="h-4 w-4" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

// React Error Boundary
class AppErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Application rendering error:', error);
  }

  render() {
    if (this.state.hasError) {
      return <RouteError />;
    }

    return this.props.children;
  }
}

// Lazy page wrapper
function lazyPage(
  Component: LazyExoticComponent<ComponentType>
) {
  return (
    <AppErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    </AppErrorBoundary>
  );
}

// Application routes
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <RootLayout />
        </Suspense>
      </AppErrorBoundary>
    ),

    errorElement: <RouteError />,

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
