<div align="center">

# 🧑‍💻 Matthew Carr

## 💻 Software Engineer

[![Built With](https://img.shields.io/badge/Built%20With-→-gray.svg?style=flat-square)]()
[![React](https://img.shields.io/badge/React-19.2.3-black?style=flat-square&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-white?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)

[![Environment](https://img.shields.io/badge/Environment-→-gray.svg?style=flat-square)]()
[![Node](https://img.shields.io/badge/node-24.13.0-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10.x-F69220?style=flat-square&logo=pnpm)](https://pnpm.io)

[![Quality](https://img.shields.io/badge/Quality-→-gray.svg?style=flat-square)]()
[![Biome](https://img.shields.io/badge/Biome-2.3.12-60A5FA?style=flat-square)](https://biomejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

</div>

## 🚀 Getting Started

### Prerequisites

- Node.js 24.13.0
- pnpm 10.x

### Installation

Install dependencies

```bash
pnpm install --frozen-lockfile
```

## 💻 Development

Run the development server:

```bash
pnpm dev
```

The site will be available at http://localhost:3000.

Homepage layout highlights:
- Overview hero with profile snapshot
- About and impact sections
- Technical skills grid
- Current role and contact call-to-action

## 🧪 Testing

### Unit tests

```bash
pnpm test
```

### Integration tests

Playwright smoke check that the page renders. Browsers download automatically
on first `pnpm test:integration` run.

```bash
pnpm test:integration
```

### Linting

```bash
# Run ESLint
pnpm lint

# Fix ESLint issues
pnpm lint:fix
```

### Code Formatting

```bash
# Check formatting
pnpm format

# Fix formatting issues
pnpm format:fix
```

## 🚀 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/).

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
