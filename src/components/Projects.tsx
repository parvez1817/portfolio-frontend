import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageCarousel from '@/components/ImageCarousel';
import img1 from '@/assets/f.jpg';
import img2 from '@/assets/fff.jpg';
import img3 from '@/assets/ffff.jpg';
import img4 from '@/assets/fffff.jpg';
import img5 from '@/assets/brain.jpg';
import img6 from '@/assets/mum.jpg';
const projects = [{
  title: 'Student ID Card Portal',
  description: 'A comprehensive web system for managing student identification digitally with secure authentication and data management.',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  tags: ['React', 'Node.js', 'MongoDB', 'Authentication'],
  demo: 'https://sona-idcard-portal.netlify.app'
}, {
  title: 'Blood Group Detection Project',
  description: 'Advanced ML model predicting blood groups using fingerprint analysis with high accuracy and real-time processing.',
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  tags: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
  demo: 'https://fingroop-ai.netlify.app/'
}, {
  title: 'NeuroCare AI',
  description: 'AI-powered system for neurological analysis and treatment recommendations using advanced neural networks.',
  image: img5,
  tags: ['AI', 'Healthcare', 'Deep Learning', 'React'],
  demo: 'https://stringer.neocities.org/Full%20stack/nueroweb/'
}, {
  title: 'Cultural Chronicles',
  description: 'Immersive VR-based platform exploring cultural stories and tourist places interactively with 360° experiences.',
  image: img6,
  tags: ['VR', 'React', 'Interactive Design'],
  demo: 'https://latest-vr.onrender.com',
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
export default function Projects() {
  return <section id="projects" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
    <div className="container mx-auto px-4">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Innovative solutions that make a difference
        </p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => <motion.div key={index} variants={itemVariants} className="group relative glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-smooth">
          <div className="relative h-64 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                size="sm"
                className="gradient-bg hover:opacity-90 text-white"
                onClick={() => window.open(project.demo, '_blank')} // 👈 opens demo link
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Demo
              </Button>

            </div>
          </div>
        </motion.div>
        )}
      </motion.div>

      {/* UI Posters Subsection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">UI Posters</span>
        </h3>
        <p className="text-muted-foreground text-center mb-8"> A collection of visually engaging product posters designed for various brands and concepts.</p>

        <ImageCarousel
          images={[img1, img2, img3, img4]}
          intervalMs={2000}
          className="mx-auto"
        />
      </motion.div>
    </div>
  </section>
    ;
}