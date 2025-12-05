/**
 * Global Color Scheme for Friidrettens Trenerforening
 *
 * Update these values to change colors across the entire site.
 * All components import from this file, so changes here propagate everywhere.
 */

export const colors = {
  // Primary - Navy Blue (main brand color)
  primary: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#486581',
    700: '#334e68',
    800: '#243b53',
    900: '#1e3a5f', // Main primary color
    950: '#102a43',
  },

  // Secondary - Orange (accent color)
  secondary: {
    400: '#fb923c',
    500: '#f97316', // Main secondary color
    600: '#ea580c',
    700: '#c2410c',
  },

  // Accent - Gold (highlights, awards)
  accent: {
    100: '#fef3c7',
    400: '#fbbf24',
    500: '#f59e0b', // Main accent color
    600: '#d97706',
    700: '#b45309',
  },

  // Background colors
  background: {
    primary: '#f8fafc',
    secondary: '#f1f5f9',
    card: '#ffffff',
  },

  // Text colors
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    muted: '#64748b',
  },
} as const;

// CSS custom properties for use in inline styles
export const cssColors = {
  // Primary
  primaryDark: colors.primary[950],
  primary: colors.primary[900],
  primaryLight: colors.primary[800],
  primaryMedium: colors.primary[700],

  // Secondary
  secondary: colors.secondary[500],
  secondaryHover: colors.secondary[600],

  // Accent
  accentBg: colors.accent[100],
  accent: colors.accent[500],
  accentDark: colors.accent[700],

  // Background
  background: colors.background.primary,
  backgroundAlt: colors.background.secondary,

  // Borders
  borderDark: colors.primary[800],
  borderMedium: colors.primary[700],
} as const;

// Gradient definitions
export const gradients = {
  // Hero gradient (navy blue)
  hero: `linear-gradient(to bottom right, ${colors.primary[900]}, ${colors.primary[800]}, ${colors.primary[950]})`,

  // Section gradient
  section: `linear-gradient(to bottom right, ${colors.primary[900]}, ${colors.primary[950]})`,
} as const;

// Inline style helpers for common patterns
export const styles = {
  // Text styles
  primaryText: { color: colors.primary[900] },
  accentText: { color: colors.accent[700] },

  // Background styles
  primaryBg: { backgroundColor: colors.primary[900] },
  darkBg: { backgroundColor: colors.primary[950] },
  heroBg: { background: gradients.hero },
  sectionBg: { background: gradients.section },

  // Border styles
  darkBorder: { borderColor: colors.primary[800] },

  // Input styles
  inputBg: {
    backgroundColor: colors.primary[900],
    border: `1px solid ${colors.primary[700]}`
  },
} as const;
