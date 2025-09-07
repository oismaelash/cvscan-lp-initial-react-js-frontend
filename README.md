# Landing Page Ash - React Frontend

A modern, responsive landing page built with React for a CV analysis service powered by Artificial Intelligence. This application helps technology professionals optimize their resumes to stand out to recruiters.

## 🚀 Features

- **AI-Powered CV Analysis**: Get personalized feedback on your resume using artificial intelligence
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Components**: Smooth scrolling and animated sections
- **Typebot Integration**: Embedded chatbot for user interaction
- **Modern UI/UX**: Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **React 18.3.1** - Frontend framework
- **React Router DOM** - Client-side routing
- **Typebot.io** - Chatbot integration
- **CSS3** - Styling with custom animations
- **Webpack** - Module bundling
- **Create React App** - Development environment

## 📁 Project Structure

```
src/
├── components/
│   ├── Beneficios/          # Benefits section with animated cards
│   ├── Footer/              # Footer component
│   ├── LandingPage/         # Main hero section
│   └── ResponsiveIframe.jsx # Embedded iframe component
├── App.jsx                  # Main application component
├── App.css                  # Global styles
└── index.jsx               # Application entry point
```

## 🎯 Key Components

### LandingPage
- Hero section with compelling call-to-action
- CV optimization messaging
- Smooth scroll functionality to iframe

### Beneficios
- Four key benefits with animated reveal
- Intersection Observer for scroll animations
- Alternating left/right layout

### ResponsiveIframe
- Embedded Typebot chatbot
- Responsive design with proper aspect ratio
- Camera and microphone permissions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landingpageash-react-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📜 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for best performance.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**

Ejects from Create React App to get full control over the build configuration.

## 🎨 Customization

### Adding New Benefits
Edit `src/components/Beneficios/index.jsx` and modify the `beneficiosData` array:

```javascript
const beneficiosData = [
  {
    title: 'Your Benefit Title',
    description: 'Your benefit description',
    imgSrc: './img/your-image.png',
  },
  // Add more benefits...
];
```

### Styling
- Global styles: `src/App.css`
- Component-specific styles: Each component has its own CSS file
- Responsive breakpoints are defined in component CSS files

## 🔧 Configuration

### Typebot Integration
The iframe source is configured in `src/App.jsx`:
```javascript
<ResponsiveIframe src="https://cv.minhaentrevista.com.br/" ref={iframeRef} />
```

### Webpack Configuration
Custom webpack configuration is available in `webpack.config.js` for advanced build customization.

## 📱 Responsive Design

The application is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Responsive images and iframes
- Touch-friendly interactions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **Traditional hosting**: Upload the `build` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support and questions, please contact the development team.

---

Built with ❤️ using React and modern web technologies.
