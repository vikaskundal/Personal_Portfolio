# Personal Portfolio Website

A beautiful, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website serves as both a portfolio showcase and a platform to sell web development services.

## Features

- 🎨 **Beautiful & Elegant Design** - Modern UI with smooth animations and gradients
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 14 App Router
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🗄️ **MongoDB Integration** - Database support for projects management
- 🎯 **SEO Optimized** - Built with SEO best practices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── projects/     # API routes for projects CRUD
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects showcase
│   ├── Services.tsx      # Services section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
└── lib/
    ├── mongodb.ts        # MongoDB connection
    └── models/
        └── Project.ts    # Project model/types
```

## Customization

### Update Personal Information

Edit the following components to update your information:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Contact.tsx` - Contact information

### Add Projects

Projects can be added in two ways:

1. **Via Default Projects** - Edit `components/Projects.tsx` to update the `defaultProjects` array
2. **Via API** - Use the `/api/projects` endpoint to add projects dynamically

### MongoDB Setup

1. Create a MongoDB Atlas account (free tier available)
2. Create a cluster and get your connection string
3. Add the connection string to `.env.local` as `MONGODB_URI`
4. The database will be created automatically when you first add a project

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your `MONGODB_URI` environment variable in Vercel settings
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## License

MIT License - feel free to use this for your own portfolio!
