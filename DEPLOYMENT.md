# Deployment Guide

This guide covers different ways to deploy your portfolio website.

## 🚀 GitHub Pages (Recommended)

GitHub Pages is free and perfect for static websites like this portfolio.

### Steps:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access your site**:
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes to deploy

### Custom Domain (Optional):
- Add a `CNAME` file with your domain name
- Configure DNS settings with your domain provider

## 🌐 Netlify

Netlify offers continuous deployment and great performance.

### Steps:

1. **Connect GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository

2. **Deploy Settings**:
   - Build command: (leave empty for static sites)
   - Publish directory: (leave empty, uses root)
   - Click "Deploy site"

3. **Custom Domain**:
   - Go to Site settings > Domain management
   - Add your custom domain

## ⚡ Vercel

Vercel provides fast global CDN and easy deployment.

### Steps:

1. **Import Project**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub

2. **Deploy**:
   - Configure project (usually auto-detected)
   - Click "Deploy"

3. **Custom Domain**:
   - Go to Project settings > Domains
   - Add your domain

## 📁 Traditional Web Hosting

For traditional hosting providers:

1. **Prepare files**:
   - Ensure all paths are relative
   - Test locally first

2. **Upload**:
   - Use FTP/SFTP to upload all files
   - Maintain folder structure

3. **Configure**:
   - Set `index.html` as default page
   - Ensure proper MIME types for audio files

## 🔧 Pre-deployment Checklist

- [ ] Test all links and functionality locally
- [ ] Verify responsive design on different devices
- [ ] Check that all images load properly
- [ ] Test music player (with and without audio files)
- [ ] Validate HTML and CSS
- [ ] Update any hardcoded URLs to relative paths
- [ ] Test theme toggle functionality
- [ ] Verify Google Analytics is working (if enabled)

## 🎵 Audio Files Note

If you want to include audio files:
- Add them to `assets/audio/` folder
- Ensure file names match those in `js/script.js`
- Consider file sizes for loading performance
- Test on different browsers and devices

If you don't include audio files, the music player will gracefully fall back to demo mode.

## 📊 Performance Tips

- **Optimize Images**: Compress images before uploading
- **Enable Gzip**: Most hosting providers enable this by default
- **Use CDN**: Services like Netlify and Vercel include CDN
- **Monitor Performance**: Use tools like Google PageSpeed Insights

## 🐛 Troubleshooting

### Common Issues:

1. **Music player not working**:
   - Check audio file paths
   - Verify file formats (MP3 recommended)
   - Test in different browsers

2. **Images not loading**:
   - Verify image paths are correct
   - Check file extensions match
   - Ensure images are uploaded

3. **Styling issues**:
   - Check CSS file path
   - Verify all CSS files are uploaded
   - Test in different browsers

4. **Mobile responsiveness**:
   - Test on actual devices
   - Use browser dev tools
   - Check viewport meta tag

## 📞 Support

If you encounter issues:
- Check browser console for errors
- Validate HTML/CSS
- Test in different browsers
- Review deployment provider documentation