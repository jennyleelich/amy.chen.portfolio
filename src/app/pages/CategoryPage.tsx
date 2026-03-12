import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CategoryPageProps {
  category: 'Paintings' | 'Drawings' | 'Installations/Sculpture';
}

export function CategoryPage({ category }: CategoryPageProps) {
  const location = useLocation();
  const filteredProjects = projects.filter(project => project.category === category);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
              Designer & Artist
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A product designer with a passion for crafting meaningful objects. 
              Exploring the intersection of craft, materiality, and conceptual depth through 
              sculpture, installation, and mixed media works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                location.pathname === '/'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Product Design
            </Link>
            <Link
              to="/paintings"
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                location.pathname === '/paintings'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Paintings
            </Link>
            <Link
              to="/drawings"
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                location.pathname === '/drawings'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Drawings
            </Link>
            <Link
              to="/installations-sculpture"
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                location.pathname === '/installations-sculpture'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Installations/Sculpture
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/project/${project.id}`}>
                  <div className={`relative overflow-hidden bg-white mb-6 aspect-[4/3] ${project.id === 'studio-workflow-planner' ? '' : 'p-6'}`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-light group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap mt-1">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      {project.category}
                    </p>
                    
                    <p className="text-gray-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="pt-3">
                      <span className="inline-flex items-center text-sm font-medium group-hover:gap-2 transition-all">
                        View More
                        <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
