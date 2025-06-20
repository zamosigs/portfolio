"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DownloadIcon, SunIcon, MoonIcon, MenuIcon, XIcon } from '@/components/ui/icons';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#home"
              className="group"
            >
              {/* Logo Icon - Cartoon Boy with Laptop */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 p-1">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Laptop */}
                    <rect x="8" y="20" width="24" height="12" rx="2" fill="#374151" stroke="#1F2937" strokeWidth="1"/>
                    <rect x="10" y="22" width="20" height="8" rx="1" fill="#1F2937"/>
                    <rect x="12" y="24" width="16" height="4" fill="#10B981"/>
                    
                    {/* Boy's Head */}
                    <circle cx="20" cy="12" r="6" fill="#FBBF24"/>
                    
                    {/* Hair */}
                    <path d="M14 8 Q20 6 26 8 Q24 10 20 10 Q16 10 14 8" fill="#92400E"/>
                    
                    {/* Eyes */}
                    <circle cx="18" cy="11" r="1" fill="#1F2937"/>
                    <circle cx="22" cy="11" r="1" fill="#1F2937"/>
                    <circle cx="18.5" cy="10.5" r="0.3" fill="white"/>
                    <circle cx="22.5" cy="10.5" r="0.3" fill="white"/>
                    
                    {/* Smile */}
                    <path d="M17 14 Q20 16 23 14" stroke="#1F2937" strokeWidth="1" fill="none" strokeLinecap="round"/>
                    
                    {/* Arms */}
                    <rect x="6" y="18" width="3" height="8" rx="1.5" fill="#FBBF24"/>
                    <rect x="31" y="18" width="3" height="8" rx="1.5" fill="#FBBF24"/>
                    
                    {/* Hands */}
                    <circle cx="7.5" cy="26" r="1.5" fill="#FBBF24"/>
                    <circle cx="32.5" cy="26" r="1.5" fill="#FBBF24"/>
                  </svg>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Ali_Zain_Resume.pdf';
                link.click();
              }}
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Resume</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <SunIcon className="w-4 h-4" />
              ) : (
                <MoonIcon className="w-4 h-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-4 h-4" />
              ) : (
                <MenuIcon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass rounded-lg p-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 w-fit"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Ali_Zain_Resume.pdf';
                    link.click();
                  }}
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span>Resume</span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}