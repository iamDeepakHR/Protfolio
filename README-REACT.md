# Deepak H R - 3D Portfolio (React + Three.js)

A modern, interactive 3D portfolio website built with React, Three.js, and Tailwind CSS. Features advanced 3D animations, glassmorphism design, and smooth interactions.

## 🚀 Features

### 🎨 Design & UI
- **3D Interactive Background**: Animated floating cubes, glowing spheres, and particle systems
- **Glassmorphism Design**: Modern glass-like cards with backdrop blur effects
- **Neon Accents**: Cyan/blue gradient theme with glowing effects
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered scroll-triggered animations

### 🛠️ Technical Features
- **React 18** with TypeScript for type safety
- **Three.js** with React Three Fiber for 3D graphics
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Intersection Observer** for scroll animations
- **Performance Optimized** with lazy loading

### 📱 Sections
1. **Hero**: 3D animated introduction with neural network particles
2. **About**: Profile with 3D avatar and floating elements
3. **Skills**: Interactive skill cards with progress bars
4. **Projects**: 3D project carousel with flip animations
5. **Certificates**: Holographic certification badges
6. **Experience**: 3D timeline with glowing nodes
7. **Contact**: Interactive form with rotating social icons

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, TypeScript |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Styling** | Tailwind CSS, Custom CSS |
| **Animations** | Framer Motion, CSS Animations |
| **Build Tool** | Vite |
| **Deployment** | Vercel, Netlify, GitHub Pages |

## 📁 Project Structure

```
src/
├── components/
│   ├── 3D/
│   │   ├── Scene3D.tsx          # Main 3D scene
│   │   └── Hero3D.tsx           # Hero 3D elements
│   ├── Navigation.tsx           # Navigation component
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── Skills.tsx               # Skills section
│   ├── Projects.tsx              # Projects section
│   ├── Certificates.tsx         # Certificates section
│   ├── Experience.tsx            # Experience section
│   ├── Contact.tsx               # Contact section
│   ├── Footer.tsx                # Footer component
│   ├── ScrollToTop.tsx           # Scroll to top button
│   └── BackgroundMusic.tsx       # Music controls
├── App.tsx                       # Main app component
├── main.tsx                      # Entry point
└── index.css                     # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern browser with WebGL support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/deepak-hr-portfolio.git
   cd deepak-hr-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`)
   - Name and title
   - Subtitle text
   - Call-to-action buttons

2. **About Section** (`src/components/About.tsx`)
   - Personal description
   - Statistics
   - Skills icons

3. **Projects** (`src/components/Projects.tsx`)
   - Project details
   - Technologies used
   - Links to GitHub and demos

4. **Contact** (`src/components/Contact.tsx`)
   - Contact information
   - Social media links
   - Form handling

### Styling
- **Colors**: Update `tailwind.config.js` for custom color scheme
- **Fonts**: Change fonts in `index.html` and `tailwind.config.js`
- **Animations**: Modify animation timings in component files

### 3D Elements
- **Background**: Customize `src/components/3D/Scene3D.tsx`
- **Hero 3D**: Modify `src/components/3D/Hero3D.tsx`
- **Particles**: Adjust particle count and behavior
- **Lighting**: Change lighting setup in 3D components

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain available

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📱 Browser Support

- **Chrome**: 90+ (Full support)
- **Firefox**: 88+ (Full support)
- **Safari**: 14+ (Full support)
- **Edge**: 90+ (Full support)
- **Mobile**: iOS 14+, Android 10+

## ⚡ Performance

### Optimizations
- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Images and 3D components
- **Tree Shaking**: Unused code elimination
- **Bundle Analysis**: Built-in Vite analyzer

### 3D Performance
- **Frustum Culling**: Only render visible objects
- **Level of Detail**: Adjust quality based on device
- **Frame Rate**: 60fps target with fallbacks

## 🎵 Background Music

To add background music:
1. Add audio files to `public/assets/`
2. Update `src/components/BackgroundMusic.tsx`
3. Configure audio sources and controls

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (optional)

## 📊 Analytics

### Google Analytics
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Common Issues

1. **3D Background Not Loading**
   - Check browser WebGL support
   - Verify Three.js dependencies
   - Check console for errors

2. **Animations Not Working**
   - Ensure Framer Motion is installed
   - Check for JavaScript errors
   - Verify intersection observer support

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check TypeScript configuration
   - Verify all dependencies are installed

### Performance Issues
- Reduce particle count in 3D components
- Lower animation complexity on mobile
- Use `will-change` CSS property for animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Deepak H R**
- Email: deepakgowda6363@gmail.com
- LinkedIn: [Deepak H R](https://linkedin.com/in/deepak-hr)
- GitHub: [deepak-hr](https://github.com/deepak-hr)

---

*"Building intelligent systems, one model at a time."* - Deepak H R

## 🙏 Acknowledgments

- **Three.js** for amazing 3D graphics
- **React Three Fiber** for React integration
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development experience
