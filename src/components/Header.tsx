'use client';

import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import logoLight from "@/assets/rhk-properties.svg";
import logoDark from "@/assets/rhk-properties-dark.svg";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleTheme } = useTheme();
  const pathname = usePathname();

  const menuItems = [
    { id: "/", label: "Home", path: "/" },
    // { id: "/properties", label: "Properties", path: "/properties" },
    { id: "/about", label: "About Us", path: "/about" },
    { id: "/blog", label: "Blog", path: "/blog" },
    { id: "/faq", label: "FAQ's", path: "/faq" },
    { id: "/contact", label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
          >
            <img
              src={logoLight.src}
              alt="RHK Properties LLC"
              className="w-[200px] dark:hidden"
              suppressHydrationWarning
            />
            <img
              src={logoDark.src}
              alt="RHK Properties LLC"
              className="w-[200px] hidden dark:block"
              suppressHydrationWarning
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={isActive(item.path) ? "default" : "ghost"}
                className={isActive(item.path) ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
                asChild
              >
                <Link href={item.path}>{item.label}</Link>
              </Button>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
              suppressHydrationWarning
              aria-label="Toggle theme"
              title="Toggle light/dark theme"
            >
              <Moon className="h-5 w-5 dark:hidden" />
              <Sun className="h-5 w-5 hidden dark:block" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden cursor-pointer">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              suppressHydrationWarning
              aria-label="Toggle theme"
              title="Toggle light/dark theme"
            >
              <Moon className="h-6 w-6 dark:hidden" />
              <Sun className="h-6 w-6 hidden dark:block" />
            </Button>
            <button
              className="p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 shadow-inner">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded transition-colors ${isActive(item.path)
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-secondary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
