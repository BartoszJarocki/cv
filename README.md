![cv](https://github.com/BartoszJarocki/cv/assets/1017620/79bdb9fc-0b20-4d2c-aafe-0526ad4a71d2)

# Web CV

Simple web app that renders minimalist CV with print-friendly layout.

Built with Vite, React, TypeScript, and shadcn/ui.

# Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Vite, React, TypeScript, shadcn/ui, TailwindCSS
- Auto generated Layout
- Responsive for different devices
- Print-friendly output
- Command palette for quick navigation (cmdk)

# Getting Started Locally

1. Clone this repository to your local machine:

```bash
git clone https://github.com/BartoszJarocki/cv.git
```

2. Move to the cloned directory

```bash
cd cv
```

3. Install dependencies:

```bash
bun -v
# should be >= 1.3.2

bun i
```

4. Start the local server:

```bash
bun dev
```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

# Available Scripts

- `bun dev` - Start development server (port 3969)
- `bun build` - Build for production
- `bun preview` - Preview production build (port 3969)
- `bun lint` - Run ESLint
- `bun format` - Format code with Biome
- `bun type` - Type check with TypeScript

# License

[MIT](https://choosealicense.com/licenses/mit/)
