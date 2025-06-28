![cv](https://github.com/BartoszJarocki/cv/assets/1017620/79bdb9fc-0b20-4d2c-aafe-0526ad4a71d2)

# Minimalist CV

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBartoszJarocki%2Fcv)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8+-F69220?logo=pnpm)](https://pnpm.io/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean and modern web app that renders a minimalist CV/Resume with a print-friendly layout.

## ✨ Features

- 📝 **Single Config File** - Update all your resume data in [one place](./src/data/resume-data.tsx)
- 🎨 **Minimalist Design** - Clean, professional layout focused on content
- 📱 **Responsive** - Looks great on all devices, from mobile to desktop
- 🖨️ **Print Optimized** - Specially designed print styles for physical copies
- ⌨️ **Keyboard Navigation** - Press `Cmd/Ctrl + K` to quickly navigate through sections
- 🚀 **Fast Performance** - Built with Next.js 14 and optimized for Core Web Vitals
- 🔄 **Auto Layout** - Sections automatically adjust based on your content
- 📊 **GraphQL API** - Access your resume data programmatically at `/graphql`
- 🎯 **SEO Friendly** - Optimized metadata for better search visibility
- 🐳 **Docker Support** - Easy containerized deployment

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **GraphQL**: [Apollo Server](https://www.apollographql.com/) + [TypeGraphQL](https://typegraphql.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BartoszJarocki/cv.git
   cd cv
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

5. **Customize your CV**
   
   Edit the [src/data/resume-data.tsx](./src/data/resume-data.tsx) file to add your personal information, work experience, education, and skills.

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with metadata
│   └── page.tsx      # Main resume page
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── icons/       # Icon components
├── data/            # Resume data configuration
│   └── resume-data.tsx
├── images/          # Static assets
│   └── logos/       # Company logos
└── apollo/          # GraphQL server setup
    ├── resolvers.ts
    └── type-defs.ts
```

## 🎨 Customization

### Resume Data

All resume content is stored in a single configuration file:

```typescript
// src/data/resume-data.tsx
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  // ... more fields
}
```

### Styling

The app uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Print styles are defined separately for optimal printing

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Build the container
docker compose build

# Run the container
docker compose up -d

# Stop the container
docker compose down
```

### Using Docker directly

```bash
# Build the image
docker build -t cv-app .

# Run the container
docker run -p 3000:3000 cv-app
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic usage. The app works out of the box!

### Print Settings

The app is optimized for printing. For best results:
- Use Chrome/Chromium for printing
- Enable "Background graphics" in print settings
- Set margins to "Default"

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting and deployment
- All contributors who have helped improve this project

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/BartoszJarocki">Bartosz Jarocki</a>
</p>