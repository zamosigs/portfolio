"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Building Modern Web Applications with Next.js 14',
    excerpt: 'Explore the latest features in Next.js 14 and how they can revolutionize your web development workflow. From the new App Router to Server Components, discover what makes Next.js 14 a game-changer.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    category: 'Frontend',
    slug: 'nextjs-14-features',
    views: 1247,
    readingProgress: 85,
  },
  {
    title: 'The Art of Clean Code: TypeScript Best Practices',
    excerpt: 'Learn how to write maintainable and scalable TypeScript code that your future self will thank you for. Discover patterns, conventions, and tools that make your codebase a joy to work with.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-08',
    readTime: '12 min read',
    tags: ['TypeScript', 'Clean Code', 'Best Practices'],
    category: 'Backend',
    slug: 'typescript-best-practices',
    views: 892,
    readingProgress: 60,
  },
  {
    title: 'Full Stack Development in 2024: A Complete Guide',
    excerpt: 'Navigate the ever-evolving landscape of full stack development with this comprehensive guide to modern tools and practices. From databases to deployment, we cover it all.',
    image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-01',
    readTime: '15 min read',
    tags: ['Full Stack', 'Guide', 'Career'],
    category: 'Career',
    slug: 'fullstack-guide-2024',
    views: 1567,
    readingProgress: 100,
  },
  {
    title: 'Mastering CSS Grid and Flexbox Layouts',
    excerpt: 'Deep dive into modern CSS layout techniques. Learn how to create responsive, flexible layouts that work perfectly across all devices and screen sizes.',
    image: 'https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2023-12-25',
    readTime: '10 min read',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
    category: 'Frontend',
    slug: 'css-grid-flexbox',
    views: 743,
    readingProgress: 30,
  },
  {
    title: 'Building RESTful APIs with Node.js and Express',
    excerpt: 'Create robust and scalable REST APIs using Node.js and Express. Learn authentication, validation, error handling, and best practices for production-ready APIs.',
    image: 'https://images.pexels.com/photos/11035372/pexels-photo-11035372.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2023-12-18',
    readTime: '14 min read',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    category: 'Backend',
    slug: 'nodejs-express-api',
    views: 1023,
    readingProgress: 75,
  },
  {
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore emerging trends and technologies that will shape the future of web development. From AI integration to new frameworks, stay ahead of the curve.',
    image: 'https://images.pexels.com/photos/11035373/pexels-photo-11035373.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2023-12-10',
    readTime: '11 min read',
    tags: ['Trends', 'Future', 'Technology'],
    category: 'Career',
    slug: 'web-dev-future-2024',
    views: 1345,
    readingProgress: 45,
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Career'];

export function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered;
  }, [searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my development journey
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4">🔍</span>
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 glass border-0"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className="glass"
              >
                <span className="mr-2">⚙️</span>
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchQuery}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden glass border-0 group hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden flex-shrink-0">
                      <div className="aspect-video">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      {/* Reading Progress Overlay */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex justify-between text-xs text-white mb-1">
                          <span>Progress</span>
                          <span>{post.readingProgress}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${post.readingProgress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-white rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 space-y-4">
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <span>📅</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>⏱️</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>📖</span>
                          <span>{post.views}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors flex-1">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      {/* Read More */}
                      <div className="pt-2 mt-auto">
                        <Button variant="ghost" size="sm" className="p-0 h-auto group/btn" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            <span>Read More</span>
                            <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-2 mb-12"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="glass"
            >
              ←
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="glass"
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="glass"
            >
              →
            </Button>
          </motion.div>
        )}

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6"
            asChild
          >
            <Link href="/blog">
              View All Posts
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 