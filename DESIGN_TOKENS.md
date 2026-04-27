# Design Tokens - Bold Editorial Style

## 🎨 Color Palette

### Primary Colors
```css
--color-primary: #E8192C;           /* Bold Red */
--color-primary-dark: #C01525;      /* Darker Red for hover */
--color-accent: #FFD600;            /* Bright Yellow */
--color-accent-dark: #E6C200;       /* Darker Yellow */
```

### Background Colors
```css
--color-bg-primary: #FAFAF8;        /* Off-white main background */
--color-bg-secondary: #FFFFFF;      /* Pure white cards/sections */
--color-bg-dark: #0D0D0D;           /* Dark sections (Contact) */
```

### Text Colors
```css
--color-text-primary: #111111;      /* Almost black */
--color-text-secondary: #4A4A4A;    /* Medium gray */
--color-text-muted: #7A7A7A;        /* Light gray */
--color-text-inverse: #FFFFFF;      /* White on dark backgrounds */
```

### Borders & Dividers
```css
--color-border: #E0E0E0;            /* Light border */
--color-border-dark: #2A2A2A;       /* Dark border */
```

## 📐 Spacing Scale

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
```

## 🔤 Typography

### Font Families
```css
--font-display: 'Space Grotesk';    /* Headings, bold text */
--font-handwritten: 'Caveat';       /* Decorative, annotations */
--font-body: 'Inter';               /* Body text, paragraphs */
```

### Font Sizes
```css
--font-size-xs: 0.75rem;     /* 12px */
--font-size-sm: 0.875rem;    /* 14px */
--font-size-base: 1rem;      /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.25rem;     /* 20px */
--font-size-2xl: 1.5rem;     /* 24px */
--font-size-3xl: 2rem;       /* 32px */
--font-size-4xl: 2.5rem;     /* 40px */
--font-size-5xl: 3.5rem;     /* 56px */
--font-size-6xl: 4.5rem;     /* 72px */
--font-size-7xl: 6rem;       /* 96px */
```

### Font Weights
- **300:** Light
- **400:** Regular
- **500:** Medium
- **700:** Bold
- **800:** Extra Bold

## 🔲 Border Radius

```css
--radius-sm: 0.25rem;    /* 4px - Sharp corners */
--radius-md: 0.5rem;     /* 8px - Slightly rounded */
--radius-lg: 1rem;       /* 16px - Rounded */
--radius-xl: 1.5rem;     /* 24px - Very rounded */
--radius-full: 9999px;   /* Fully rounded (pills) */
```

## 🎭 Shadows

### Paper-Style Shadows
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
--shadow-paper: 4px 4px 0px rgba(0, 0, 0, 0.1);
--shadow-paper-hover: 8px 8px 0px rgba(232, 25, 44, 0.2);
```

### Usage Examples
```css
/* Default card shadow */
box-shadow: var(--shadow-paper);

/* Hover effect */
.card:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--shadow-paper-hover);
}
```

## ⏱️ Transitions

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 400ms ease-in-out;
```

## 🎨 Component Patterns

### Primary Button
```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border: 2px solid var(--color-text-primary);
  border-radius: var(--radius-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 4px 4px 0px var(--color-text-primary);
}

.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--color-text-primary);
}
```

### Outline Button
```css
.btn-outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-text-primary);
  box-shadow: 4px 4px 0px var(--color-text-primary);
}

.btn-outline:hover {
  background: var(--color-accent);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--color-text-primary);
}
```

### Paper Card
```css
.glass-card {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-text-primary);
  border-radius: var(--radius-sm);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-paper);
}

.glass-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--shadow-paper-hover);
}
```

### Section Title
```css
.section-title {
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--color-text-primary);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--color-primary);
}
```

### Section Number Watermark
```css
.section::before {
  content: '01';
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 120px;
  font-weight: 800;
  font-family: var(--font-display);
  color: var(--color-primary);
  opacity: 0.05;
  line-height: 1;
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (min-width: 769px) { }
```

## 🎯 Usage Guidelines

### Do's ✅
- Use bold borders (2-3px) on all interactive elements
- Apply paper shadows for depth
- Use uppercase for buttons and tags
- Add letter-spacing (0.5px) to uppercase text
- Use Space Grotesk for headings
- Keep corners sharp (small border radius)
- Use translate hover effects with enhanced shadows

### Don'ts ❌
- Don't use gradients (use flat colors)
- Don't use glassmorphism effects
- Don't use soft glows
- Don't use large border radius
- Don't mix too many colors
- Don't use thin borders (< 2px)

## 🎨 Color Combinations

### Primary Combinations
```css
/* Red on White */
background: #FFFFFF;
color: #E8192C;
border: 2px solid #111111;

/* Yellow Accent */
background: #FFD600;
color: #111111;
border: 2px solid #111111;

/* Dark Section */
background: #0D0D0D;
color: #FFFFFF;
border: 2px solid #FFFFFF;
```

### Hover States
```css
/* Primary Button Hover */
background: #C01525; /* Darker red */

/* Outline Button Hover */
background: #FFD600; /* Yellow */

/* Card Hover */
border-color: #E8192C; /* Red border */
```

---

**Quick Reference:** Use these tokens consistently across your components to maintain the bold editorial style!
