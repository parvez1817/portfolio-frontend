import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const skills = [
  { name: 'Analytical Thinking', percentage: 80 },
  { name: 'Meta Learning', percentage: 70 },
  { name: 'Vibe coding', percentage: 95 },
  { name: 'T-shaped developer', percentage: 60 },
];

const CircularProgress = ({ percentage, name }: { percentage: number; name: string }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-secondary/20"
          />
          {/* Progress circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{percentage}%</span>
        </div>
      </div>
      <p className="text-sm font-medium text-center">{name}</p>
    </div>
  );
};

export default function AboutMe() {
  return (
    <section id="about" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My skills and educational background
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CircularProgress percentage={skill.percentage} name={skill.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            
            <div className="space-y-6">
              {/* Degree */}
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">Bachelor of Engineering (AIML)</h4>
                  <p className="text-primary font-semibold mb-2">
                    Sona College of Technology
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Under Anna University
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="px-3 py-1 bg-secondary/10 rounded-lg">
                      <span className="text-sm font-semibold">CGPA: 8.14/10</span>
                    </div>
                    <div className="px-3 py-1 bg-secondary/10 rounded-lg">
                      <span className="text-sm font-semibold">No Arrears</span>
                    </div>
                    <div className="px-3 py-1 bg-secondary/10 rounded-lg">
                      <span className="text-sm font-semibold">Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* School */}
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <School className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">Higher Secondary Education</h4>
                  <p className="text-secondary font-semibold mb-2">
                    St. John's Matric Hr. Sec. School
                  </p>
                  <div className="px-3 py-1 bg-primary/10 rounded-lg inline-block mt-3">
                    <span className="text-sm font-semibold">Percentage: 85.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
