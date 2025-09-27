# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark theme with smooth animations and responsive design.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
my-portfolio/
├── app/                    # Next.js pages
├── components/             # Reusable components
│   ├── Layout/            # Layout components
│   └── UI/                # UI components
├── data/                  # Content data
├── lib/                   # Utilities
├── types/                 # TypeScript types
└── public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open** `http://localhost:3000` in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Content Management

All content is managed through `data/portfolio.json`. Update the following sections:

- **Profile**: Personal information and social links
- **Projects**: Portfolio projects with images and links
- **Timeline**: Work experience and education
- **Skills**: Technical skills organized by category

### Adding Projects

Add new projects to the `projects` array in `data/portfolio.json`:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "shortDescription": "Brief description",
  "longDescription": "Detailed description",
  "role": "Your Role",
  "year": "2023",
  "tags": ["React", "TypeScript"],
  "coverImage": "/images/projects/project-cover.jpg",
  "links": {
    "live": "https://project-demo.com",
    "github": "https://github.com/username/project"
  },
  "featured": true
}
```

### Images

- Place project images in `public/images/projects/`
- Add your avatar as `public/images/avatar.jpg`
- Update resume at `public/resume.pdf`

## Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
npm run start
```

## License

MIT License
