# Portfolio Website

A stunning dark-mode portfolio website with an orange-first color system, featuring smooth animations, responsive layouts, and a comprehensive component system. Built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This portfolio website showcases a creative developer's work with a focus on premium design, smooth micro-interactions, and excellent user experience. The site features a dark cinematic theme with vibrant orange accents, comprehensive project showcases, and a clean, modern interface.

## Color System

The website uses an orange-first color palette with supporting accents:

- **Primary Orange**: `rgb(255, 122, 69)` - Main accent for buttons, links, and highlights
- **Orange Emphasis**: `rgb(230, 92, 45)` - Hover states and active elements
- **Supporting Blue**: `rgb(88, 135, 255)` - Secondary accent for gradients
- **Supporting Amber**: `rgb(255, 189, 46)` - Warm accent for details
- **Supporting Teal**: `rgb(45, 212, 191)` - Cool accent for UI elements

The color system is tokenized in `lib/design-tokens.ts` and can be easily modified. The site supports both Pure and Atmospheric modes with different visual effects.

## Visual Map of Repository Structure

```
portfolio-website/
├── app/                          # Next.js App Router pages
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── work/                    # Work/Portfolio page
│   └── contact/                 # Contact page
├── components/                  # Reusable React components
│   ├── Layout/                  # Layout components
│   │   ├── Layout.tsx           # Main layout wrapper
│   │   ├── Navbar.tsx           # Navigation bar
│   │   └── Footer.tsx           # Site footer
│   └── UI/                      # UI components
│       ├── Button.tsx            # Button component
│       ├── ProjectCard.tsx      # Project showcase card
│       ├── SectionHeader.tsx    # Section headers
│       ├── Badge.tsx            # Badge/tag component
│       ├── ThemeToggle.tsx      # Theme mode switcher
│       └── ScrollToTop.tsx      # Scroll to top button
├── data/                        # Content and data files
│   └── portfolio.json           # Portfolio content data
├── lib/                         # Utility libraries
│   └── design-tokens.ts         # Design system tokens
├── types/                       # TypeScript type definitions
│   └── portfolio.ts             # Portfolio data types
├── styles/                      # Global styles
│   └── globals.css              # Global CSS (moved to app/)
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## Local Development Setup

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm package manager

### Installation Steps

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Resume Setup

1. **Place your resume file** at `public/resume.pdf`
2. **Replace the placeholder** with your actual resume PDF
3. **The resume will be accessible from**:
   - Main navbar (opens in new tab)
   - About page (Download Resume button)
   - Footer (Resume link)

### Experience Section

The Experience section is located on the Home page with the ID `experience`. The hero "View Experience" button smoothly scrolls to this section. To modify the experience content:

1. Edit the `timeline` array in `data/portfolio.json`
2. Each entry should include: `title`, `organization`, `period`, `description`, and `highlights`
3. The section will automatically update with your changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Content Management

### Adding or Updating Projects

Edit the `data/portfolio.json` file to manage your portfolio content:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "title": "Project Title",
      "shortDescription": "Brief project description",
      "longDescription": "Detailed project description",
      "role": "Your Role",
      "year": "2023",
      "tags": ["React", "TypeScript", "Next.js"],
      "coverImage": "/images/projects/project-cover.jpg",
      "gallery": ["/images/projects/project-1.jpg"],
      "links": {
        "live": "https://project-demo.com",
        "github": "https://github.com/username/project"
      },
      "featured": true
    }
  ]
}
```

### Updating Skills

Modify the skills section in `data/portfolio.json`:

```json
{
  "skills": {
    "frontend": ["React", "TypeScript", "Next.js"],
    "backend": ["Node.js", "Python", "PostgreSQL"],
    "mobile": ["React Native", "Flutter"],
    "design": ["Figma", "Sketch", "Adobe Creative Suite"],
    "tools": ["Git", "Docker", "AWS"]
  }
}
```

### Managing Timeline/Experience

Update the timeline entries in `data/portfolio.json`:

```json
{
  "timeline": [
    {
      "title": "Job Title",
      "organization": "Company Name",
      "period": "2022 - Present",
      "description": "Job description",
      "highlights": [
        "Key achievement 1",
        "Key achievement 2"
      ]
    }
  ]
}
```

### Updating Profile Information

Modify the profile section in `data/portfolio.json`:

```json
{
  "profile": {
    "name": "Your Name",
    "role": "Your Role",
    "bio": "Your bio",
    "location": "Your Location",
    "email": "your@email.com",
    "phone": "+1 (555) 123-4567",
    "social": {
      "github": "https://github.com/username",
      "linkedin": "https://linkedin.com/in/username",
      "twitter": "https://twitter.com/username",
      "dribbble": "https://dribbble.com/username"
    },
    "avatar": "/images/avatar.jpg"
  }
}
```

## Image Guidelines

### Recommended Specifications

- **Avatar/Profile Images**: 400x400px, WebP or JPEG format
- **Project Cover Images**: 600x400px (3:2 aspect ratio), WebP or JPEG format
- **Project Gallery Images**: 800x600px minimum, WebP or JPEG format
- **OG/Social Images**: 1200x630px, JPEG format

### Image Optimization

- Use WebP format for better compression
- Provide multiple sizes for responsive images
- Optimize images before adding to the project
- Consider using Next.js Image component for automatic optimization

### File Structure

```
public/
├── images/
│   ├── avatar.jpg              # Profile picture
│   ├── projects/               # Project images
│   │   ├── project-cover.jpg
│   │   └── project-gallery.jpg
│   └── testimonials/           # Testimonial avatars
│       └── testimonial-1.jpg
└── og-image.jpg                # Social media preview image
```

## Accessibility Features

### Implemented Features

- ✅ Semantic HTML structure with proper landmarks
- ✅ Keyboard navigation support (Tab, Enter, Space)
- ✅ Visible focus indicators with orange accent color
- ✅ Alt text for all images
- ✅ ARIA labels for interactive elements
- ✅ Color contrast meets WCAG AA standards
- ✅ Responsive design for all screen sizes
- ✅ Skip links for main content navigation

### Motion and Animation

- ✅ Respects `prefers-reduced-motion` setting
- ✅ Smooth transitions with appropriate durations
- ✅ Reduced motion support for accessibility
- ✅ Focus management during animations
- ✅ Subtle hover effects with proper contrast

### Keyboard Support

- **Buttons**: Activate with Enter or Space key
- **Links**: Navigate with Enter key
- **Focus Management**: Clear focus indicators on all interactive elements
- **Tab Order**: Logical tab sequence throughout the site
- **Skip Links**: Available for main content navigation

### Testing Recommendations

1. **Keyboard Navigation**: Test all interactive elements using Tab key
2. **Screen Reader**: Test with screen reader software
3. **Color Contrast**: Use tools like WebAIM contrast checker
4. **Mobile Accessibility**: Test on various mobile devices
5. **Motion Preferences**: Test with reduced motion enabled

## Design System

### Color Palette

- **Base Black**: `rgb(10, 12, 14)` - Primary background
- **Surface 1**: `rgb(16, 19, 23)` - Card and section backgrounds
- **Surface 2**: `rgb(22, 26, 31)` - Elevated surfaces
- **Text High**: `rgb(230, 233, 239)` - Primary text color
- **Text Muted**: `rgb(160, 168, 178)` - Secondary text color
- **Accent Orange**: `rgb(255, 122, 69)` - Primary accent color
- **Orange Emphasis**: `rgb(230, 92, 45)` - Hover states
- **Supporting Blue**: `rgb(88, 135, 255)` - Secondary accent
- **Supporting Amber**: `rgb(255, 189, 46)` - Warm accent
- **Supporting Teal**: `rgb(45, 212, 191)` - Cool accent

### Typography Scale

- **H1**: 36-44px (Hero headings)
- **H2**: 28-34px (Section headings)
- **H3**: 24-28px (Subsection headings)
- **Body**: 14-16px (Body text)
- **Small**: 12-14px (Captions and labels)

### Spacing System

Based on 8px grid system:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

## Performance Optimization

### Implemented Features

- ✅ Next.js Image optimization
- ✅ Font loading optimization
- ✅ Code splitting and lazy loading
- ✅ Optimized bundle size
- ✅ Responsive images
- ✅ Modern image formats (WebP, AVIF)

### Monitoring

- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Test on various devices and network conditions
- Optimize images and assets regularly

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

This project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform supporting Node.js

For production deployment, run:
```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
