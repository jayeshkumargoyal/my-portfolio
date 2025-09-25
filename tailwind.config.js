/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors (deep dark backgrounds)
        'base-black': 'rgb(10, 12, 14)',
        'surface-1': 'rgb(16, 19, 23)',
        'surface-2': 'rgb(22, 26, 31)',
        
        // Text colors
        'text-high': 'rgb(230, 233, 239)',
        'text-muted': 'rgb(160, 168, 178)',
        
        // Orange-first accent system
        'accent-orange': 'rgb(255, 140, 80)',
        'accent-orange-emphasis': 'rgb(255, 100, 50)',
        'accent-blue': 'rgb(88, 135, 255)',
        'support-amber': 'rgb(255, 189, 46)',
        'support-teal': 'rgb(45, 212, 191)',
        
        // State colors
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        
        // Focus colors
        'focus': 'rgb(255, 140, 80)',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '44px'],
        '5xl': ['48px', '56px'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 140, 80, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 140, 80, 0.4)',
        'depth': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'depth-lg': '0 16px 64px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
