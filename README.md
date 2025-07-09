# Tapiwa Mathew Muwomo - Professional Portfolio

A modern, responsive portfolio website showcasing my expertise as a Salesforce Marketing Cloud Developer and Full-Stack Salesforce Professional.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme Toggle**: User-friendly theme switching
- **Interactive Music Player**: Background music with controls (when audio files are available)
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Professional Sections**: 
  - Professional Summary
  - Core Skills
  - Key Achievements
  - Professional Experience
  - Education & Community Work
  - Certifications (9 Salesforce certifications)
  - Portfolio Projects

## 🚀 Live Demo

Visit the live website: [tapiwamathewmuwomo.online](https://www.tapiwamathewmuwomo.online/)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables for theming
- **Animations**: AOS (Animate On Scroll) library
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Open Sans, Rajdhani)
- **Analytics**: Google Analytics (gtag)

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling and theme variables
├── js/
│   └── script.js          # Interactive functionality
├── assets/
│   ├── audio/             # Audio files for music player
│   ├── *.jpeg             # Favicon and app icons
│   ├── favicon.ico        # Browser favicon
│   └── site.webmanifest   # PWA manifest
└── README.md              # This file
```

## 🎵 Music Player

The website includes an interactive music player that:
- Appears as a compact widget in the bottom-right corner
- Expands on hover to show full controls
- Hides automatically when scrolling down
- Supports multiple tracks (when audio files are provided)
- Gracefully falls back to demo mode if audio files are unavailable

### Adding Audio Files

To enable the music player with your own audio:

1. Create the `assets/audio/` directory
2. Add your audio files:
   - `Snowfall_and_you_relax.mp3` (primary track)
   - Additional tracks as needed
3. Update the track list in `js/script.js` if adding more songs

## 🎨 Customization

### Theme Colors
The website uses CSS custom properties for easy theming. Main color variables are defined in `:root` in `style.css`:

```css
--primary-bg: #0d1117;
--accent-blue: #58a6ff;
--accent-green: #3fb950;
/* ... and more */
```

### Content Updates
- **Personal Information**: Update in `index.html`
- **Skills & Certifications**: Modify the respective sections
- **Portfolio Projects**: Add/edit projects in the portfolio section
- **Contact Links**: Update social media and contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (480px - 768px)
- Small Mobile (<480px)

## 🔧 Setup & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Open locally**:
   - Simply open `index.html` in your browser
   - Or use a local server like Live Server in VS Code

3. **Deploy**:
   - GitHub Pages: Enable in repository settings
   - Netlify: Connect your GitHub repository
   - Vercel: Import your GitHub project

## 📈 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Assets**: Compressed images and efficient CSS
- **Smooth Animations**: Hardware-accelerated transitions
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🏆 Certifications Showcased

- Salesforce Certified Administrator
- Salesforce Certified Marketing Cloud Email Specialist
- Salesforce Certified Marketing Cloud Account Engagement Specialist
- Salesforce Certified Marketing Cloud Developer
- Salesforce Certified Data Cloud Consultant
- Salesforce Certified Platform Developer I
- Salesforce Certified Platform App Builder
- Salesforce Certified OmniStudio Consultant
- Salesforce Certified Service Cloud Consultant

## 📞 Contact

- **Email**: muwomotapiwa@gmail.com
- **LinkedIn**: [mathew-muwomo](https://linkedin.com/in/mathew-muwomo)
- **Salesforce Trailblazer**: [mathewmuwomo](https://www.salesforce.com/trailblazer/mathewmuwomo)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Tapiwa Mathew Muwomo**