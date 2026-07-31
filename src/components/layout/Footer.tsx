import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logoSrc from '@/assets/images/logo.png';
import { SITE } from '@/lib/constants';
import { SocialLinks } from '@/components/common/SocialLinks';
import { Container } from './Container';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Coverage', href: '/coverage' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Verification Services', href: '/services' },
  { label: 'Investigation', href: '/services' },
  { label: 'Audit & Compliance', href: '/services' },
  { label: 'Risk Management', href: '/services' },
  { label: 'Collection & Recovery', href: '/services' },
  { label: 'Document Verification', href: '/services' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#081624]">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <Link to="/" className="group inline-block">
              <img
                src={logoSrc}
                alt="KLAUD HUNTER SERVICES PVT. LTD."
                width="56"
                height="56"
                className="h-14 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-300">
              Trusted provider of verification, investigation, audit and risk management solutions for BFSI and Corporate clients across India.
            </p>
            <SocialLinks className="mt-6" light />
          </div>

          {/* Quick Links — 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 shrink-0 text-transparent transition-all group-hover:text-primary group-hover:mr-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneAlt}`} className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {SITE.phoneAlt}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="max-w-[200px]">{SITE.address.line1}, {SITE.address.city}, {SITE.address.state}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/[0.04]">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-gray-400">&copy; {year} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-xs text-gray-400 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-400 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
