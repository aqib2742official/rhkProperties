'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import logoLight from "@/assets/rhk-properties.svg";
import logoDark from "@/assets/rhk-properties-dark.svg";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={theme === 'dark' ? logoLight.src : logoDark.src}
                alt="RHK Properties LLC"
                className="h-10 w-[200px]"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your trusted partner for luxury real estate in the UAE, delivering clear process, quality presentation, and a premium client experience.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
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
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/properties"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Properties
                </Link>
              </li> */}
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="mb-4">Property Types</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Luxury Villas</li>
              <li>Premium Apartments</li>
              <li>Penthouses</li>
              <li>Townhouses</li>
              <li>Commercial Properties</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Office 2304 Prime Tower, Burj Khalifa Blvd<br />Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+971 4 589 0333</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@rhkproperties.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-4 pt-4 text-center text-sm text-primary-foreground/60">
          <p className="mb-2">&copy; {new Date().getFullYear()} RHK Properties LLC. All rights reserved.</p>
          <p className="text-xs">EN/AR • RERA-aligned • Trakheesi-ready</p>
        </div>
      </div>
    </footer>
  );
}
