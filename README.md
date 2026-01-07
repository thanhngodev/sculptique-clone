# Sculptique Clone

A responsive e-commerce website clone for Sculptique, a health and wellness product company. This project showcases a product landing page for their Lymphatic Drainage Capsules with a modern, clean design.

🌐 **Live Demo**: [https://sculptique-clone.vercel.app/](https://sculptique-clone.vercel.app/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.18.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thanhngodev/sculptique-clone.git
   cd sculptique-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

1. **Development Mode**
   ```bash
   # Start development server
   npm run dev
   ```
   This will start Vite development server with hot module replacement.

2. **Production Build**
   ```bash
   # Build for production
   npm run build
   ```
   This will create a production-ready build in the `dist` directory.

3. **Preview Production Build**
   ```bash
   # Preview production build locally
   npm run preview
   ```
   This will serve the production build locally at `http://localhost:4173`

## 🛠️ Tools & Technologies

- **Frontend**
  - HTML5
  - CSS3 with [Tailwind CSS](https://tailwindcss.com/) (v4.1.18)
  - JavaScript (ES6+)
  - [Vite](https://vitejs.dev/) (v6.4.1) - Next Generation Frontend Tooling
  - [Slick Carousel](https://kenwheeler.github.io/slick/) - Responsive carousel
  - [jQuery](https://jquery.com/) - JavaScript library (used by Slick Carousel)

## 🚀 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/). The deployment is automated through the `vercel.json` configuration file.

### Manual Deployment

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Deploy to production:
   ```bash
   vercel --prod
   ```

### Automatic Deployment

This project is set up for automatic deployments on push to the `main` branch when connected to a Vercel project.

## 📁 Project Structure

```
sculptique-clone/
├── dist/                    # Production build output
├── public/                  # Static files
│   └── assets/              # Static assets (images, etc.)
├── src/                     # Source files
│   ├── scripts/             # JavaScript files
│   ├── styles/              # CSS and Tailwind files
│   └── index.html           # Main HTML file
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vercel.json             # Vercel deployment configuration
└── vite.config.js          # Vite configuration
```

## 📝 Notes & Assumptions

- The project uses modern JavaScript (ES6+) features
- All images are served from the original source (trysculptique.com) to reduce bundle size
- The build process automatically optimizes and minifies assets for production
- The project includes a 60-day money-back guarantee section as per the original site

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
  - [Slick Carousel](https://kenwheeler.github.io/slick/) - For image carousels

## 📁 Project Structure

```
sculptique-clone/
├── src/
│   ├── assets/           # Images, icons, and other static assets
│   ├── scripts/          # JavaScript files
│   ├── styles/           # CSS and Tailwind files
│   └── index.html        # Main HTML file
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 📝 Notes & Assumptions

- This is a frontend-only clone and doesn't include backend functionality.
- The design is responsive and works on mobile, tablet, and desktop views.
- Product data is currently hardcoded in the HTML.
- The project uses Tailwind CSS for styling with custom configurations.
- Some features like the shopping cart and checkout are not implemented as this is a UI clone.

## 🔧 Customization

- To modify styles, edit the `src/styles/main.css` file.
- Tailwind configuration can be found in `tailwind.config.js` (if present).
- Add new JavaScript functionality in the `src/scripts/` directory.