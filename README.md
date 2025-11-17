# F3 Northwest Arkansas Website

A modern, mobile-friendly rebuild of the [F3 Northwest Arkansas website](https://f3nwa.com) using React and TypeScript.

**🚀 [View Live Demo](https://nwa-f3-front-end.vercel.app/)**

## Project Goal

Recreate the F3 NWA website with a clean, maintainable codebase that makes it easy for leadership to update content through an admin interface. This project will progress through multiple phases from static site to fully dynamic platform.

## Project Phases

### Phase 1: Static Website ✅ (In Progress)

Building out all pages to match the current F3NWA design

- Navigation with dropdown menus
- Responsive layouts for all devices
- Footer with social links
- Clean, professional styling

### Phase 2: Deployment (Coming Soon)

Get the static site live for feedback and testing

### Phase 3: Dynamic Admin Panel

Add backend functionality so F3 leadership can easily manage:

- Workout locations and schedules
- Events and announcements
- PAX directory
- No coding knowledge required!

### Phase 4: AI-Powered Features (Future)

Enhance the site with smart features like workout suggestions, intelligent search, and automated content generation

## Getting Started

Follow these steps to run the project on your computer.

### Prerequisites

You need to install these programs first (one-time setup):

1. **Git** - Download from [git-scm.com](https://git-scm.com/downloads)
2. **Node.js** (version 18 or higher) - Download from [nodejs.org](https://nodejs.org/)
3. **Yarn** - After installing Node.js, open Terminal/Command Prompt and run:

```bash
   npm install -g yarn
```

### Installation

1. **Download the project**

   Open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
   git clone https://github.com/DCW0830/NWA_F3_Front_End.git
   cd NWA_F3_Front_End
```

2. **Install dependencies**

```bash
   yarn install
```

3. **Start the development server**

```bash
   yarn dev
```

4. **View the website**

   Open your browser and go to: `http://localhost:5173`

### Making Updates

To get the latest changes from GitHub:

```bash
git pull
yarn install
yarn dev
```

### Troubleshooting

**Port already in use?**

- Close the terminal and try again
- Or change the port in `vite.config.ts`

**"Command not found" errors?**

- Make sure Node.js and Yarn are installed correctly
- Restart your terminal after installation

**Need help?**

- Open an issue on GitHub or contact the project maintainer

## Technology Stack

- React 19
- TypeScript
- Material-UI (MUI)
- Vite
- React Router

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── styled/       # Styled components library
│   ├── NavBar.tsx
│   ├── TitleBar.tsx
│   ├── Footer.tsx
│   └── LayOut.tsx
├── pages/            # Page components
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Compare with Current Site

Check out the [current F3 NWA website](https://f3nwa.com) to see what we're building towards. As development progresses, you can track how closely we're matching the design and functionality.

## Development

This project uses:

- **Vite** for fast development and building
- **TypeScript** for type safety
- **Material-UI** for component library
- **Styled Components** pattern for custom styling
