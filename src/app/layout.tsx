import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import '@/styles/globals.css';
import '@/index.css';
import fabIconLight from '@/assets/fab-icon-light.svg';
import fabIconDark from '@/assets/favicon-white.svg';

  const inter = Inter({ 
    subsets: ['latin'],
    display: 'optional',
    preload: true,
    adjustFontFallback: true,
    fallback: ['system-ui', '-apple-system', 'sans-serif'],
  });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'RHK Properties LLC - Luxury Real Estate Dubai',
  description: 'Your trusted partner in luxury real estate across the UAE. Delivering exceptional properties and unmatched service.',
  keywords: 'Dubai real estate, luxury properties, villas, penthouses, apartments, UAE property, Business Bay',
  authors: [{ name: 'RHK Properties LLC' }],
  creator: 'RHK Properties LLC',
  publisher: 'RHK Properties LLC',
  metadataBase: new URL('https://rhkproperties.com'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: fabIconLight.src,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: fabIconDark.src,
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  openGraph: {
    title: 'RHK Properties LLC - Luxury Real Estate Dubai',
    description: 'Your trusted partner in luxury real estate across the UAE.',
    url: 'https://rhkproperties.com',
    siteName: 'RHK Properties LLC',
    locale: 'en_AE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FAFBFC" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0F1419" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  var root = document.documentElement;
                  root.classList.remove('light', 'dark');
                  root.classList.add(theme);
                  root.style.colorScheme = theme;
                  root.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


