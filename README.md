# Deepak H R - 3D Portfolio Website

A modern, responsive 3D personal portfolio website built with Three.js, featuring interactive 3D backgrounds, glassmorphism design, and smooth animations.

## 🚀 Features

- **3D Interactive Background**: Animated floating cubes, glowing spheres, and particle systems
- **Glassmorphism Design**: Modern glass-like cards with backdrop blur effects
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Elements**: 3D rotating icons, progress bars, and timeline
- **Background Music**: Optional background music with toggle control
- **Modern UI/UX**: Dark theme with neon accents and gradient effects

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Advanced styling with glassmorphism, gradients, and animations
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Three.js**: 3D graphics and WebGL rendering
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Dark gradient background (#0a0a0a to #16213e)
- **Accent**: Cyan/Blue gradient (#00ffff to #0080ff)
- **Glass Effect**: Semi-transparent white with backdrop blur

### Sections
1. **Hero**: 3D animated introduction with floating elements
2. **About**: Profile summary with 3D avatar and statistics
3. **Skills**: Animated skill cards with progress bars
4. **Projects**: 3D flipping cards showcasing key projects
5. **Certificates**: Holographic certification badges
6. **Experience**: Timeline with glowing nodes
7. **Contact**: Interactive form with 3D rotating icons

## 🚀 Getting Started

### Prerequisites
- Modern web browser with WebGL support
- Local web server (for development)

### Installation

1. **Clone or download** the project files
2. **Open** `index.html` in a modern web browser
3. **For development**, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Deployment Options

#### GitHub Pages
1. Create a new repository on GitHub
2. Upload all project files to the repository
3. Go to Settings > Pages
4. Select source branch and save
5. Your site will be available at `https://username.github.io/repository-name`

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

#### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Deploy automatically

## 🎯 Customization

### Personal Information
Update the following in `index.html`:
- Name and title in hero section
- About section content
- Skills and technologies
- Project details and links
- Contact information
- Social media links

### Styling
Modify `styles.css` to customize:
- Color scheme and gradients
- Typography and fonts
- Animation timings
- Layout and spacing

### 3D Elements
Adjust `script.js` to modify:
- 3D background elements
- Animation speeds and patterns
- Interactive behaviors
- Performance settings

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ⚡ Performance Optimization

- **Lazy Loading**: Images and animations load on scroll
- **Throttled Events**: Scroll and resize events are optimized
- **Efficient Rendering**: Three.js animations use requestAnimationFrame
- **Minified Assets**: Production-ready code structure

## 🎵 Background Music

To add background music:
1. Add an audio file (MP3 format) to the project
2. Update the audio source in `index.html`:
   ```html
   <source src="path/to/your/audio.mp3" type="audio/mpeg">
   ```

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📞 Contact

**Deepak H R**
- Email: deepak.hr@email.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

*"Building intelligent systems, one model at a time."* - Deepak H R
