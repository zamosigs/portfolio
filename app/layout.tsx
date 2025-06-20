import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Ali Zain - Full Stack Developer',
  description: 'Full Stack Developer based in Lahore, Pakistan. Specialized in React, Node.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Next.js', 'TypeScript', 'Lahore', 'Pakistan'],
  authors: [{ name: 'Ali Zain' }],
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Ali Zain - Full Stack Developer',
    description: 'Full Stack Developer based in Lahore, Pakistan. Specialized in React, Node.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/profile-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Zain - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Zain - Full Stack Developer',
    description: 'Full Stack Developer based in Lahore, Pakistan. Specialized in React, Node.js, and modern web technologies.',
    images: ['/profile-photo.jpg'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}