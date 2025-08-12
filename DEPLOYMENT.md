# Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio with automatic deployments from GitHub.

### Step 1: Prepare Your Repository

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Ensure your repository is public** (or connect your private repo to Vercel)

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository**
5. **Configure project settings:**
   - Framework Preset: Next.js
   - Root Directory: `./` (or leave empty)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Click "Deploy"**

### Step 3: Custom Domain (Optional)

1. **In Vercel Dashboard**, go to your project
2. **Settings → Domains**
3. **Add your custom domain**
4. **Update DNS settings** as instructed by Vercel

## 🌐 Netlify

### Step 1: Build Settings

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Node version:** 18 (or higher)

### Step 2: Deploy

1. **Connect your GitHub repository**
2. **Configure build settings**
3. **Deploy**

## 🐳 Docker

### Step 1: Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Step 2: Build and Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📱 Railway

1. **Connect your GitHub repository**
2. **Railway will auto-detect Next.js**
3. **Deploy automatically**

## 🔧 Environment Variables

If you're using the contact form with email services, add these to your deployment platform:

```env
# For SendGrid
SENDGRID_API_KEY=your_api_key_here

# For other email services
EMAIL_SERVICE_API_KEY=your_key_here
```

## 📊 Performance Optimization

### Before Deployment

1. **Optimize images**
   - Use Next.js Image component
   - Compress images
   - Use appropriate formats (WebP, AVIF)

2. **Check bundle size**
   ```bash
   npm run build
   # Check the build output for bundle analysis
   ```

3. **Test locally**
   ```bash
   npm run build
   npm start
   ```

### Post-Deployment

1. **Enable caching**
2. **Set up CDN** (if not using Vercel/Netlify)
3. **Monitor performance** with tools like:
   - Google PageSpeed Insights
   - WebPageTest
   - Lighthouse

## 🔍 SEO Setup

### 1. Update Meta Tags

Edit `src/app/layout.tsx` with your information:

```typescript
export const metadata: Metadata = {
  title: "Your Name - UI/UX Designer",
  description: "Your description here",
  // ... other meta tags
}
```

### 2. Add Google Analytics

1. **Install package**
   ```bash
   npm install @vercel/analytics
   ```

2. **Add to layout**
   ```typescript
   import { Analytics } from '@vercel/analytics/react'
   
   // Add inside body tag
   <Analytics />
   ```

### 3. Submit to Search Engines

- **Google Search Console**
- **Bing Webmaster Tools**
- **Submit sitemap** (if generated)

## 🛠️ Troubleshooting

### Common Issues

1. **Build fails**
   - Check Node.js version (18+)
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **Images not loading**
   - Check image paths
   - Ensure images are in `public/` directory
   - Use Next.js Image component

3. **Styling issues**
   - Check Tailwind CSS configuration
   - Ensure all CSS variables are defined
   - Clear browser cache

### Performance Issues

1. **Slow loading**
   - Optimize images
   - Enable compression
   - Use CDN

2. **Large bundle size**
   - Analyze with `npm run build`
   - Remove unused dependencies
   - Use dynamic imports

## 📈 Monitoring

### Set up monitoring tools:

1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics**
3. **Sentry** for error tracking
4. **Uptime monitoring** (UptimeRobot, Pingdom)

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🎯 Final Checklist

Before going live:

- [ ] All content is updated
- [ ] Contact form is functional
- [ ] Images are optimized
- [ ] Meta tags are set
- [ ] Social links work
- [ ] Mobile responsive
- [ ] Performance is good
- [ ] SEO is optimized
- [ ] Analytics is set up
- [ ] Domain is configured

## 📞 Support

If you encounter issues:

1. **Check the [Next.js documentation](https://nextjs.org/docs)**
2. **Review platform-specific docs** (Vercel, Netlify, etc.)
3. **Open an issue** in this repository

---

**Happy deploying! 🚀** 