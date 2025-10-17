'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import logoLight from "@/assets/rhk-properties-dark.svg";

export function Footer() {
  return (
    <footer className="bg-[#1A1D29] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link
                href="/"
                className="flex items-center space-x-3"
              >
                <img
                  src={logoLight.src}
                  alt="RHK Properties LLC"
                  className="h-10 w-[200px]"
                />
              </Link>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Your trusted partner for luxury real estate in the UAE, delivering clear process, quality presentation, and a premium client experience.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/rhkproperties"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/rhkproperties"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/rhkproperties"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/rhkproperties"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/properties"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Properties
                </Link>
              </li> */}
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/property-types/luxury-villas"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Luxury Villas
                </Link>
              </li>
              <li>
                <Link
                  href="/property-types/premium-apartments"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Premium Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/property-types/penthouses"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Penthouses
                </Link>
              </li>
              <li>
                <Link
                  href="/property-types/townhouses"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Townhouses
                </Link>
              </li>
              <li>
                <Link
                  href="/property-types/commercial-properties"
                  className="text-sm text-white/80 hover:text-[#E0E7FF] transition-colors"
                >
                  Commercial Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-white/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Office 2304 Prime Tower, Burj Khalifa Blvd<br />Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+97145890333" className="hover:text-[#E0E7FF] transition-colors cursor-pointer">
                  +971 4 589 0333
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@rhkproperties.com" className="hover:text-[#E0E7FF] transition-colors cursor-pointer">
                  info@rhkproperties.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-4 pt-4 text-center text-sm text-white/60">
          <p className="mb-2">&copy; {new Date().getFullYear()} RHK Properties LLC. All rights reserved.</p>
          <p className="text-xs">RERA-aligned • Trakheesi-ready</p>
        </div>
      </div>
    </footer>
  );
}
