import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import dashboardMobileImg from '../../assets/39d04198d371094023388fe934fcf7e18596dc9e.png';
import pinArtRenderImg from '../../assets/fe6b99bb8376c90025cc30d27743b7d6a8208033.png';
import mockupImg from '../../assets/f2a7538cbe2ab0e676c1ba0aa8e5ff79991d7e42.png';
import iterationImg from '../../assets/1d6b29c84a17e0ed4ee145833c3dc50d3b455d7a.png';
import legsIterationImg from '../../assets/f4dd0f2cad66fc3ad05332cb4d77fee6fba11feb.png';
import legsContinueImg from '../../assets/9745bf5817190954a5a3f5754a4e976de2218ffb.png';
import cncConceptSketchImg from '../../assets/4785f297915fac7471e1cc2b742cb0c95dec4833.png';
import cncShapeStudiesImg from '../../assets/623c71d0f776707b794f1a76c4b996caf8fbc7e0.png';
import cncShapeStudiesAltImg from '../../assets/28f5aaaaff56b53b5304ef4092d4a0374546121a.png';
import cncMockupFrontImg from '../../assets/0847a78c239cc93b34baa67e5c03150a39412151.png';
import cncMockupSideImg from '../../assets/061e193f8e39db6d857b1170c5bb7f65b72960c2.png';
import cncFinalDetailImg from '../../assets/326c6cd324bf8bb373eb0165ef2c80696d8b14f3.png';
import cncBalancePerspectiveImg from '../../assets/062274091954907d6c606ca1492891f80cae79d1.png';
import cncBalanceFrontImg from '../../assets/317cab1383d939ca4f136d6a3a202d548b99162d.png';
import cncBalanceSideImg from '../../assets/062274091954907d6c606ca1492891f80cae79d1.png';
import cncPrototypePerspectiveImg from '../../assets/e5b51977e7264f3cba191846bfc31b7da1aad0cc.png';
import cncPrototypeFrontImg from '../../assets/d490f01ba640c67792578969a9444f3f0b82b743.png';
import mirrorsSketchesGroupImg from '../../assets/f8bb641864ddfd8f2ca0071a7c339b225ae5e99b.png';
import mirrorsSketchesDetailImg from '../../assets/d662828fc0c5decef838536d304798bcfea8b81d.png';
import aSongMainImg from '../../assets/fb31be08a953f3fc3a10b43f4bc6d3964bb84e09.png';
import aSongDetailImg from '../../assets/b1e39399eb9990668bc60051790ca9824f07d318.png';
import aSongKeyDesignImg from '../../assets/659fc8261320746e8b30b0153d0a6ab5ceddb165.png';
import aSongInteractionImg from '../../assets/27325ff7511b2bbfde3324aadfceef718d666a6d.png';
import aSongFrontViewImg from '../../assets/ea7c3e96baf3493f98fdacf36b38bd935f864468.png';
import aSongShadowViewImg from '../../assets/0de09ee0730dfd675c3cfa1f10532b28741be877.png';
import materialStudiesImg from '../../assets/391d4d0cfdc51d8cbf2821328d26d6666a2cf938.png';
import fabricationTestsImg from '../../assets/5d457dd60cc271a6649cbe87f84908626e0e3b9b.png';
import stringFieldImg from '../../assets/b2ee671a42eb5c7b54d89e1c8ed472d7a5767734.png';
import digitalModelImg from '../../assets/72b5271412cd1d281b6420b2181ad72ff5c9c94f.png';
import structuralPrototypeImg from '../../assets/0c98d6fc50a027fc64efea2826820be78b0a11c3.png';
import frontElevationImg from '../../assets/7e71b416bf4ae94a8903eec4d0f5cdae4ee1575a.png';
import interactionViewImg from '../../assets/7d357de153f0d054e1311cd650e86c6d441af385.png';
import paperSurfaceCloseupImg from '../../assets/e072efe186e4b3863356bb3941042e88c42bdd6b.png';
import hangingPencilDetailImg from '../../assets/2b40fb39ce1ed20c0273e37c2a0a565511473ad2.png';

// Helper function to convert string or array to array
function toParagraphs(content: string | string[]): string[] {
  if (Array.isArray(content)) return content;
  return content.split('\\n\\n');
}

// Component to render paragraphs from string or array  
function RenderParagraphs({ content, className = "text-lg text-gray-600 leading-relaxed mb-6" }: { content: string | string[]; className?: string }) {
  const paragraphs = Array.isArray(content) ? content : content.split('\\n\\n');
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={className}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

// Component to render overview with special formatting for a-song project  
function RenderOverview({ content, projectId }: { content: string | string[]; projectId: string }) {
  const paragraphs = Array.isArray(content) ? content : content.split('\\\\n\\\\n');
  
  if (projectId === 'a-song') {
    return (
      <div className="text-lg text-gray-600 leading-relaxed space-y-3 mb-4">
        {paragraphs.map((paragraph, index) => {
          // Check if paragraph is a subheading
          if (paragraph === 'Project Intent') {
            return (
              <h3 key={index} id="project-intent" className="text-xl font-medium text-gray-900 mt-8 first:mt-0 mb-4">
                {paragraph}
              </h3>
            );
          }
          if (paragraph === 'Design Strategy') {
            return (
              <h3 key={index} id="design-strategy" className="text-xl font-medium text-gray-900 mt-8 first:mt-0 mb-4">
                {paragraph}
              </h3>
            );
          }
          if (paragraph === 'Inspiration') {
            return (
              <h3 key={index} id="inspiration" className="text-xl font-medium text-gray-900 mt-8 first:mt-0 mb-4">
                {paragraph}
              </h3>
            );
          }
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    );
  }
  
  return (
    <div className="text-lg text-gray-600 leading-relaxed space-y-6 mb-8">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Amy Chen`;
    }
  }, [project]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'project-intent', 'design-strategy', 'inspiration', 'material-construction', 'design-qualities', 'summary', 'key-design-qualities', 'interaction-experience', 'two-person-exchange', 'body-as-amplifier', 'residue-as-song', 'form-material-presence', 'overall-form', 'material-language', 'tactility-shadow', 'challenge', 'research-insights', 'design-direction', 'structure-seating', 'backrest-mechanism', 'fabrication-refinement', 'structure-diagram', 'early-wireframes', 'prototype', 'outcome', 'reflection'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen">
      {/* Back Button & Navigation */}
      <div className="px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </Link>

            {/* Previous/Next Navigation */}
            <div className="flex items-center gap-4">
              <Link
                to={`/project/${previousProject.id}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Previous</span>
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to={`/project/${nextProject.id}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Title and Description */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Project Metadata */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Year</h3>
                  <p className="text-gray-600">{project.year}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Materials</h3>
                  <p className="text-gray-600">{project.materials}</p>
                </div>

                {project.tools && project.tools.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Tools/Techniques</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar Navigation */}
      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky Vertical Navigation - Only for studio-workflow-planner */}
            {project.id === 'studio-workflow-planner' && (
              <div className="lg:col-span-3">
                <nav className="lg:sticky lg:top-24 space-y-1">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'challenge', label: 'Challenge' },
                    { id: 'research-insights', label: 'Research & Insights' },
                    { id: 'design-direction', label: 'Design Direction' },
                    { id: 'project-structure', label: 'Project Structure Diagram' },
                    { id: 'early-wireframes', label: 'Early Wireframes' },
                    { id: 'prototype', label: 'Prototype' },
                    { id: 'outcome', label: 'Outcome' },
                    { id: 'reflection', label: 'Reflection' }
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                        activeSection === section.id
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Sticky Vertical Navigation - For sensory-chair */}
            {project.id === 'sensory-chair' && (
              <div className="lg:col-span-3">
                <nav className="lg:sticky lg:top-24 space-y-1">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'challenge', label: 'Problem Statement' },
                    { id: 'research-ideation', label: 'Research and Ideation' },
                    { id: 'design-direction', label: 'Design Process' },
                  ].map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                          activeSection === section.id
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {section.label}
                      </button>
                      {/* Sub-navigation for Design Process */}
                      {section.id === 'design-direction' && (
                        <div className="ml-4 mt-1 space-y-1">
                          {[
                            { id: 'structure-seating', label: 'Structure and seating behavior' },
                            { id: 'backrest-mechanism', label: 'Backrest mechanism' },
                            { id: 'fabrication-refinement', label: 'Fabrication and refinement' }
                          ].map((subsection) => (
                            <button
                              key={subsection.id}
                              onClick={() => scrollToSection(subsection.id)}
                              className={`w-full text-left px-4 py-2 text-xs transition-colors rounded ${
                                activeSection === subsection.id
                                  ? 'text-gray-900 bg-gray-100'
                                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              {subsection.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {[
                    { id: 'outcome', label: 'Final Solution' },
                    { id: 'reflection', label: 'Results & Learnings' }
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                        activeSection === section.id
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Sticky Vertical Navigation - For cnc-childrens-furniture */}
            {project.id === 'cnc-childrens-furniture' && (
              <div className="lg:col-span-3">
                <nav className="lg:sticky lg:top-24 space-y-1">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'design-direction', label: 'Research & Insights' },
                  ].map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                          activeSection === section.id
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {section.label}
                      </button>
                      {/* Sub-navigation for Design Process */}
                      {section.id === 'design-direction' && (
                        <div className="ml-4 mt-1 space-y-1">
                          {[
                            { id: 'concept-sketch', label: 'Concept sketch and shape studies' },
                            { id: 'paper-mockups', label: 'Early paper mockups' },
                            { id: 'balance-studies', label: 'Balance and motion studies' },
                            { id: 'plywood-prototype', label: 'Full-scale plywood prototype' }
                          ].map((subsection) => (
                            <button
                              key={subsection.id}
                              onClick={() => scrollToSection(subsection.id)}
                              className={`w-full text-left px-4 py-2 text-xs transition-colors rounded ${
                                activeSection === subsection.id
                                  ? 'text-gray-900 bg-gray-100'
                                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              {subsection.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => scrollToSection('outcome')}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                      activeSection === 'outcome'
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Design Takeaways
                  </button>
                </nav>
              </div>
            )}

            {/* Sticky Vertical Navigation - For mirrors */}
            {project.id === 'mirrors' && (
              <div className="lg:col-span-3">
                <nav className="lg:sticky lg:top-24 space-y-1">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'research-insights', label: 'Research & Insights' },
                    { id: 'materials-finish', label: 'Materials and Finish' },
                    { id: 'key-design-qualities', label: 'Key Design Qualities' },
                    { id: 'outcome', label: 'Outcome' },
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                        activeSection === section.id
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Sticky Vertical Navigation - For a-song */}
            {project.id === 'a-song' && (
              <div className="lg:col-span-3">
                <nav className="lg:sticky lg:top-24 space-y-1">
                  {[
                    { id: 'overview', label: 'Project Overview' },
                  ].map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                          activeSection === section.id
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {section.label}
                      </button>
                      {/* Sub-navigation for Project Overview */}
                      {section.id === 'overview' && (
                        <div className="ml-4 mt-1 space-y-1">
                          {[
                            { id: 'project-intent', label: 'Project Intent' },
                            { id: 'design-strategy', label: 'Design Strategy' },
                            { id: 'inspiration', label: 'Inspiration' },
                            { id: 'key-design-qualities', label: 'Key Design Qualities' }
                          ].map((subsection) => (
                            <button
                              key={subsection.id}
                              onClick={() => scrollToSection(subsection.id)}
                              className={`w-full text-left px-4 py-2 text-xs transition-colors rounded ${
                                activeSection === subsection.id
                                  ? 'text-gray-900 bg-gray-100'
                                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              {subsection.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {[
                    { id: 'interaction-experience', label: 'Interaction and Experience' },
                  ].map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                          activeSection === section.id
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {section.label}
                      </button>
                      {/* Sub-navigation for Interaction and Experience */}
                      {section.id === 'interaction-experience' && (
                        <div className="ml-4 mt-1 space-y-1">
                          {[
                            { id: 'two-person-exchange', label: 'Two-Person Exchange' },
                            { id: 'body-as-amplifier', label: 'Body as Amplifier' },
                            { id: 'residue-as-song', label: 'Residue as Song' }
                          ].map((subsection) => (
                            <button
                              key={subsection.id}
                              onClick={() => scrollToSection(subsection.id)}
                              className={`w-full text-left px-4 py-2 text-xs transition-colors rounded ${
                                activeSection === subsection.id
                                  ? 'text-gray-900 bg-gray-100'
                                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              {subsection.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {[
                    { id: 'form-material-presence', label: 'Form, Material, and Presence' },
                  ].map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                          activeSection === section.id
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {section.label}
                      </button>
                      {/* Sub-navigation for Form, Material, and Presence */}
                      {section.id === 'form-material-presence' && (
                        <div className="ml-4 mt-1 space-y-1">
                          {[
                            { id: 'overall-form', label: 'Overall Form' },
                            { id: 'material-language', label: 'Material Language' },
                            { id: 'tactility-shadow', label: 'Tactility and Shadow' }
                          ].map((subsection) => (
                            <button
                              key={subsection.id}
                              onClick={() => scrollToSection(subsection.id)}
                              className={`w-full text-left px-4 py-2 text-xs transition-colors rounded ${
                                activeSection === subsection.id
                                  ? 'text-gray-900 bg-gray-100'
                                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              {subsection.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {[
                    { id: 'reflection', label: 'Design Reflection' },
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                        activeSection === section.id
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Sticky Vertical Navigation - For superstitions-and-rituals */}
            {project.id === 'superstitions-and-rituals' && (
              <div className="lg:col-span-3">
                <nav className="lg:sticky lg:top-24 space-y-1">
                  {[
                    { id: 'overview', label: 'Project Overview' },
                    { id: 'design-intent', label: 'Design Intent' },
                    { id: 'material-strategy', label: 'Material and Formal Strategy' },
                    { id: 'development-process', label: 'Development Process' },
                    { id: 'final-artifact', label: 'Final Artifact and Use' },
                    { id: 'design-evaluation', label: 'Design Evaluation' },
                    { id: 'key-contributions', label: 'Key Contributions' },
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                        activeSection === section.id
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Sticky Vertical Navigation - For domestic-rituals (Candleholder) */}
            {project.id === 'domestic-rituals' && (
              <div className="lg:col-span-3">
                <nav className="lg:sticky lg:top-24 space-y-1">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'design-progress', label: 'Design Progress' },
                    { id: 'outcome', label: 'Outcome' },
                    { id: 'reflection', label: 'Reflection' },
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                        activeSection === section.id
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Sticky Vertical Navigation - For swallows */}
            {project.id === 'swallows' && (
              <div className="lg:col-span-3">
                <nav className="lg:sticky lg:top-24 space-y-1">
                  {[
                    { id: 'overview', label: 'Project Overview' },
                    { id: 'inspiration', label: 'Inspiration' },
                    { id: 'material-construction', label: 'Material and Construction' },
                    { id: 'design-qualities', label: 'Design Qualities' },
                    { id: 'summary', label: 'Summary' },
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                        activeSection === section.id
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Main Content Area */}
            <div className={project.id === 'studio-workflow-planner' || project.id === 'sensory-chair' || project.id === 'cnc-childrens-furniture' || project.id === 'mirrors' || project.id === 'a-song' || project.id === 'superstitions-and-rituals' || project.id === 'domestic-rituals' || project.id === 'swallows' ? 'lg:col-span-9' : 'lg:col-span-12'}>
              {/* Project Overview Section */}
              {project.overview && (
                <section className="pb-20" id="overview">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.25 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Project Overview</h2>
                      <RenderOverview content={project.overview} projectId={project.id} />
                      
                      {/* Overview Image with Caption - Generic handler */}
                      {project.overviewImage && (
                        <div className="space-y-4 mt-12">
                          <div className="relative overflow-hidden bg-gray-50 w-1/2 mx-auto">
                            <img
                              src={project.overviewImage}
                              alt={project.overviewImageCaption || 'Project overview'}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                          {project.overviewImageCaption && (
                            <p className="text-sm text-gray-600 italic text-center">
                              {project.overviewImageCaption}
                            </p>
                          )}
                        </div>
                      )}
                      
                      {/* Figure 1 Image - Only for studio-workflow-planner */}
                      {project.id === 'studio-workflow-planner' && (
                        <div className="space-y-4">
                          <div className="relative overflow-hidden bg-gray-50 max-w-5xl mx-auto">
                            <img
                              src={project.image}
                              alt="Dashboard Desktop View"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 1. Dashboard screen showing project status, current stage, next step, due date, and recent notes across active studio projects.
                          </p>
                        </div>
                      )}

                      {/* Figure 1 Image - Only for sensory-chair */}
                      {project.id === 'sensory-chair' && project.detailImages && project.detailImages.length > 0 && (
                        <div className="space-y-4">
                          <div className="relative overflow-hidden bg-gray-50 max-w-xl mx-auto">
                            <img
                              src={project.detailImages[0]}
                              alt="Final prototype of the Sensory Chair"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 1. Final prototype of the Sensory Chair in use, showing the shared seating structure and full-scale pin backrest.
                          </p>
                        </div>
                      )}

                      {/* Figure 1 Image - Only for mirrors */}
                      {project.id === 'mirrors' && project.detailImages && project.detailImages.length > 2 && (
                        <div className="space-y-4">
                          <div className="relative overflow-hidden bg-gray-50 max-w-5xl mx-auto">
                            <img
                              src={project.detailImages[2]}
                              alt="Final mirror collection"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 1. Final mirror collection showing material variation, shared geometry, and batch-produced forms.
                          </p>
                        </div>
                      )}

                      {/* Figure 1 Image - Only for cnc-childrens-furniture */}
                      {project.id === 'cnc-childrens-furniture' && project.image && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={project.image}
                                alt="Final rocking chair design"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={cncFinalDetailImg}
                                alt="Detail view of the chair structure"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 1. Final Design — The final rocking chair explores the relationship between playful motion and structural stability. The curved rocker base allows smooth movement while maintaining balance.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Inspiration Section - For swallows */}
              {project.inspiration && project.inspiration.length > 0 && (
                <section className="pb-20" id="inspiration">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.27 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Inspiration</h2>
                      <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                        {project.inspiration.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Inspiration Images Grid */}
                      {project.inspirationImages && project.inspirationImages.length > 0 && (
                        <div className="mt-12 space-y-6">
                          {/* First row: 4 images */}
                          <div className="grid grid-cols-4 gap-4">
                            {project.inspirationImages.slice(0, 4).map((img, index) => (
                              <div key={index} className="space-y-2">
                                <div className="relative overflow-hidden bg-gray-50 aspect-square">
                                  <img
                                    src={img}
                                    alt={project.inspirationImageCaptions?.[index] || `Inspiration ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                {project.inspirationImageCaptions?.[index] && (
                                  <p className="text-xs text-gray-600 italic">
                                    {project.inspirationImageCaptions[index]}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Second row: 3 images */}
                          {project.inspirationImages.length > 4 && (
                            <div className="grid grid-cols-3 gap-4">
                              {project.inspirationImages.slice(4, 7).map((img, index) => (
                                <div key={index + 4} className="space-y-2">
                                  <div className="relative overflow-hidden bg-gray-50 aspect-square">
                                    <img
                                      src={img}
                                      alt={project.inspirationImageCaptions?.[index + 4] || `Inspiration ${index + 5}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  {project.inspirationImageCaptions?.[index + 4] && (
                                    <p className="text-xs text-gray-600 italic">
                                      {project.inspirationImageCaptions[index + 4]}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Material and Construction Section - For swallows */}
              {project.materialConstruction && project.materialConstruction.length > 0 && (
                <section className="pb-20" id="material-construction">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Material and Construction</h2>
                      <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                        {project.materialConstruction.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Material and Construction Images */}
                      {project.materialConstructionImages && project.materialConstructionImages.length > 0 && (
                        <div className="mt-12 space-y-8">
                          {/* First row: Figure 3 and Figure 4 side by side */}
                          <div className="grid grid-cols-2 gap-6">
                            {project.materialConstructionImages.slice(0, 2).map((img, index) => (
                              <div key={index} className="space-y-3">
                                <div className="relative overflow-hidden bg-gray-50">
                                  <img
                                    src={img}
                                    alt={project.materialConstructionImageCaptions?.[index] || `Construction ${index + 1}`}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                {project.materialConstructionImageCaptions?.[index] && (
                                  <p className="text-sm text-gray-600 italic text-center">
                                    {project.materialConstructionImageCaptions[index]}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Second row: Figure 5 - centered, same width as one column above */}
                          {project.materialConstructionImages.length > 2 && (
                            <div className="space-y-3">
                              <div className="flex justify-center">
                                <div className="w-1/2">
                                  <div className="relative overflow-hidden bg-gray-50">
                                    <img
                                      src={project.materialConstructionImages[2]}
                                      alt={project.materialConstructionImageCaptions?.[2] || 'Construction 3'}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                </div>
                              </div>
                              {project.materialConstructionImageCaptions?.[2] && (
                                <p className="text-sm text-gray-600 italic text-center">
                                  {project.materialConstructionImageCaptions[2]}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Design Qualities Section - For swallows */}
              {project.designQualities && project.designQualities.length > 0 && (
                <section className="pb-20" id="design-qualities">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Design Qualities</h2>
                      <div className="space-y-6">
                        {project.designQualities.map((quality, index) => (
                          <div key={index} className="text-lg text-gray-600 leading-relaxed">
                            <span className="font-medium text-gray-900">• {quality.label}:</span> {quality.text}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Summary Section */}
              {project.summary && (
                <section className="pb-20" id="summary">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Summary</h2>
                      <div className="text-lg text-gray-600 leading-relaxed">
                        <p>{project.summary}</p>
                      </div>

                      {/* Summary Images */}
                      {project.summaryImages && project.summaryImages.length > 0 && (
                        <div className="mt-12 space-y-8">
                          <div className="grid grid-cols-2 gap-6">
                            {project.summaryImages.map((img, index) => (
                              <div key={index} className="space-y-3">
                                <div className="relative overflow-hidden bg-gray-50">
                                  <img
                                    src={img}
                                    alt={project.summaryImageCaptions?.[index] || `Summary ${index + 1}`}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                {project.summaryImageCaptions?.[index] && (
                                  <p className="text-sm text-gray-600 italic text-center">
                                    {project.summaryImageCaptions[index]}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Design Intent Section - For superstitions-and-rituals */}
              {project.id === 'superstitions-and-rituals' && (
                <section className="pb-20" id="design-intent">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.27 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Design Intent</h2>
                      <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                        <p>
                          The central question of the project is how to materialize a deeply personal superstition without losing its intimacy. Instead of representing belief symbolically, the design turns ritual into physical behavior. The user sits low to the ground, writes a wish or fixation, and stores it beneath the seat in a hidden chamber. Repetition becomes a structural language through the threading of hundreds of holes, turning insistence into surface, rhythm, and tension.
                        </p>

                        <div>
                          <p className="font-medium text-gray-900 mb-3">Conceptual Drivers</p>
                          <p className="mb-2">Containment: the object protects a private thought while making the ritual legible.</p>
                          <p className="mb-2">Transparency: acrylic exposes structure, labor, and contradiction rather than masking them.</p>
                          <p>Repetition: the hand-threaded field records obsessive action as accumulated time.</p>
                        </div>

                        <div>
                          <p className="font-medium text-gray-900 mb-3">Ritual Sequence</p>
                          <p className="mb-2">Sit close to the ground in a deliberate, focused posture.</p>
                          <p className="mb-2">Write the recurring wish or thought on paper.</p>
                          <p className="mb-2">Place or conceal the note within the object.</p>
                          <p>Return to the act at set intervals, reinforcing time and repetition.</p>
                        </div>

                      </div>

                      {/* Design Intent Images */}
                      {project.designIntentImages && project.designIntentImages.length > 0 && (
                        <div className="mt-12 space-y-12">
                          {project.designIntentImages.map((image, index) => (
                            <div key={index} className="space-y-4">
                              <div className={`relative overflow-hidden bg-gray-50 ${index === 0 ? 'max-w-3xl mx-auto' : ''}`}>
                                <img
                                  src={image}
                                  alt={project.designIntentImageCaptions?.[index] || `Design intent image ${index + 2}`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              {project.designIntentImageCaptions?.[index] && (
                                <p className="text-sm text-gray-600 italic text-center">
                                  {project.designIntentImageCaptions[index]}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Material and Formal Strategy Section - For superstitions-and-rituals */}
              {project.id === 'superstitions-and-rituals' && (
                <section className="pb-20" id="material-strategy">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.28 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Material and Formal Strategy</h2>
                      <div className="text-lg text-gray-600 leading-relaxed">
                        <p>
                          Acrylic is used not only for its translucency but for its conceptual charge. It lets the object behave like a container that refuses opacity, every support, connection, and shadow remains visible. String introduces tactility and duration, measuring labor through repetition. Paper and pencil function as the most direct interface to the user's inner narrative, while the small LED heightens the sense of focused attention within the ritual field.
                        </p>
                      </div>

                      {/* Material Strategy Images */}
                      <div className="mt-12 space-y-12">
                        {/* Figures 5 and 6 - Side by side */}
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={materialStudiesImg}
                                alt="Material studies"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 5. Material studies pairing thread, hardware, and clear components to build a restrained but highly tactile palette.
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={fabricationTestsImg}
                                alt="Fabrication tests"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 6. Fabrication tests for drilled acrylic members and heat-formed paper elements.
                            </p>
                          </div>
                        </div>

                        {/* Figure 7 - Full width */}
                        <div className="space-y-4">
                          <div className="relative overflow-hidden bg-gray-50 max-w-3xl mx-auto">
                            <img
                              src={stringFieldImg}
                              alt="Underside string field"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 7. The underside string field acts as both structure and index of repetitive making.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Development Process Section - For superstitions-and-rituals */}
              {project.id === 'superstitions-and-rituals' && (
                <section className="pb-20" id="development-process">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.29 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Development Process</h2>
                      <div className="text-lg text-gray-600 leading-relaxed mb-12">
                        <p>
                          The form evolved from hand sketches into simplified line drawings and then into a transparent prototype. Throughout the process, actions of the ritual informed the final geometry: the low platform suggested grounding, the arched frame created a visual envelope, and the elevated writing surface established a dedicated point of contact between body and object. Process images show how technical testing and conceptual refinement happened in parallel rather than as separate phases.
                        </p>
                      </div>

                      {/* Development Process Images - Figures 8 and 9 side by side */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="relative overflow-hidden bg-gray-50">
                            <img
                              src={digitalModelImg}
                              alt="Digital model"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 8. Digital model used to study proportion, transparency, and structural balance before fabrication.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div className="relative overflow-hidden bg-gray-50">
                            <img
                              src={structuralPrototypeImg}
                              alt="In-progress structural prototype"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 9. In-progress structural prototype establishing the full scale frame and bent elements.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Final Artifact and Use Section - For superstitions-and-rituals */}
              {project.id === 'superstitions-and-rituals' && (
                <section className="pb-20" id="final-artifact">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Final Artifact and Use</h2>
                      <div className="text-lg text-gray-600 leading-relaxed mb-12">
                        <p>
                          The finished object operates as a low seat, a writing station, and a storage vessel for personal manifestations. The paper holder and hanging pencil turn writing into a ceremonial action, while the hidden compartment below the seat gives the user a place to deposit wishes. Because the structure is transparent, the object never fully conceals what it holds; instead, it stages a tension between secrecy and display.
                        </p>
                      </div>

                      {/* Final Artifact Images */}
                      <div className="space-y-6">
                        {/* Figures 10 and 11 - Side by side */}
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50 h-80">
                              <img
                                src={frontElevationImg}
                                alt="Front elevation"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 10. Front elevation showing the writing surface, arch, and concealed chamber aligned on a central axis.
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50 h-80">
                              <img
                                src={interactionViewImg}
                                alt="Interaction view"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 11. Interaction view documenting the act of writing and placing a note within the transparent system.
                            </p>
                          </div>
                        </div>

                        {/* Figures 12 and 13 - Side by side */}
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50 h-80">
                              <img
                                src={paperSurfaceCloseupImg}
                                alt="Close-up of paper surface"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 12. Close-up of the elevated paper surface, emphasizing the ritual interface between hand, note, and frame.
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50 h-80">
                              <img
                                src={hangingPencilDetailImg}
                                alt="Detail of hanging pencil"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 13. Detail of the hanging pencil and paper platform, designed as a focused point of repetition.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Design Evaluation Section - For superstitions-and-rituals */}
              {project.id === 'superstitions-and-rituals' && (
                <section className="pb-20" id="design-evaluation">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Design Evaluation</h2>
                      <div className="text-lg text-gray-600 leading-relaxed">
                        <p>
                          Superstitions and Rituals succeeds as a product-scale installation because its formal decisions are inseparable from its conceptual framework. The object does not merely symbolize belief; it scripts behavior. Transparency, repetition, and low bodily posture work together to make the ritual visible without neutralizing its emotional charge. The result is a controlled yet vulnerable environment where manifestation is treated as a material practice rather than an abstract idea.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Key Contributions Section - For superstitions-and-rituals */}
              {project.id === 'superstitions-and-rituals' && (
                <section className="pb-20" id="key-contributions">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Key Contributions</h2>
                      <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Transforms a private, repetitive superstition into an interactive object with clear behavioral logic.</li>
                          <li>Uses acrylic transparency to expose the paradox of containment and display.</li>
                          <li>Builds meaning through labor-intensive stringing, making repetition physically measurable.</li>
                          <li>Integrates writing, concealment, posture, and light into one coherent ritual system.</li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Process Development Section */}
              {project.processDevelopment && project.id !== 'cnc-childrens-furniture' && (
                <section className="pb-20" id="process-development">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.28 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Process Development</h2>
                      <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                        {project.processDevelopment.split('\\\\n\\\\n').map((section, index) => {
                          // Check if this is a numbered item (starts with "1.", "2.", etc.)
                          const numberedMatch = section.match(/^(\d+)\.\s+(.+)/);
                          
                          if (numberedMatch) {
                            const number = numberedMatch[1];
                            const content = numberedMatch[2];
                            return (
                              <div key={index} className="flex gap-3">
                                <span className="text-gray-900 font-medium flex-shrink-0">{number}.</span>
                                <span className="font-medium">{content}</span>
                              </div>
                            );
                          }
                          
                          // Regular paragraph
                          return <p key={index}>{section}</p>;
                        })}
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* A-Song Main Images and Sections */}
              {project.id === 'a-song' && (
                <>
                  {/* Main Images Section */}
                  <section className="pb-8">
                    <div className="max-w-4xl mx-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="space-y-8">
                          {/* Figure 1 - Main Image */}
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50 max-w-5xl mx-auto">
                              <img
                                src={aSongMainImg}
                                alt="A Song - sound object for two people"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 1. A sound object for two people that transforms cabinet drawer mechanisms, rock friction, and bodily proximity into a shared acoustic exchange.
                            </p>
                          </div>

                          {/* Figure 2 - Detail View */}
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50 max-w-xl mx-auto">
                              <img
                                src={aSongDetailImg}
                                alt="Detail view of the sound board"
                                className="w-1/2 h-auto object-contain mx-auto"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 2. Detail view of the sound board showing rock knobs, drawer-inspired mechanisms, and carved surface texture.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Key Design Qualities Section - Part of Overview */}
                  <section className="pb-20" id="key-design-qualities">
                    <div className="max-w-4xl mx-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                      >
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Key Design Qualities</h3>
                        <div className="space-y-3 text-lg text-gray-600">
                          <p>Concave form draws two participants into a shared zone of attention.</p>
                          <p>Rock knobs add friction, tactility, and material irregularity.</p>
                          <p>Surface carving makes touch visible and reinforces the handmade character.</p>
                          <p>Suspended stones extend the object through movement and resonance.</p>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Interaction and Experience Section */}
                  <section className="pb-20" id="interaction-experience">
                    <div className="max-w-4xl mx-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <h2 className="text-3xl font-light mb-8">Interaction and Experience</h2>
                        
                        {/* Two-Person Exchange */}
                        <div className="space-y-3 mb-8" id="two-person-exchange">
                          <h3 className="text-xl font-medium text-gray-900 mb-4">Two-Person Exchange</h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Participants approach the piece from opposite sides and activate its components through pulling, scraping, pausing, and responding. Each action is shaped by the timing and attention of the other person, so the resulting sound becomes a form of conversation.
                          </p>
                        </div>

                        {/* Body as Amplifier */}
                        <div className="space-y-3 mb-8" id="body-as-amplifier">
                          <h3 className="text-xl font-medium text-gray-900 mb-4">Body as Amplifier</h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            The central sound board is slightly concave, creating both an acoustic chamber and a social chamber. It invites users inward while helping small gestures accumulate into a richer sonic presence.
                          </p>
                        </div>

                        {/* Residue as Song */}
                        <div className="space-y-3" id="residue-as-song">
                          <h3 className="text-xl font-medium text-gray-900 mb-4">Residue as Song</h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            The final piece does not aim for polished musical control. Instead, it values the residue of interaction: repeated marks, worn surfaces, shifting rhythms, and the memory of touch. In this sense, the song is not only heard - it is built through use.
                          </p>

                          <div className="space-y-4 mt-6">
                            <div className="relative overflow-hidden bg-gray-50 max-w-md mx-auto">
                              <img
                                src={aSongInteractionImg}
                                alt="Interaction view showing drawer mechanism with rock insert"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 3. Interaction view showing one of the drawer mechanisms being activated with a rock insert.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </section>
                </>
              )}

              {/* Form, Material, and Presence - Only for a-song */}
              {project.id === 'a-song' && project.designDirection && (
                <section className="pb-20" id="form-material-presence">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.45 }}
                    >
                      <h2 className="text-3xl font-light mb-8">Form, Material, and Presence</h2>
                      
                      {/* Overall Form */}
                      <div className="space-y-3 mb-8" id="overall-form">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Overall Form</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          The piece stands on a tall leg structure that lifts the sound board into a body-scale encounter. This height makes the object feel simultaneously furniture-like and performative, inviting approach from both sides.
                        </p>
                      </div>

                      {/* Material Language */}
                      <div className="space-y-3 mb-8" id="material-language">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Material Language</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          Alder provides structural warmth and visible grain. Plywood supports the built logic of the drawer elements. Rocks introduce weight, friction, and sonic unpredictability, while string and epoxy help suspend and secure components.
                        </p>
                      </div>

                      {/* Tactility and Shadow */}
                      <div className="space-y-3" id="tactility-shadow">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Tactility and Shadow</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          The object communicates through more than sound alone. Carved surfaces, rough stone touch points, and the large shadow cast by the form extend the experience visually and physically, making use legible even before the piece is touched.
                        </p>

                        <div className="space-y-4 mt-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="relative overflow-hidden bg-gray-50 h-[40rem]">
                                <img
                                  src={aSongFrontViewImg}
                                  alt="Front view of the final piece"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic text-center">
                                Figure 4. Front view of the final piece, showing the concave sound board and suspended stone elements.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="relative overflow-hidden bg-gray-50 h-[40rem]">
                                <img
                                  src={aSongShadowViewImg}
                                  alt="Side view showing shadow"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic text-center">
                                Figure 5. Interaction view showing one of the drawer mechanisms being activated with a rock insert.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Design Reflection - Only for a-song */}
              {project.id === 'a-song' && project.reflection && (
                <section className="pb-20" id="reflection">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.48 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Design Reflection</h2>
                      <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                        {project.reflection.split('\\n\\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Problem Statement */}
              {project.problem && (
                <section className="pb-20" id="challenge">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h2 className="text-3xl font-light mb-6">
                        {project.id === 'sensory-chair' ? 'Problem Statement' : project.id === 'mirrors' ? 'Design Intent' : 'Challenge'}
                      </h2>
                      {project.id === 'mirrors' && project.problem ? (
                        <div className="space-y-6">
                          {(Array.isArray(project.problem) ? project.problem : project.problem.split('\\n\\n')).map((paragraph, index) => (
                            <p key={index} className="text-lg text-gray-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {(Array.isArray(project.problem) ? project.problem : [project.problem]).map((paragraph, index) => (
                            <p key={index} className="text-lg text-gray-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Figure 2 Image - Only for sensory-chair */}
                      {project.id === 'sensory-chair' && project.detailImages && project.detailImages.length > 1 && (
                        <div className="space-y-4">
                          <div className="relative overflow-hidden bg-gray-50 max-w-md mx-auto">
                            <img
                              src={project.detailImages[1]}
                              alt="User engaging the Sensory Chair"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 2. Close view of one user engaging the chair, emphasizing posture, contact, and the relationship between body and backrest.
                          </p>
                        </div>
                      )}

                      {/* Figures 2 & 3 Images - Only for mirrors */}
                      {project.id === 'mirrors' && project.detailImages && project.detailImages.length > 3 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={project.detailImages[3]}
                                alt="Front and rear views of mirrors"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic">
                              Figure 2. Front and rear views highlight the mirror's dual character: soft domestic presence on one side and clear mechanical logic on the other.
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={project.detailImages[1]}
                                alt="Detail view of mirror frame and pivot"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic">
                              Figure 3. Detail view of the mirror frame, pivot, and base geometry.
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Research Insights */}
              {project.researchInsights && project.id !== 'sensory-chair' && project.id !== 'superstitions-and-rituals' && (
                <section className="pb-20" id="research-insights">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.35 }}
                    >
                      <h2 className="text-3xl font-light mb-6">
                        Research Insights
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {project.researchInsights}
                      </p>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Research and Ideation - Only for sensory-chair */}
              {project.id === 'sensory-chair' && (
                <section className="pb-20" id="research-ideation">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.35 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Research and Ideation</h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        The project began with observation of how people share seats and adjust to one another in public and domestic settings. I focused on how small shifts in posture can communicate distance, attention, tension, and comfort. This research led to the idea that a chair could do more than support the body: it could externalize interaction.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        A key conceptual reference was the pin-art toy, which creates a temporary three-dimensional impression through direct pressure. That mechanism suggested a way to turn human contact into a visible trace. Early ideation explored how this effect could be scaled into furniture while maintaining structural clarity and an intuitive user experience.
                      </p>

                      {/* Figures 3-5 */}
                      {project.detailImages && project.detailImages.length > 5 && (
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.detailImages[2]}
                                  alt="Pin-art concept sketch"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="col-span-2 relative overflow-hidden bg-gray-50">
                                <img
                                  src={pinArtRenderImg}
                                  alt="Pin-art 3D render"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 3.1. Early concept sketch referencing pin-art toys as inspiration for an impression-forming backrest mechanism.
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={mockupImg}
                                alt="Early concept Mockup-designing"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 3.2. Early concept Mockup-designing
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50 max-w-xl mx-auto">
                              <img
                                src={project.detailImages[3]}
                                alt="Form studies sketches"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 4.1. Initial form studies exploring seat posture, support geometry, and possible leg structures.
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={iterationImg}
                                alt="Iteration process"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 4.2. Iteration process - How can seating expirences create a hyperawareness of senses-- an awareness of the presences of others and how you occupy space?
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={project.detailImages[4]}
                                alt="Study models"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 5. Small study models used to compare proportions, stability, and the relationship between backrest and seat.
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Process - For studio-workflow-planner */}
              {project.process && project.id !== 'sensory-chair' && project.id !== 'superstitions-and-rituals' && (
                <section className="pb-20" id="research-insights">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.35 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Research & Insights</h2>
                      {project.id === 'mirrors' ? (
                        <div className="space-y-6">
                          {project.process.split('\\n\\n').map((paragraph, index) => (
                            <p key={index} className="text-lg text-gray-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {project.process}
                        </p>
                      )}

                      {/* Figures 4, 5 & 6 Images - Only for mirrors */}
                      {project.id === 'mirrors' && project.detailImages && project.detailImages.length > 5 && (
                        <div className="space-y-6 mt-8">
                          {/* Figure 4 - New Concept Sketches */}
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={mirrorsSketchesGroupImg}
                                  alt="Early concept sketches exploring form variations"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={mirrorsSketchesDetailImg}
                                  alt="Detailed form studies"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 4. Early concept sketches exploring form variations, geometric language, and the relationship between circular and curved elements.
                            </p>
                          </div>

                          {/* Figures 5 & 6 - Prototypes */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.detailImages[4]}
                                  alt="Full-scale prototype testing"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic">
                                Figure 5. Full-scale prototype testing the internal spacing and ball detail.
                              </p>
                            </div>
                            <div className="space-y-4">
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.detailImages[5]}
                                  alt="Early prototype"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic">
                                Figure 6. Early prototype used to refine stance, pivot position, and top disk proportion.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Design Progress Section */}
              {project.designProgress && project.designProgressImages && project.designProgressImageCaptions && (
                <section className="pb-20" id="design-progress">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.36 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Design Progress</h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        {project.designProgress}
                      </p>

                      {/* Design Progress Images Grid */}
                      <div className="space-y-12">
                        {/* First two images side by side with numbered labels */}
                        {project.designProgressImages.length >= 2 && (
                          <div className="grid grid-cols-2 gap-6">
                            {/* Image 1 */}
                            <div className="space-y-4">
                              <h3 className="text-base font-medium text-gray-900">
                                01. Initial 3D Form Development
                              </h3>
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.designProgressImages[0]}
                                  alt="Initial 3D Form Development"
                                  className="w-full h-[400px] object-cover"
                                />
                              </div>
                              {project.designProgressImageCaptions?.[0] && (
                                <p className="text-sm text-gray-600 italic">
                                  {project.designProgressImageCaptions[0]}
                                </p>
                              )}
                            </div>

                            {/* Image 2 */}
                            <div className="space-y-4">
                              <h3 className="text-base font-medium text-gray-900">
                                02. Component Layout and Part Development
                              </h3>
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.designProgressImages[1]}
                                  alt="Component Layout and Part Development"
                                  className="w-full h-[400px] object-cover"
                                />
                              </div>
                              {project.designProgressImageCaptions?.[1] && (
                                <p className="text-sm text-gray-600 italic">
                                  {project.designProgressImageCaptions[1]}
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Second pair of images (3 & 4) side by side with numbered labels */}
                        {project.designProgressImages.length >= 4 && (
                          <div className="grid grid-cols-2 gap-6">
                            {/* Image 3 */}
                            <div className="space-y-4">
                              <h3 className="text-base font-medium text-gray-900">
                                03. Material Testing and Formal Refinement
                              </h3>
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.designProgressImages[2]}
                                  alt="Material Testing and Formal Refinement"
                                  className="w-full h-[400px] object-cover"
                                />
                              </div>
                              {project.designProgressImageCaptions?.[2] && (
                                <p className="text-sm text-gray-600 italic">
                                  {project.designProgressImageCaptions[2]}
                                </p>
                              )}
                            </div>

                            {/* Image 4 */}
                            <div className="space-y-4">
                              <h3 className="text-base font-medium text-gray-900">
                                04. Exploded View and Assembly Logic
                              </h3>
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.designProgressImages[3]}
                                  alt="Exploded View and Assembly Logic"
                                  className="w-full h-[400px] object-cover"
                                />
                              </div>
                              {project.designProgressImageCaptions?.[3] && (
                                <p className="text-sm text-gray-600 italic">
                                  {project.designProgressImageCaptions[3]}
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Third pair of images (5 & 6) side by side with numbered labels */}
                        {project.designProgressImages.length >= 6 && (
                          <div className="grid grid-cols-2 gap-6">
                            {/* Image 5 */}
                            <div className="space-y-4">
                              <h3 className="text-base font-medium text-gray-900">
                                05. Rendering and Atmosphere Study
                              </h3>
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.designProgressImages[4]}
                                  alt="Rendering and Atmosphere Study"
                                  className="w-full h-[400px] object-cover"
                                />
                              </div>
                              {project.designProgressImageCaptions?.[4] && (
                                <p className="text-sm text-gray-600 italic">
                                  {project.designProgressImageCaptions[4]}
                                </p>
                              )}
                            </div>

                            {/* Image 6 */}
                            <div className="space-y-4">
                              <h3 className="text-base font-medium text-gray-900">
                                06. Final Rendered Outcome
                              </h3>
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={project.designProgressImages[5]}
                                  alt="Final Rendered Outcome"
                                  className="w-full h-[400px] object-cover"
                                />
                              </div>
                              {project.designProgressImageCaptions?.[5] && (
                                <p className="text-sm text-gray-600 italic">
                                  {project.designProgressImageCaptions[5]}
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Figure 7 - Half width to align with Figure 6 size */}
                        {project.designProgressImages[6] && (
                          <div className="w-1/2 space-y-4">
                            <h3 className="text-base font-medium text-gray-900">
                              07. Isolated Presentation Image
                            </h3>
                            <div className="relative overflow-hidden bg-gray-50">
                              <img
                                src={project.designProgressImages[6]}
                                alt="Isolated Presentation Image"
                                className="w-full h-[400px] object-cover"
                              />
                            </div>
                            {project.designProgressImageCaptions?.[6] && (
                              <p className="text-sm text-gray-600 italic">
                                {project.designProgressImageCaptions[6]}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Any additional images beyond index 6 */}
                        {project.designProgressImages.slice(7).map((image, index) => {
                          const actualIndex = index + 7;
                          const caption = project.designProgressImageCaptions?.[actualIndex];
                          
                          return (
                            <div key={actualIndex} className="space-y-4">
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={image}
                                  alt={caption || `Design progress image ${actualIndex + 1}`}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                              {caption && (
                                <p className="text-sm text-gray-600 italic text-center">
                                  {caption}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Materials and Finish - For mirrors */}
              {project.id === 'mirrors' && (
                <section className="pb-20" id="materials-finish">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Materials and Finish</h2>
                      <ul className="space-y-4 text-lg text-gray-600 leading-relaxed">
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <div>
                            <span className="font-semibold text-gray-900">Primary material:</span> Ash provides a pale, consistent base tone and reveals grain clearly after finishing.
                          </div>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <div>
                            <span className="font-semibold text-gray-900">Reflective component:</span> A circular mirror insert reinforces the repeated geometry and keeps the front face visually calm.
                          </div>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <div>
                            <span className="font-semibold text-gray-900">Accent detail:</span> Brass end caps act as subtle points of precision and introduce a warm metallic counterpoint.
                          </div>
                        </li>
                        <li className="flex">
                          <span className="mr-2">•</span>
                          <div>
                            <span className="font-semibold text-gray-900">Surface treatment:</span> India ink and wax finish were used to create dark and light variants while preserving the tactile quality of the wood.
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Key Design Qualities - For mirrors */}
              {project.id === 'mirrors' && (
                <section className="pb-20" id="key-design-qualities">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.45 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Key Design Qualities</h2>
                      <div className="overflow-hidden border border-gray-200">
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b border-gray-200">
                              <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900 w-1/3">
                                Approachable form
                              </td>
                              <td className="px-6 py-4 text-gray-700">
                                Rounded geometry and compact scale create a welcoming domestic presence.
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                                Repeatability
                              </td>
                              <td className="px-6 py-4 text-gray-700">
                                Shared parts, templates, and jigs support consistent collaborative batch production.
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                                Tactility
                              </td>
                              <td className="px-6 py-4 text-gray-700">
                                Hand-scaled radii, exposed grain, and easy tilt adjustment encourage touch.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                                Contrast
                              </td>
                              <td className="px-6 py-4 text-gray-700">
                                Ash, dark finish, mirror, and brass create a restrained but legible material palette.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Design Direction - For studio-workflow-planner */}
              {project.id === 'studio-workflow-planner' && project.designDirection && (
                <section className="pb-20" id="design-direction">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Design Direction</h2>
                      {toParagraphs(project.designDirection).map((paragraph: string, index: number) => (
                        <p key={index} className="text-lg text-gray-600 leading-relaxed mb-6">
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Design Process - Only for sensory-chair */}
              {project.id === 'sensory-chair' && project.designDirection && (
                <section className="pb-20" id="design-direction">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h2 className="text-3xl font-light mb-12">Design Process</h2>

                      {/* Structure and seating behavior */}
                      <div className="mb-16" id="structure-seating">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Structure and seating behavior</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          The seat was developed through bent lamination in plywood to introduce a subtle spring effect. This allowed the chair to respond to shifting weight and encouraged users to feel one another's movement through the shared structure. The curved seat profile was refined to balance comfort with a sense of active engagement, so the experience would feel responsive rather than unstable.
                        </p>

                        {/* Figure 6 */}
                        {project.detailImages && project.detailImages.length > 5 && (
                          <div className="space-y-4">
                            <div className="relative overflow-hidden bg-gray-50 max-w-xl mx-auto">
                              <img
                                src={project.detailImages[5]}
                                alt="Digital render"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 italic text-center">
                              Figure 6. Digital render used to study the bent-laminated seat profile and overall structural composition.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Backrest mechanism */}
                      <div className="mb-16" id="backrest-mechanism">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Backrest mechanism</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          The backrest translated the pin-art concept into a full-scale furniture component. Birch dowels pass through a CNC-drilled plywood panel and are secured with silicone pin tacks, allowing the rods to move freely while remaining contained. As a user leans back, the pins shift and retain a temporary pattern that records the encounter between body and object.
                        </p>

                        {/* Figures 7-8 */}
                        {project.detailImages && project.detailImages.length > 7 && (
                          <div className="space-y-8">
                            <div className="space-y-4">
                              <div className="relative overflow-hidden bg-gray-50 max-w-md mx-auto">
                                <img
                                  src={project.detailImages[6]}
                                  alt="Backrest render detail"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic text-center">
                                Figure 7. Render detail of the backrest panel showing the density and arrangement of the movable pin system.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <div className="relative overflow-hidden bg-gray-50 max-w-md mx-auto">
                                <img
                                  src={project.detailImages[7]}
                                  alt="Fabricated pin mechanism"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic text-center">
                                Figure 8. Close-up of the fabricated pin mechanism, showing how the dowels register contact and create a visible impression.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Fabrication and refinement */}
                      <div className="mb-12" id="fabrication-refinement">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Fabrication and refinement</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          Fabrication required careful coordination between concept and making. A total of 348 holes were CNC-machined into the plywood panel to house the movable pins. Ash wood was selected for warmth and structural integrity, while the layered plywood seat preserved the spring behavior developed during prototyping. Throughout the process, I refined the density of the pins, the seat curvature, and the visual relationship between the base, the seat, and the upright backrest.
                        </p>

                        {/* Figures 9.1 and 9 */}
                        {project.detailImages && project.detailImages.length > 8 && (
                          <div className="space-y-8">
                            <div className="space-y-4">
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={legsIterationImg}
                                  alt="Legs: never ending problem"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic text-center">
                                Figure 9.1. 3D Sketch Models — Legs: never ending problem
                              </p>
                            </div>

                            <div className="space-y-4">
                              <div className="relative overflow-hidden bg-gray-50">
                                <img
                                  src={legsContinueImg}
                                  alt="Legs: never ending problem continue"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic text-center">
                                Figure 9.2. 3D Sketch Models — Legs: never ending problem continue
                              </p>
                            </div>

                            <div className="space-y-4">
                              <div className="relative overflow-hidden bg-gray-50 max-w-xl mx-auto">
                                <img
                                  src={project.detailImages[8]}
                                  alt="Refined render iteration"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <p className="text-sm text-gray-600 italic text-center">
                                Figure 9.3. 3D Sketch Models — Refined render iteration testing seat curvature, support geometry, and the transition into the backrest.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Project Structure - For studio-workflow-planner */}
              {project.projectStructure && project.projectStructureImage && (
                <section className="pb-20" id="project-structure">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.45 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Project Structure Diagram</h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {project.projectStructure}
                      </p>
                      <div className="space-y-4">
                        <div className="relative overflow-hidden bg-gray-50">
                          <img
                            src={project.projectStructureImage}
                            alt="Project structure diagram"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-sm text-gray-600 italic text-center">
                          Figure 2. Tree structure diagram showing global and project-specific views, along with the primary interactive actions in the system.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Early Wireframes - For studio-workflow-planner */}
              {project.earlyWireframes && project.earlyWireframesImage && (
                <section className="pb-20" id="early-wireframes">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Early Wireframes</h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {project.earlyWireframes}
                      </p>
                      <div className="space-y-4">
                        <div className="relative overflow-hidden bg-gray-50">
                          <img
                            src={project.earlyWireframesImage}
                            alt="Early wireframes"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-sm text-gray-600 italic text-center">
                          Figure 3. Early wireframes for Dashboard, Project Overview, and Stage View used to test the core workflow before building the interactive prototype.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Prototype - For studio-workflow-planner */}
              {project.prototype && (
                <section className="pb-20" id="prototype">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.55 }}
                    >
                      <h2 className="text-3xl font-light mb-6">Prototype</h2>
                      {toParagraphs(project.prototype).map((paragraph: string, index: number) => (
                        <p key={index} className="text-lg text-gray-600 leading-relaxed mb-6">
                          {paragraph}
                        </p>
                      ))}
                      
                      {project.prototypeLink && (
                        <div className="mb-8">
                          <a
                            href={project.prototypeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors"
                          >
                            View Prototype
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}

                      {project.prototypeImages && project.prototypeImages.length > 0 && (
                        <div className="space-y-8">
                          <h3 className="text-xl font-medium text-gray-900 mb-4">Desktop Views</h3>
                          <div className="grid grid-cols-1 gap-8">
                            {project.prototypeImages.map((img: string, index: number) => (
                              <div key={index} className="space-y-4">
                                <div className="relative overflow-hidden bg-gray-50">
                                  <img
                                    src={img}
                                    alt={`Prototype screen ${index + 1}`}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <p className="text-sm text-gray-600 italic text-center">
                                  Figure {4 + index}. {
                                    index === 0 ? 'Selected Project Overview using stage-based navigation, a current-stage preview' :
                                    index === 1 ? 'Stage View for the making & prototyping phase, where users can manage tasks, milestones, notes, and references.' :
                                    index === 2 ? 'Calendar view/edit organizing critiques, testing sessions, and other project events within a monthly layout.' :
                                    index === 3 ? 'Event details modal linking a selected calendar item to its project, stage, timing, and notes.' :
                                    'Notes / References workspace bringing together research notes, material references, and image inspiration.'
                                  }
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.mobilePrototypeImages && project.mobilePrototypeImages.length > 0 && (
                        <div className="space-y-8 mt-12">
                          <h3 className="text-xl font-medium text-gray-900 mb-4">Mobile Views</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {project.mobilePrototypeImages.map((img: string, index: number) => (
                              <div key={index} className="space-y-2">
                                <div className="relative overflow-hidden bg-gray-50">
                                  <img
                                    src={img}
                                    alt={`Mobile prototype ${index + 1}`}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure {4 + (project.prototypeImages?.length || 0)}. Mobile-responsive views adapting the planning system to smaller screens
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Design Process - For CNC Children's Furniture */}
              {project.id === 'cnc-childrens-furniture' && project.designDirection && (
                <section className="pb-20" id="design-direction">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {toParagraphs(project.designDirection).map((section, sectionIndex) => {
                        // Check if this is a section header (e.g., "Concept sketch and shape studies")
                        const isHeader = !section.startsWith('The ') && !section.startsWith('Paper ') && !section.startsWith('Once ') && !section.startsWith('Fabrication ');
                        
                        // Map section titles to IDs
                        let sectionId = '';
                        if (section === 'Concept sketch and shape studies') {
                          sectionId = 'concept-sketch';
                        } else if (section === 'Early paper mockups') {
                          sectionId = 'paper-mockups';
                        } else if (section === 'Balance and motion studies') {
                          sectionId = 'balance-studies';
                        } else if (section === 'Full-scale plywood prototype') {
                          sectionId = 'plywood-prototype';
                        }
                        
                        if (isHeader) {
                          return (
                            <div key={sectionIndex} className="mb-12" id={sectionId}>
                              <h3 className="text-xl font-medium text-gray-900 mb-4">{section}</h3>
                            </div>
                          );
                        } else {
                          // This is a paragraph of text
                          const showImagesAfterThisParagraph = section.startsWith('The project began with hand sketches');
                          const showMockupImagesAfterThisParagraph = section.startsWith('Paper');
                          const showBalanceImagesAfterThisParagraph = section.startsWith('Once');
                          const showPrototypeImagesAfterThisParagraph = section.startsWith('The final stage');
                          
                          return (
                            <div key={sectionIndex}>
                              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {section}
                              </p>
                              
                              {/* Show images after the first paragraph of "Concept sketch and shape studies" section */}
                              {showImagesAfterThisParagraph && (
                                <div className="space-y-4 mb-12">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncConceptSketchImg}
                                        alt="Initial concept sketch"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncShapeStudiesImg}
                                        alt="Shape studies and cut templates"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 italic">
                                    <p className="text-center">
                                      Figure 2. Initial concept sketch - Early sketch exploring the relationship between a broad rocking base, a suspended seat, and a playful top profile.
                                    </p>
                                    <p className="text-center">
                                      Figure 3. Shape studies and cut templates - Flat studies used to compare alternative side profiles, rocker curves, and top shapes before building three-dimensional models.
                                    </p>
                                  </div>
                                  
                                  {/* Figure 4 - Shape studies alternate view */}
                                  <div className="space-y-4 mt-8">
                                    <div className="relative overflow-hidden bg-gray-50 max-w-md mx-auto">
                                      <img
                                        src={cncShapeStudiesAltImg}
                                        alt="Shape studies - alternate view"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <p className="text-sm text-gray-600 italic text-center">
                                      Figure 4. Shape studies - alternate view - Another paper prototype iteration showing how the design could hold its form through a small number of interlocking panels.
                                    </p>
                                  </div>
                                </div>
                              )}
                              
                              {/* Show images after the "Early paper mockups" paragraph */}
                              {showMockupImagesAfterThisParagraph && (
                                <div className="space-y-4 mb-12">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncMockupFrontImg}
                                        alt="Early paper mockup - front view"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncMockupSideImg}
                                        alt="Early paper mockup - side view"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 italic">
                                    <p className="text-center">
                                      Figure 5. Early paper mockup - front view - One of the first upright mockups testing the overall stance, width, and relationship between the rocker and upper body.
                                    </p>
                                    <p className="text-center">
                                      Figure 6. Early paper mockup - side view - A side-angle view used to evaluate seat depth, support geometry, and how the top plane visually balanced the base.
                                    </p>
                                  </div>
                                </div>
                              )}
                              
                              {/* Show images after the "Balance and motion studies" paragraph */}
                              {showBalanceImagesAfterThisParagraph && (
                                <div className="space-y-4 mb-12">
                                  <div className="grid grid-cols-3 gap-4">
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncBalancePerspectiveImg}
                                        alt="Weighted balance study - perspective view"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncBalanceFrontImg}
                                        alt="Weighted balance study - front view"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncBalanceSideImg}
                                        alt="Weighted balance study - side view"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 italic">
                                    <p className="text-center">
                                      Figure 7. Weighted balance study - perspective view - Metal weights were added to test center of gravity and to observe how balance changed as the frame rocked forward and backward.
                                    </p>
                                    <p className="text-center">
                                      Figure 8. Weighted balance study - front view - This prototype made it easier to study the rocking arc and the placement of mass within the structure.
                                    </p>
                                    <p className="text-center">
                                      Figure 9. Weighted balance study - side view - A closer side view highlighting the long rocker profile and the way the internal supports organize the center of the chair.
                                    </p>
                                  </div>
                                </div>
                              )}
                              
                              {/* Show images after the "The final stage" paragraph */}
                              {showPrototypeImagesAfterThisParagraph && (
                                <div className="space-y-4 mb-12">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncPrototypePerspectiveImg}
                                        alt="Final prototype - perspective view"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div className="relative overflow-hidden bg-gray-50">
                                      <img
                                        src={cncPrototypeFrontImg}
                                        alt="Final prototype - front view"
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 italic">
                                    <p className="text-center">
                                      Figure 10. CNC plywood prototype - perspective view - The full-scale plywood prototype translated the paper studies into a thicker, more durable structure with visible interlocking joints.
                                    </p>
                                    <p className="text-center">
                                      Figure 11. CNC plywood prototype - front view - The final prototype emphasizes smooth rocking motion, structural stability, and a child-scaled silhouette that feels playful without losing balance.
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        }
                      })}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Project Images - Only show for projects other than studio-workflow-planner, sensory-chair, cnc-childrens-furniture, and mirrors */}
              {project.detailImages && project.detailImages.length > 0 && project.id !== 'studio-workflow-planner' && project.id !== 'sensory-chair' && project.id !== 'cnc-childrens-furniture' && project.id !== 'mirrors' && project.id !== 'a-song' && project.id !== 'swallows' && (
                <section className="px-6 lg:px-8 py-20">
                  <div className={`mx-auto space-y-12 ${
                    project.id === 'figure-drawings' ? 'max-w-7xl' : 'max-w-7xl'
                  }`}>
                    {project.detailImages.map((image, index) => (
                      <div key={index} className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          className={`relative overflow-hidden bg-gray-100 ${
                            project.id === 'pitcher-design' && index === 0 
                              ? 'max-w-2xl mx-auto' 
                              : project.id === 'figure-drawings'
                              ? 'max-w-5xl mx-auto'
                              : ''
                          }`}
                        >
                          <ImageWithFallback
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className={`w-full h-auto ${
                              project.id === 'pitcher-design' && index === 0 
                                ? 'max-h-[50vh] object-cover' 
                                : project.id === 'figure-drawings'
                                ? 'max-h-[90vh] object-contain'
                                : 'object-cover'
                            }`}
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Outcome */}
              {project.outcome && (
                <section className="px-6 lg:px-8 pb-20" id="outcome">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-3xl font-light mb-6">
                        {project.id === 'sensory-chair' ? 'Final Solution' : project.id === 'cnc-childrens-furniture' ? 'Design takeaways' : 'Outcome'}
                      </h2>

                      {toParagraphs(project.outcome).map((paragraph: string, index: number) => (
                        <p key={index} className="text-lg text-gray-600 leading-relaxed mb-8">
                          {paragraph}
                        </p>
                      ))}

                      {/* Figure 10 - Only for sensory-chair */}
                      {project.id === 'sensory-chair' && project.detailImages && project.detailImages.length > 9 && (
                        <div className="space-y-4 mb-8">
                          <div className="relative overflow-hidden bg-gray-50 max-w-xl mx-auto">
                            <img
                              src={project.detailImages[9]}
                              alt="In-use interaction study"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 italic text-center">
                            Figure 10. In-use interaction study showing how movement activates the seat and changes the shared condition of the chair.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Reflection */}
              {project.reflection && project.id !== 'a-song' && (
                <section className="px-6 lg:px-8 pb-20" id="reflection">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-3xl font-light mb-6">
                        {project.id === 'sensory-chair' ? 'Results & Learnings' : 'Reflection'}
                      </h2>
                      <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                        {toParagraphs(project.reflection).map((section, index) => {
                          // Check if this section contains bullet points
                          if (section.includes('•')) {
                            // Split the section into paragraphs and bullet points
                            const parts = section.split('\\n');
                            const paragraphs: string[] = [];
                            const bullets: string[] = [];
                            
                            parts.forEach(part => {
                              if (part.trim().startsWith('•')) {
                                bullets.push(part);
                              } else if (part.trim()) {
                                paragraphs.push(part);
                              }
                            });

                            return (
                              <div key={index} className="space-y-6">
                                {paragraphs.map((para, pIndex) => (
                                  <p key={pIndex}>{para}</p>
                                ))}
                                {bullets.length > 0 && (
                                  <ul className="space-y-4 ml-8">
                                    {bullets.map((bullet, bIndex) => (
                                      <li key={bIndex} className="flex gap-3">
                                        <span className="text-gray-900 flex-shrink-0">•</span>
                                        <span>{bullet.replace('•', '').trim()}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          }
                          // Regular paragraph
                          return <p key={index}>{section}</p>;
                        })}
                      </div>
                    </motion.div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}