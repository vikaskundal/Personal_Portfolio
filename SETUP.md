# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up MongoDB (Optional but Recommended)

### Option A: MongoDB Atlas (Cloud - Free Tier Available)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (free tier available)
4. Create a database user
5. Get your connection string (it will look like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Add your connection string to `.env.local`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
```

### Option B: Skip Database (Use Default Projects)

If you don't want to set up MongoDB right now, the website will work fine using the default projects hardcoded in the `Projects` component. You can add MongoDB later.

## Step 3: Create Environment File

Create a `.env.local` file in the root directory:

```bash
# If using MongoDB
MONGODB_URI=your_mongodb_connection_string_here

# If not using MongoDB, leave it empty or omit the file
# The website will still work with default projects
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Customize Your Content

1. **Update Personal Information**:
   - Edit `components/Hero.tsx` for hero section
   - Edit `components/About.tsx` for about section
   - Edit `components/Contact.tsx` for contact information

2. **Update Projects**:
   - If using MongoDB: Use the API at `/api/projects` to add projects
   - If not using MongoDB: Edit `components/Projects.tsx` and update the `defaultProjects` array

3. **Update Social Links**:
   - Edit `components/Contact.tsx` for social media links
   - Edit `components/Footer.tsx` for footer social links

4. **Update Email**:
   - Replace `vikas.kundal@example.com` with your actual email in `components/Contact.tsx` and `components/Footer.tsx`

## Step 6: Build for Production

```bash
npm run build
npm start
```

## Step 7: Deploy

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add your `MONGODB_URI` environment variable in Vercel settings
5. Deploy!

### Other Deployment Options

- **Netlify**: Connect your GitHub repo and add environment variables
- **Railway**: Import your repo and add MongoDB URI
- **AWS Amplify**: Connect your repo and configure build settings

## Troubleshooting

### MongoDB Connection Issues

- Make sure your MongoDB URI is correct
- Check if your IP address is whitelisted in MongoDB Atlas
- Verify your database user credentials
- The website will still work without MongoDB using default projects

### Build Errors

- Make sure all dependencies are installed: `npm install`
- Check Node.js version (requires Node.js 18+)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## Need Help?

Check the main [README.md](./README.md) for more detailed information.
