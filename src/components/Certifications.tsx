import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
export default function Certifications() {
  const certifications = [{
    date: '15.10.2024',
    title: "INNOVATION DAY'24 – FIRST PLACE",
    institution: 'Sona College of Technology',
    description: 'Secured First Place in Idea Pitching, presenting a creative and technically viable startup concept',
    side: 'right'
  }, {
    date: '1.1.2025 - 28.2.2025',
    title: 'DESIGN THINKING - A PRIMER',
    institution: '',
    description: 'Elite-certified course focusing on design thinking principles, innovation methods, and user-centered problem-solving.',
    side: 'left'
  },{
    date: '1.1.2025 - 28.2.2025',
    title: 'MACHINE LEARNING INTERNSHIP',
    institution: '',
    description: 'Comprehensive internship covering ML fundamentals, model development, and real-world applications',
    side: 'right'
  }, {
    date: '13.2.2025',
    title: 'NATIONAL LEVEL TECH FEST – FIRST PLACE',
    institution: 'Karpagam Academy of Higher Education',
    description: "Participated in the Innovator's Pitch event at a national-level tech fest, demonstrating innovation and problem-solving skills",
    side: 'left'
  }, {
    date: '26.8.2025',
    title: "START-A-THON'25",
    institution: 'PSG College of Arts & Science',
    description: 'Participated in the Pitch to Prototype competition, showcasing innovative ideas and entrepreneurial skills',
    side: 'right'
  }, {
    date: 'Completed',
    title: 'SOFTWARE AND NETWORK SECURITY BOOTCAMP',
    institution: 'C-DAC Hyderabad',
    description: 'Completed a 5-day intensive bootcamp on Software and Network Security, focusing on cybersecurity principles and secure system design',
    side: 'left'
  }];
  return <section id="certifications" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
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
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional achievements and recognitions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {certifications.map((cert, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className={`relative flex flex-col md:flex-row items-center gap-8 ${cert.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className={`glass-card p-6 rounded-2xl hover:scale-105 transition-smooth group cursor-pointer ${cert.side === 'left' ? 'md:text-right' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-smooth ${cert.side === 'left' ? 'md:order-2' : ''}`}>
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div className={`flex-1 ${cert.side === 'left' ? 'md:text-right' : ''}`}>
                        <h3 className="text-lg md:text-xl font-bold mb-1 uppercase tracking-tight">
                          {cert.title}
                        </h3>
                        {cert.institution && <p className="text-muted-foreground text-sm mb-2 font-semibold">
                            {cert.institution}
                          </p>}
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot and Date */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/30 flex items-center justify-center relative z-10">
                    <div className="w-6 h-6 rounded-full bg-background" />
                  </div>
                  {/* Date positioned near dot */}
                  
                  {/* Mobile date */}
                  
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-full md:w-[calc(50%-2rem)] hidden md:block" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}