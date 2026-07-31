import { Link } from 'react-router-dom';
import { MetaTags } from '@/features/seo/MetaTags';
import { Shield, Home, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <>
      <MetaTags title="404 - Page Not Found" noIndex />

      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-[#041638]">
        <Container>
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
              <Shield className="h-12 w-12 text-white/60" />
            </div>

            <h1 className="font-heading text-8xl font-bold text-white md:text-9xl">404</h1>
            <p className="mt-4 text-xl text-gray-300">
              Page not found
            </p>
            <p className="mt-2 text-gray-400">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" variant="secondary">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Button
                size="lg"
                variant="white-outline"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
