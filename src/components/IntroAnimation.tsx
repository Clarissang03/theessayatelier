import { useState, useEffect, useCallback } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
  skipable?: boolean;
}

const IntroAnimation = ({ onComplete, skipable = true }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'fade-in' | 'title' | 'line' | 'fade-out'>('fade-in');
  const [isVisible, setIsVisible] = useState(true);

  const handleSkip = useCallback(() => {
    setPhase('fade-out');
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 300);
  }, [onComplete]);

  useEffect(() => {
    // Check if animation was already shown this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timeline = [
      { delay: 100, action: () => setPhase('title') },
      { delay: 2500, action: () => setPhase('line') },
      { delay: 3500, action: () => setPhase('fade-out') },
      { delay: 4500, action: () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenIntro', 'true');
        onComplete();
      }},
    ];

    const timeouts = timeline.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  // Handle escape key to skip
  useEffect(() => {
    if (!skipable) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [skipable, handleSkip]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        phase === 'fade-out' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 texture-paper opacity-50" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Title */}
        <h1 
          className={`font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.25em] uppercase transition-all duration-1000 ease-out ${
            phase === 'fade-in' 
              ? 'opacity-0 translate-y-8' 
              : 'opacity-100 translate-y-0'
          }`}
          style={{
            textShadow: '0 0 60px rgba(184, 163, 104, 0.15)',
          }}
        >
          The Essay Atelier
        </h1>

        {/* Decorative line */}
        <div 
          className={`mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-800 ease-out origin-center ${
            phase === 'line' || phase === 'fade-out'
              ? 'w-32 md:w-48 opacity-100'
              : 'w-0 opacity-0'
          }`}
        />
      </div>

      {/* Skip button */}
      {skipable && phase !== 'fade-out' && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-sm tracking-widest uppercase hover:text-accent transition-colors duration-300 opacity-60 hover:opacity-100"
        >
          Press Esc or click to skip
        </button>
      )}

      {/* Progress indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {['fade-in', 'title', 'line'].map((p, i) => (
          <div
            key={p}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              ['fade-in', 'title', 'line', 'fade-out'].indexOf(phase) >= i
                ? 'bg-accent'
                : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroAnimation;
