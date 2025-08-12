# Shinezaya Myagmar - UI/UX Designer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases professional UI/UX design work with a beautiful, accessible, and performant design.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Optimized with Next.js 14 and Image optimization
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Beautiful project grid with hover effects
- **Testimonials**: Client feedback carousel
- **Blog Ready**: Structure ready for blog integration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles and CSS variables
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   └── button.tsx      # Button component
│   │   ├── navigation.tsx      # Navigation component
│   │   ├── hero-section.tsx    # Hero section
│   │   ├── about-section.tsx   # About section
│   │   ├── portfolio-section.tsx # Portfolio showcase
│   │   ├── testimonials-section.tsx # Client testimonials
│   │   ├── contact-section.tsx # Contact form
│   │   ├── footer.tsx          # Footer component
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   └── theme-toggle.tsx    # Theme toggle component
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Customization

### Colors & Theme

The design system uses CSS variables for easy customization. Edit `src/app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;        /* Main brand color */
  --secondary: 210 40% 96%;            /* Secondary color */
  --background: 0 0% 100%;             /* Background color */
  --foreground: 222.2 84% 4.9%;        /* Text color */
  /* ... more variables */
}
```

### Content Updates

#### Personal Information
Update your personal information in the following files:

1. **Hero Section** (`src/components/hero-section.tsx`):
   - Name: "Shinezaya"
   - Tagline: "UI/UX Designer"
   - Description: "Crafting beautiful, intuitive digital experiences..."

2. **About Section** (`src/components/about-section.tsx`):
   - Bio text
   - Skills and tools
   - Design philosophy
   - Experience highlights

3. **Contact Information** (`src/components/contact-section.tsx`):
   - Email: `hello@shinezaya.com`
   - Phone: `+1 (555) 123-4567`
   - Location: `San Francisco, CA`

#### Portfolio Projects
Update projects in `src/components/portfolio-section.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Web Design",
    description: "Project description...",
    image: "/path/to/image.jpg",
    technologies: ["Figma", "React", "TypeScript"],
    liveUrl: "https://project-url.com",
    githubUrl: "https://github.com/username/project",
    featured: true
  },
  // ... more projects
]
```

#### Testimonials
Update client testimonials in `src/components/testimonials-section.tsx`:

```typescript
const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Position",
    company: "Company",
    content: "Testimonial text...",
    rating: 5,
    avatar: "/path/to/avatar.jpg"
  },
  // ... more testimonials
]
```

#### Social Links
Update social media links in `src/components/footer.tsx`:

```typescript
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
    color: "hover:text-gray-600"
  },
  // ... more social links
]
```

### Images & Assets

1. **Add your images** to the `public/` directory
2. **Update image paths** in components
3. **Optimize images** using Next.js Image component for better performance

### Styling

The project uses Tailwind CSS with a custom design system. Key files:

- `tailwind.config.ts` - Tailwind configuration and custom animations
- `src/app/globals.css` - Global styles and CSS variables
- Component-specific styles are in each component file

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect your GitHub repo
- **DigitalOcean App Platform**: Deploy directly from GitHub

## 📧 Contact Form Setup

The contact form is currently set up for demonstration. To make it functional:

### Option 1: Email Service (Recommended)

1. **Install email service**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Create API route** (`src/app/api/contact/route.ts`):
   ```typescript
   import { NextResponse } from 'next/server'
   import sgMail from '@sendgrid/mail'

   sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

   export async function POST(request: Request) {
     try {
       const { name, email, message } = await request.json()
       
       const msg = {
         to: 'your-email@example.com',
         from: 'your-verified-sender@example.com',
         subject: `New Contact from ${name}`,
         text: message,
         html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
       }
       
       await sgMail.send(msg)
       return NextResponse.json({ success: true })
     } catch (error) {
       return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
     }
   }
   ```

3. **Update contact form** to use the API endpoint

### Option 2: Form Service

Use services like:
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- [Getform](https://getform.io/)

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Email Service (if using SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📊 Performance Optimization

The portfolio is optimized for performance:

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Images and components
- **Minification**: Automatic in production
- **Caching**: Static generation where possible

## 🔍 SEO & Analytics

### SEO Setup

The portfolio includes:
- Meta tags in `layout.tsx`
- Open Graph tags
- Twitter cards
- Structured data (can be added)

### Analytics

Add Google Analytics:

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

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Adding New Sections

1. Create new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/navigation.tsx`

### Adding Blog

The structure is ready for a blog. You can:

1. Use [Contentlayer](https://www.contentlayer.dev/) for markdown
2. Use [Sanity](https://www.sanity.io/) as a headless CMS
3. Create custom blog pages in `src/app/blog/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Open an issue in this repository

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) for UI components

---

**Made with ❤️ by Shinezaya Myagmar**

For questions or collaboration, reach out at hello@shinezaya.com
