import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export type ImageCarouselProps = {
  images: string[];
  intervalMs?: number; // default 1000
  className?: string;
  height?: string; // e.g. "h-[300px]" or "h-80"
  width?: string;  // e.g. "w-full" or "w-[600px]"
};

export default function ImageCarousel({
  images,
  intervalMs = 10000,
  className = '',
  height = 'h-[400px]',
  width = 'w-full',
}: ImageCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || safeImages.length <= 1) return;
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, safeImages.length, intervalMs]);

  useEffect(() => {
    if (index >= safeImages.length) setIndex(0);
  }, [safeImages.length, index]);

  if (!safeImages.length) return null;

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`relative overflow-hidden border border-border/50 bg-background/40 ${width}`}
      >
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.45 }}
        >
          {safeImages.map((src, i) => (
            <motion.div
              key={i}
              className={`basis-full shrink-0 flex items-center justify-center ${height}`}
              initial={{ scale: 0.98, opacity: 0.9 }}
              animate={{
                scale: i === index ? 1 : 0.98,
                opacity: i === index ? 1 : 0.8,
              }}
              transition={{ duration: 0.45 }}
            >
              <img
                src={src}
                alt={`slide-${i + 1}`}
                className="max-h-[80%] max-w-[80%] object-contain"
                draggable={false}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {safeImages.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? 'bg-primary' : 'bg-muted-foreground/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
