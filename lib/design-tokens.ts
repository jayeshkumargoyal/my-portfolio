// Design Tokens for Portfolio Website
// Centralized design system values

export const tokens = {
  colors: {
    // Base colors (deep dark backgrounds)
    baseBlack: 'rgb(10, 12, 14)',
    surface1: 'rgb(16, 19, 23)',
    surface2: 'rgb(22, 26, 31)',
    
    // Text colors
    textHigh: 'rgb(230, 233, 239)',
    textMuted: 'rgb(160, 168, 178)',
    
    // Orange-first accent system
    accentOrange: 'rgb(255, 140, 80)',
    accentOrangeEmphasis: 'rgb(255, 100, 50)',
    accentBlue: 'rgb(88, 135, 255)',
    supportAmber: 'rgb(255, 189, 46)',
    supportTeal: 'rgb(45, 212, 191)',
    
    // State colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    
    // Focus colors
    focus: 'rgb(255, 140, 80)',
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },
  
  typography: {
    fontFamily: {
      heading: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '44px'],
      '5xl': ['48px', '56px'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },
  
  borderRadius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(255, 140, 80, 0.3)',
    glowLg: '0 0 40px rgba(255, 140, 80, 0.4)',
    depth: '0 8px 32px rgba(0, 0, 0, 0.3)',
    depthLg: '0 16px 64px rgba(0, 0, 0, 0.4)',
  },
  
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  motion: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
} as const;

export type ThemeMode = 'pure' | 'atmospheric';

export const themeConfig = {
  pure: {
    effects: {
      glow: false,
      gradients: false,
      glass: false,
    },
    shadows: 'flat',
    accentColor: 'rgb(255, 140, 80)', // accentOrange
    accentHover: 'rgb(255, 100, 50)', // accentOrangeEmphasis
  },
  atmospheric: {
    effects: {
      glow: true,
      gradients: true,
      glass: true,
    },
    shadows: 'depth',
    accentColor: 'rgb(255, 140, 80)', // accentOrange
    accentHover: 'rgb(255, 100, 50)', // accentOrangeEmphasis
    glowColor: 'rgba(255, 122, 69, 0.3)',
  },
} as const;
