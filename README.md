# Sculptique Clone

A responsive e-commerce website clone for Sculptique, a health and wellness product company. This project showcases a product landing page for their Lymphatic Drainage Capsules with a modern, clean design.

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.18.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sculptique-clone.git
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
   # Start Tailwind CSS in watch mode
   npm run watch
   ```
   This will watch for changes in your CSS and automatically rebuild the output.

2. **Production Build**
   ```bash
   # Build for production
   npm run build
   ```

3. **Viewing the Project**
   - Open `src/index.html` in your web browser
   - For a better development experience, consider using a local server like `live-server` or `http-server`

## 🛠️ Tools & Technologies

- **Frontend**
  - HTML5
  - CSS3 (with Tailwind CSS)
  - JavaScript (Vanilla)
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
  - [Slick Carousel](https://kenwheeler.github.io/slick/) - For image carousels

- **Development Tools**
  - npm - Package manager
  - PostCSS - CSS processing
  - Autoprefixer - CSS compatibility

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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
