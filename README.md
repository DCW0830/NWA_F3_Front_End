# F3 Northwest Arkansas Website

A React-based website for F3 Northwest Arkansas fitness community.

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
│   └── LayOut.tsx
├── pages/            # Page components
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Development

This project uses:

- **Vite** for fast development and building
- **TypeScript** for type safety
- **Material-UI** for component library
- **Styled Components** pattern for custom styling
