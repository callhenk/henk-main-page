# Henk Design System

## Color Palette

### Primary Colors (HSL Values)
```css
/* Light Mode */
--background: 0 0% 100%;           /* Pure White */
--foreground: 220 13% 18%;         /* Dark Gray */
--primary: 220 13% 18%;            /* Dark Gray */
--primary-foreground: 0 0% 100%;   /* White */
--secondary: 0 0% 98%;             /* Very Light Gray */
--secondary-foreground: 220 13% 18%; /* Dark Gray */
--muted: 0 0% 98%;                /* Very Light Gray */
--muted-foreground: 220 13% 45%;  /* Medium Gray */
--accent: 220 13% 18%;            /* Dark Gray */
--accent-foreground: 0 0% 100%;   /* White */
--border: 220 13% 90%;            /* Light Gray */
--input: 220 13% 90%;             /* Light Gray */
--ring: 220 13% 18%;              /* Dark Gray */

/* Dark Mode */
--background: 220 13% 8%;          /* Very Dark Gray */
--foreground: 0 0% 100%;           /* White */
--primary: 220 13% 18%;            /* Dark Gray */
--primary-foreground: 0 0% 100%;   /* White */
--secondary: 220 13% 12%;          /* Dark Gray */
--secondary-foreground: 0 0% 100%; /* White */
--muted: 220 13% 12%;             /* Dark Gray */
--muted-foreground: 220 13% 65%;  /* Light Gray */
--accent: 220 13% 12%;            /* Dark Gray */
--accent-foreground: 0 0% 100%;   /* White */
--border: 220 13% 15%;            /* Medium Dark Gray */
--input: 220 13% 15%;             /* Medium Dark Gray */
--ring: 220 13% 18%;              /* Dark Gray */
```

### Hex Color Equivalents
```css
/* Light Mode */
--background: #FFFFFF;              /* Pure White */
--foreground: #2D3748;             /* Dark Gray */
--primary: #2D3748;                /* Dark Gray */
--primary-foreground: #FFFFFF;      /* White */
--secondary: #FAFAFA;              /* Very Light Gray */
--secondary-foreground: #2D3748;   /* Dark Gray */
--muted: #FAFAFA;                  /* Very Light Gray */
--muted-foreground: #718096;       /* Medium Gray */
--accent: #2D3748;                 /* Dark Gray */
--accent-foreground: #FFFFFF;      /* White */
--border: #E2E8F0;                /* Light Gray */
--input: #E2E8F0;                 /* Light Gray */
--ring: #2D3748;                  /* Dark Gray */

/* Dark Mode */
--background: #1A202C;             /* Very Dark Gray */
--foreground: #FFFFFF;             /* White */
--primary: #2D3748;                /* Dark Gray */
--primary-foreground: #FFFFFF;      /* White */
--secondary: #2D3748;              /* Dark Gray */
--secondary-foreground: #FFFFFF;    /* White */
--muted: #2D3748;                  /* Dark Gray */
--muted-foreground: #A0AEC0;       /* Light Gray */
--accent: #2D3748;                 /* Dark Gray */
--accent-foreground: #FFFFFF;      /* White */
--border: #4A5568;                 /* Medium Dark Gray */
--input: #4A5568;                  /* Medium Dark Gray */
--ring: #2D3748;                   /* Dark Gray */
```

## Typography System

### Font Families

#### 1. Inter (Primary UI Font)
```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```
- **Usage**: Body text, UI elements, buttons, forms
- **Weights**: 300, 400, 500, 600, 700
- **Primary Weight**: 400 (Regular)

#### 2. Poppins (Display Font)
```css
font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```
- **Usage**: Headings (H1-H6), Logo text, Display text
- **Weights**: 400, 500, 600, 700
- **Primary Weight**: 600 (SemiBold)
- **Letter Spacing**: -0.025em

#### 3. JetBrains Mono (Monospace Font)
```css
font-family: "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
```
- **Usage**: Numeric data, code, technical information
- **Weights**: 400, 500, 600
- **Primary Weight**: 500 (Medium)

### Font Classes

#### `.font-display`
```css
.font-display {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```
- **Usage**: All headings, display text, hero titles

#### `.font-logo`
```css
.font-logo {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 600;
  letter-spacing: -0.025em;
}
```
- **Usage**: Brand name "Henk", logo text

#### `.font-numeric`
```css
.font-numeric {
  font-family: "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
  font-weight: 500;
}
```
- **Usage**: Prices, statistics, technical data

#### `.font-mono`
```css
.font-mono {
  font-family: "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
}
```
- **Usage**: Code snippets, technical information

### Typography Scale

#### Headings
```css
h1, h2, h3, h4, h5, h6 {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 600;
  letter-spacing: -0.025em;
}
```

#### Body Text
```css
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

## Design Principles

### Color Usage Rules
1. **High Contrast**: Dark gray (#2D3748) on white backgrounds for maximum readability
2. **Minimal Palette**: Stick to the defined color system - no additional accent colors
3. **No Gradients**: Avoid gradients to maintain minimalist aesthetic
4. **Opacity Tints**: Use opacity variations for hover states and subtle effects
5. **Accessibility**: Ensure sufficient contrast ratios (WCAG AA compliant)

### Typography Rules
1. **Hierarchy**: Use Poppins for headings, Inter for body text
2. **Consistency**: Maintain consistent font weights and letter spacing
3. **Readability**: Ensure adequate line height and spacing
4. **Responsive**: Scale typography appropriately for different screen sizes

### Component Guidelines
1. **Buttons**: Rounded 8px corners, consistent padding
2. **Cards**: Subtle borders, clean backgrounds
3. **Spacing**: Use consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px)
4. **Animations**: 120ms ease-out transitions for micro-interactions

## Implementation for Dashboard

### CSS Variables (Copy to your dashboard)
```css
:root {
  /* Colors */
  --background: 0 0% 100%;
  --foreground: 220 13% 18%;
  --primary: 220 13% 18%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 98%;
  --secondary-foreground: 220 13% 18%;
  --muted: 0 0% 98%;
  --muted-foreground: 220 13% 45%;
  --accent: 220 13% 18%;
  --accent-foreground: 0 0% 100%;
  --border: 220 13% 90%;
  --input: 220 13% 90%;
  --ring: 220 13% 18%;
  
  /* Typography */
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-display: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
}
```

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
    },
  },
}
``` 