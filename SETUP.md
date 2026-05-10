# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Customize Your Content

1. **Update personal information**:
   - Edit `components/Hero.tsx` for hero section
   - Edit `components/About.tsx` for about section
   - Edit `components/Contact.tsx` for contact information

2. **Update projects**:
   - Edit the `projects` array in `components/Projects.tsx`

3. **Update social links**:
   - Edit `components/Contact.tsx` and `components/Footer.tsx`

## Step 4: Build for Production

```bash
npm run build
npm start
```

## Step 5: Deploy

### Vercel (recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy

## Troubleshooting

### Build errors

- Run `npm install`
- Use Node.js 18+
- Clear `.next` and rebuild: `rm -rf .next && npm run build`

See [README.md](./README.md) for more detail.
