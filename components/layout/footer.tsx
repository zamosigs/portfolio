"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GitHubIcon, 
  LinkedInIcon, 
  EmailIcon, 
  TwitterIcon, 
  InstagramIcon, 
  FacebookIcon,
  HeartIcon
} from '@/components/ui/icons';

const socialLinks = [
  { icon: GitHubIcon, href: 'https://github.com/zamosigs', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zamosigs/', label: 'LinkedIn' },
  { icon: EmailIcon, href: 'mailto:zamosigs@gmail.com', label: 'Email' },
  { icon: TwitterIcon, href: 'https://x.com/zamosigs_pk?t=5puvPtSa5WPr16Tp3XyLLA&s=08', label: 'X (Twitter)' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/zamosigs.pk?igsh=b3VrbDMzdzR3YXU=', label: 'Instagram' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/share/19VTwxgxqZ/', label: 'Facebook' },
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
                  <social.icon className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 Ali Zain. Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
            <span>in Lahore, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}