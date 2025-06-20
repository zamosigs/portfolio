"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Code, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const milestones = [
  {
    year: '2020',
    title: 'Started Programming Journey',
    description: 'Began learning web development with HTML, CSS, and JavaScript',
  },
  {
    year: '2021',
    title: 'First Full Stack Project',
    description: 'Built my first complete web application using React and Node.js',
  },
  {
    year: '2022',
    title: 'Professional Experience',
    description: 'Started working as a freelance developer, helping businesses online',
  },
  {
    year: '2023',
    title: 'Advanced Specialization',
    description: 'Deepened expertise in modern frameworks and cloud technologies',
  },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Experience' },
  { number: '20+', label: 'Happy Clients' },
  { number: '∞', label: 'Cups of Coffee' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating impactful digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">My Journey</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Lahore, Pakistan</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full Stack Developer based in the vibrant city of Lahore, Pakistan. 
                My journey in technology began with curiosity and has evolved into a deep love for 
                creating digital experiences that matter.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in modern web technologies including React, Node.js, and TypeScript, 
                always staying up-to-date with the latest industry trends and best practices. 
                My goal is to bridge the gap between design and technology, creating solutions 
                that are both beautiful and functional.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 text-center"
                >
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Story Journey */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary" />
              My Story
            </h3>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <Card className="glass border-0 overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <CardContent className="p-0">
                      {/* Header with Year */}
                      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 border-b border-border/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {milestone.year.slice(-2)}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-foreground">
                                {milestone.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Chapter {index + 1} of my journey
                              </p>
                            </div>
                          </div>
                          <div className="text-4xl text-muted-foreground/30 font-serif">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Story Content */}
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                          </div>
                          <div className="flex-1">
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {milestone.description}
                            </p>
                            
                            {/* Story continuation */}
                            <div className="mt-4 p-4 bg-muted/30 rounded-lg border-l-4 border-primary/30">
                              <p className="text-sm text-muted-foreground italic">
                                {index === 0 && "This was the beginning of an incredible adventure..."}
                                {index === 1 && "The moment I realized I could build anything I imagined..."}
                                {index === 2 && "When I started making a real impact in people's lives..."}
                                {index === 3 && "The journey continues, and the best is yet to come..."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Story connector */}
                      {index < milestones.length - 1 && (
                        <div className="flex justify-center pb-4">
                          <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Story ending */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center p-6 glass rounded-xl border border-primary/20"
            >
              <h4 className="text-lg font-semibold mb-2 gradient-text">The Story Continues...</h4>
              <p className="text-muted-foreground text-sm">
                Every day brings new challenges, new technologies, and new opportunities to create something amazing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}