'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100vw) rotate(45deg); }
        }
        
        @keyframes slideLeft {
          0% { transform: translateX(100vw) rotate(-45deg); }
          100% { transform: translateX(-100%) rotate(-45deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-30px) scaleY(1.1); }
        }
        
        @keyframes pulseOpacity {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -20px); }
          66% { transform: translate(-20px, 20px); }
        }

        .animated-line {
          position: absolute;
          width: 200vw;
          height: 1px;
          left: -50vw;
        }
      `}</style>

      {/* Diagonal moving lines - slide from left to right */}
      <div 
        className="animated-line"
        style={{ 
          top: '15%',
          background: 'linear-gradient(90deg, transparent, rgb(156 163 175 / 0.2) 20%, rgb(156 163 175 / 0.2) 80%, transparent)',
          animation: 'slideRight 30s linear infinite'
        }}
      />
      <div 
        className="animated-line dark:hidden"
        style={{ 
          top: '35%',
          background: 'linear-gradient(90deg, transparent, rgb(209 213 219 / 0.25) 20%, rgb(209 213 219 / 0.25) 80%, transparent)',
          animation: 'slideRight 40s linear infinite',
          animationDelay: '5s'
        }}
      />
      <div 
        className="hidden dark:block animated-line"
        style={{ 
          top: '35%',
          background: 'linear-gradient(90deg, transparent, rgb(20 184 166 / 0.15) 20%, rgb(20 184 166 / 0.15) 80%, transparent)',
          animation: 'slideRight 40s linear infinite',
          animationDelay: '5s'
        }}
      />
      <div 
        className="animated-line dark:hidden"
        style={{ 
          top: '55%',
          background: 'linear-gradient(90deg, transparent, rgb(156 163 175 / 0.2) 20%, rgb(156 163 175 / 0.2) 80%, transparent)',
          animation: 'slideLeft 35s linear infinite',
          animationDelay: '10s'
        }}
      />
      <div 
        className="hidden dark:block animated-line"
        style={{ 
          top: '55%',
          background: 'linear-gradient(90deg, transparent, rgb(59 130 246 / 0.15) 20%, rgb(59 130 246 / 0.15) 80%, transparent)',
          animation: 'slideLeft 35s linear infinite',
          animationDelay: '10s'
        }}
      />
      <div 
        className="animated-line"
        style={{ 
          top: '75%',
          background: 'linear-gradient(90deg, transparent, rgb(156 163 175 / 0.18) 20%, rgb(156 163 175 / 0.18) 80%, transparent)',
          animation: 'slideRight 45s linear infinite',
          animationDelay: '15s'
        }}
      />

      {/* Wavy lines with vertical movement for organic feel */}
      <div 
        className="animated-line dark:hidden"
        style={{ 
          top: '25%',
          background: 'linear-gradient(90deg, transparent, rgb(209 213 219 / 0.3) 30%, rgb(209 213 219 / 0.3) 70%, transparent)',
          animation: 'wave 8s ease-in-out infinite',
          height: '2px'
        }}
      />
      <div 
        className="hidden dark:block animated-line"
        style={{ 
          top: '25%',
          background: 'linear-gradient(90deg, transparent, rgb(20 184 166 / 0.2) 30%, rgb(20 184 166 / 0.2) 70%, transparent)',
          animation: 'wave 8s ease-in-out infinite',
          height: '2px'
        }}
      />
      <div 
        className="animated-line dark:hidden"
        style={{ 
          top: '65%',
          background: 'linear-gradient(90deg, transparent, rgb(156 163 175 / 0.25) 30%, rgb(156 163 175 / 0.25) 70%, transparent)',
          animation: 'wave 10s ease-in-out infinite',
          animationDelay: '3s',
          height: '2px'
        }}
      />
      <div 
        className="hidden dark:block animated-line"
        style={{ 
          top: '65%',
          background: 'linear-gradient(90deg, transparent, rgb(59 130 246 / 0.18) 30%, rgb(59 130 246 / 0.18) 70%, transparent)',
          animation: 'wave 10s ease-in-out infinite',
          animationDelay: '3s',
          height: '2px'
        }}
      />

      {/* Static geometric pattern with subtle diagonal lines */}
      <div 
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgb(209 213 219 / 0.08) 100px,
              rgb(209 213 219 / 0.08) 101px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 100px,
              rgb(229 231 235 / 0.08) 100px,
              rgb(229 231 235 / 0.08) 101px
            )
          `
        }}
      />
      <div 
        className="hidden dark:block absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgb(20 184 166 / 0.05) 100px,
              rgb(20 184 166 / 0.05) 101px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 100px,
              rgb(59 130 246 / 0.05) 100px,
              rgb(59 130 246 / 0.05) 101px
            )
          `
        }}
      />

      {/* Floating gradient orbs for ambient glow effect - light mode */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl dark:hidden"
        style={{
          top: '5%',
          left: '5%',
          background: 'radial-gradient(circle, rgb(209 213 219 / 0.2), transparent 70%)',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl dark:hidden"
        style={{
          bottom: '10%',
          right: '10%',
          background: 'radial-gradient(circle, rgb(156 163 175 / 0.15), transparent 70%)',
          animation: 'float 25s ease-in-out infinite',
          animationDelay: '5s'
        }}
      />

      {/* Floating gradient orbs for ambient glow effect - dark mode */}
      <div 
        className="hidden dark:block absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          top: '5%',
          left: '5%',
          background: 'radial-gradient(circle, rgb(20 184 166 / 0.15), transparent 70%)',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      <div 
        className="hidden dark:block absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          bottom: '10%',
          right: '10%',
          background: 'radial-gradient(circle, rgb(59 130 246 / 0.12), transparent 70%)',
          animation: 'float 25s ease-in-out infinite',
          animationDelay: '5s'
        }}
      />

      {/* Pulsing accent lines for subtle variation */}
      <div 
        className="animated-line dark:hidden"
        style={{ 
          top: '45%',
          background: 'linear-gradient(90deg, transparent, rgb(156 163 175 / 0.15) 40%, rgb(156 163 175 / 0.15) 60%, transparent)',
          animation: 'pulseOpacity 12s ease-in-out infinite',
          height: '1px'
        }}
      />
      <div 
        className="hidden dark:block animated-line"
        style={{ 
          top: '45%',
          background: 'linear-gradient(90deg, transparent, rgb(20 184 166 / 0.12) 40%, rgb(20 184 166 / 0.12) 60%, transparent)',
          animation: 'pulseOpacity 12s ease-in-out infinite',
          height: '1px'
        }}
      />
    </div>
  );
}
