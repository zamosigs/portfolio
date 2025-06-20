import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { ProjectsSection } from '@/components/home/projects-section';
import { SkillsSection } from '@/components/home/skills-section';
import { BlogSection } from '@/components/home/blog-section';
import { ContactSection } from '@/components/home/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}