import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import { useEffect, useState } from 'react';


export default function Hero() {
  const [key, setKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Re-trigger animation every 5 seconds (only if motion is allowed)
  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 scroll-mt-24 md:scroll-mt-28"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10" style={{ willChange: 'transform' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <div>
              <p className="text-lg text-muted-foreground mb-2">HELLO!</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 flex items-center gap-3">
                <span className="gradient-text">Parvez Ahamed</span>
              </h1>

              {/* Animated Text Replaying Every 5 Seconds */}
              <motion.p
                key={key}
                className="text-xl md:text-2xl text-primary font-semibold mb-6 overflow-hidden"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                Web Developer | UI/UX Designer | ML Enthusiast
              </motion.p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                An analytical thinker and meta-learning expert who loves vibe
                coding and creating impactful digital experiences. Passionate
                about building innovative solutions that make a difference.
              </p>
            </div>

            <Button
              size="lg"
              className="btn-primary font-semibold"
              onClick={() => window.open('/S.Parvez Ahamed.pdf', '_blank')}
            >
              Check Resume
            </Button>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-40 scale-110 animate-pulse" />
              {/* Profile Image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Parvez Ahamed - Web Developer, UI/UX Designer, ML Enthusiast"
                  className="w-full h-full object-cover"
                  width="384"
                  height="384"
                  loading="eager"
                  fetchPriority="high" // ✅ Fixed here
                />
              </div>

            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
