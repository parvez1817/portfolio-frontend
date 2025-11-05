import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Database, Wrench, X } from 'lucide-react';
import { useState } from 'react';

const technicalSkills = [{
  icon: Code2,
  title: 'Web Development',
  percentage: 90,
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'REST API', 'Responsive Design']
}, {
  icon: Palette,
  title: 'UI/UX Design',
  percentage: 95,
  skills: ['Figma', 'Canva', 'Prototyping', 'User Research', 'Visual Design', 'Interaction Design']
}, {
  icon: Database,
  title: 'Machine Learning',
  percentage: 80,
  skills: ['Python', 'Scikit-learn', 'TensorFlow', 'Data Visualization', 'Model Integration']
}, {
  icon: Wrench,
  title: 'Tools',
  percentage: 95,
  skills: ['Boult.new', 'Cursor', 'Windsurf', 'Canva', 'Figma', 'Gamma.AI', 'Vercel', 'Netlify', 'Render']
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

  return <>
    <section id="skills" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
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
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A diverse skill set for creating impactful solutions
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className="relative">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {technicalSkills.map((skill, index) => {
              const circumference = 2 * Math.PI * 45;
              const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setExpandedSkill(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative w-32 h-32 mb-4">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="8"
                        opacity="0.3"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">{skill.percentage}%</span>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                    {skill.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Popup Modal - Outside section for proper viewport positioning */}
    <AnimatePresence>
      {expandedSkill !== null && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
            onClick={() => setExpandedSkill(null)}
          />
          
          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[600px] max-h-[90vh] overflow-y-auto"
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl relative shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setExpandedSkill(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Skill icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                {(() => {
                  const Icon = technicalSkills[expandedSkill].icon;
                  return <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />;
                })()}
              </div>

              {/* Skill title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 pr-8 sm:pr-0">
                {technicalSkills[expandedSkill].title}
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {technicalSkills[expandedSkill].skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-lg text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>;
}