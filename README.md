# Personal Portfolio Website

A beautiful, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website serves as both a portfolio showcase and a platform to sell web development services.

## Features

- 🎨 **Beautiful & Elegant Design** - Modern UI with smooth animations and gradients
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 14 App Router
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌓 **Dark mode** - Theme toggle with persisted preference
- 🎯 **SEO Optimized** - Built with SEO best practices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects showcase (data lives here)
│   ├── Services.tsx      # Services section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
└── lib/
    └── models/
        └── Project.ts    # Project TypeScript type
```

## Customization

### Update personal information

Edit the following components:

- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Contact.tsx` - Contact information

### Add or edit projects

Edit the `projects` array at the top of `components/Projects.tsx`.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy (no database env vars required)

### Other platforms

This Next.js app can be deployed to any platform that supports Next.js: Netlify, Railway, AWS Amplify, DigitalOcean App Platform, etc.

## License

MIT License - feel free to use this for your own portfolio!
