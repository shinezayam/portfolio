# 🎨 Portfolio Editing Guide

## 📝 How to Edit Your Portfolio Information

### 🚀 Quick Start
1. Open `portfolio/public/index.html` in any text editor (VS Code, Notepad++, etc.)
2. Find the section you want to edit
3. Make your changes
4. Save the file
5. Refresh your browser to see changes

---

## 📋 What You Can Edit

### 👤 **Personal Information**
**Location:** Around line 903-904
```html
<h1 class="floating">Shinezaya Myagmar</h1>
<h2>UI/UX Designer & Creative Developer</h2>
```

### 📖 **About Me Section**
**Location:** Around line 924-925
```html
<p>Hello! I'm Shinezaya, a passionate UI/UX designer with 5+ years of experience creating digital experiences that users love. I believe great design should be invisible yet unforgettable - every pixel, every interaction, and every decision serves a purpose in creating meaningful user experiences.</p>
<p>My journey in design started with a fascination for how technology can enhance human experiences. Today, I specialize in creating intuitive interfaces, conducting user research, and building design systems that scale.</p>
```

### 🛠️ **Skills Section**
**Location:** Around line 928-935
```html
<div class="skills">
    <span class="skill">Figma</span>
    <span class="skill">Adobe XD</span>
    <span class="skill">Photoshop</span>
    <span class="skill">Illustrator</span>
    <span class="skill">Sketch</span>
    <span class="skill">Prototyping</span>
    <span class="skill">User Research</span>
    <span class="skill">Design Systems</span>
</div>
```

### 🎨 **Portfolio Projects**
**Location:** Around line 947-1050
Each project has this structure:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="YOUR_IMAGE_URL" alt="Project Name">
    </div>
    <div class="portfolio-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="skills">
            <span class="skill">Skill 1</span>
            <span class="skill">Skill 2</span>
        </div>
    </div>
</div>
```

### 💬 **Testimonials**
**Location:** Around line 1050-1087
Each testimonial has this structure:
```html
<div class="testimonial-card">
    <div class="testimonial-content">
        "Client testimonial text..."
    </div>
    <div class="testimonial-author">
        <div class="author-avatar">
            <img src="CLIENT_PHOTO_URL" alt="Client Name">
        </div>
        <div class="author-info">
            <h4>Client Name</h4>
            <p>Client Title, Company</p>
        </div>
    </div>
</div>
```

### 📧 **Contact Information**
**Location:** Around line 1120-1135
```html
<a href="mailto:YOUR_EMAIL" class="social-link" title="Email">
<a href="https://linkedin.com/in/YOUR_LINKEDIN" class="social-link" title="LinkedIn">
<a href="https://twitter.com/YOUR_TWITTER" class="social-link" title="Twitter">
<a href="https://instagram.com/YOUR_INSTAGRAM" class="social-link" title="Instagram">
```

---

## 🖼️ **Adding Images**

### Profile Picture
- Place your image in the `portfolio/Photos/` folder
- Update the path in the HTML: `src="Photos/YOUR_IMAGE_NAME.jpg"`

### Portfolio Images
- Add project images to `portfolio/Photos/` folder
- Update image paths in portfolio items

### Client Photos
- Add client photos to `portfolio/Photos/` folder
- Update image paths in testimonials

---

## 🎨 **Customizing Colors**

**Location:** Around line 15-25
```css
:root {
    --primary: #667eea;    /* Main blue color */
    --secondary: #764ba2;  /* Purple color */
    --accent: #f093fb;     /* Pink accent */
    --text: #2d3748;       /* Dark text */
    --text-light: #718096; /* Light text */
    --bg: #ffffff;         /* Background */
}
```

---

## 🔧 **Common Edits**

### Change Your Name
Search for "Shinezaya Myagmar" and replace with your name

### Change Your Title
Search for "UI/UX Designer & Creative Developer" and replace

### Add New Skills
Find the skills section and add new `<span class="skill">New Skill</span>`

### Add New Projects
Copy an existing portfolio item and modify the content

### Change Social Links
Find the social links section and update the URLs

---

## 💡 **Tips**

1. **Backup your file** before making major changes
2. **Test changes** by refreshing your browser
3. **Keep image sizes reasonable** (under 1MB for faster loading)
4. **Use descriptive alt text** for accessibility
5. **Check spelling** before publishing

---

## 🚀 **Publishing**

After making changes:
1. Save the file
2. Test locally by opening `index.html` in your browser
3. Upload to your hosting service (Vercel, Netlify, etc.)

---

## 🆘 **Need Help?**

If something breaks:
1. Check that all HTML tags are properly closed
2. Verify image paths are correct
3. Make sure quotes are properly matched
4. Try refreshing your browser cache (Ctrl+F5)

---

**Happy editing! 🎉** 