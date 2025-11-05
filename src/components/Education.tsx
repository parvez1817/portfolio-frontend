import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-smooth"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Engineering
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  Anna University
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">CGPA</p>
                      <p className="font-semibold">8.1/10</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <BookOpen className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        12th Percentage
                      </p>
                      <p className="font-semibold">85.5%</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                  <p className="font-semibold mb-1">
                    3rd Year - Sona College of Technology, Salem
                  </p>
                  <p className="text-muted-foreground">
                    Department of Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
