import { motion } from 'motion/react';
import { useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  useEffect(() => {
    document.title = 'About - Amy Chen';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
                About Amy
              </h1>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  A product designer specializing in interaction design and physical craft. 
                  I design user-centered digital experiences and meaningful objects, exploring 
                  the intersection of interface design, materiality, and conceptual depth through 
                  both digital and physical mediums.
                </p>
                <p>
                  I'm currently pursuing my BFA in Furniture Design at Rhode Island School of Design, 
                  graduating in 2027, with a concentration in Theory and History of Art and Design. 
                  My practice spans from traditional woodworking to digital fabrication, always with 
                  an eye toward thoughtful, purposeful design.
                </p>
                <p>
                  Currently, I work as a Wood Shop Monitor at RISD, where I help maintain 
                  a safe and productive environment for fellow students. I also teach at 
                  Sharon Art Center, sharing my passion for making and material exploration 
                  with the next generation of artists and designers.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMHN0dWRpbyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzExMjk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Amy Chen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light mb-12">Design Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Material First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every project begins with an exploration of materials—their properties, 
                  limitations, and possibilities. Understanding what materials want to do 
                  informs better design decisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Conceptual Depth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Good design tells a story. I believe objects should carry meaning beyond 
                  their function, inviting viewers to engage with them on multiple levels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Craft & Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  The making process is just as important as the final object. Through 
                  careful attention to craft, each piece reveals the hand and intention 
                  behind it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Images */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-light mb-12">In the Studio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764740109279-c7a8abd78821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwc2tldGNoZXMlMjBwcm9jZXNzfGVufDF8fHx8MTc3MzExMjk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Design process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768946131571-cce8b997e648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ24lMjBwcm90b3R5cGUlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzMxMTI5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-light mb-8">Technical Skills</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Physical Making</h3>
                    <p className="text-gray-600">
                      Woodworking, Welding, Soldering, Casting & Releasing, 
                      Sewing, Machine Knitting
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-3">Digital Tools</h3>
                    <p className="text-gray-600">
                      Figma, Figma Make, Photoshop, VS Code, Rhino 3D, 3D Printing, Keyshot, Fusion 360
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-3">Languages</h3>
                    <p className="text-gray-600">
                      Java, Javascript, Typescript, HTML
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    I'm always interested in new projects, collaborations, 
                    or opportunities to learn and grow as a designer.
                  </p>
                  <div>
                    <a 
                      href="mailto:amy.chen.lich@gmail.com" 
                      className="inline-block text-lg hover:text-gray-900 transition-colors"
                    >
                      amy.chen.lich@gmail.com
                    </a>
                  </div>
                  <div>
                    <a 
                      href="mailto:Lchen09@risd.edu" 
                      className="inline-block text-lg hover:text-gray-900 transition-colors"
                    >
                      Lchen09@risd.edu
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://linkedin.com/in/amy-chen-358417283" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-lg hover:text-gray-900 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://drive.google.com/file/d/1_kA0h0me__A2HGStTs3Q_HXHlbmonQ0r/view?usp=sharing" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-900 transition-colors"
                    >
                      Download Resume →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}