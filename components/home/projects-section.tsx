"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projects = [
  {
    title: 'StudySync App',
    description: 'A comprehensive learning management system with real-time collaboration features, built for students and educators.',
    image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/zamosigs/studysync',
    demo: 'https://studysync-demo.vercel.app',
    year: '2024',
    featured: true,
  },
  {
    title: 'Career Architects Website',
    description: 'Professional career counseling platform with appointment scheduling and personalized career guidance.',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/zamosigs/career-architects',
    demo: 'https://career-architects.com',
    year: '2023',
    featured: true,
  },
  {
    title: 'Gym Khana Club Jhang Website',
    description: 'Modern club management system with member portal, event management, and online booking capabilities.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/zamosigs/gym-khana-club',
    demo: 'https://gymkhanajhang.com',
    year: '2023',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/zamosigs/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
    year: '2024',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team features, and progress tracking.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    github: 'https://github.com/zamosigs/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    year: '2023',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application with location-based forecasts, maps integration, and historical data.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Vite'],
    github: 'https://github.com/zamosigs/weather-app',
    demo: 'https://weather-dashboard.vercel.app',
    year: '2023',
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden glass border-0 group hover:scale-105 transition-all duration-300 h-[500px]">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden flex-shrink-0">
                    <div className="aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mt-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="glass text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="glass text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 mt-8">
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="flex-1 group/btn"
                      >
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="mr-1 group-hover/btn:rotate-12 transition-transform">🔗</span>
                          Demo
                        </Link>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="group/btn"
                      >
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="group-hover/btn:rotate-12 transition-transform">🔗</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="px-8 py-6"
          >
            <Link
              href="https://github.com/zamosigs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🔗</span>
              View All Projects
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}