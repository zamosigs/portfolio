"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  { icon: '🔗', href: 'https://github.com/zamosigs', label: 'GitHub' },
  { icon: '💼', href: 'https://www.linkedin.com/in/zamosigs/', label: 'LinkedIn' },
  { icon: '✉️', href: 'mailto:zamosigs@gmail.com', label: 'Email' },
  { icon: '🐦', href: 'https://x.com/zamosigs_pk?t=5puvPtSa5WPr16Tp3XyLLA&s=08', label: 'X (Twitter)' },
  { icon: '📷', href: 'https://www.instagram.com/zamosigs.pk?igsh=b3VrbDMzdzR3YXU=', label: 'Instagram' },
  { icon: '📘', href: 'https://www.facebook.com/share/19VTwxgxqZ/', label: 'Facebook' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold gradient-text font-serif mb-4">
            Ali Zain
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Full Stack Developer passionate about creating amazing digital experiences
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 Ali Zain. Made with</span>
            <span className="text-red-500">❤️</span>
            <span>in Lahore, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}