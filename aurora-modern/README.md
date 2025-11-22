# Aurora Modern Landing Page

A modern, high-performance landing page for Aurora Core Tech, built with Next.js 16, Tailwind CSS v4, and GSAP.

## 🚀 Features

- **Modern Stack**: Next.js 16 (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS v4 with custom fonts (Manrope, Syncopate, JetBrains Mono).
- **Animations**: GSAP ScrollTrigger for reveal effects and Lenis for smooth scrolling.
- **Modular Content**: All text and data are centralized in `data/index.tsx` for easy updates.
- **Responsive**: Fully responsive design for all device sizes.

## 🛠️ Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

3.  **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## 📝 How to Edit Content

The project is designed to be modular. You can change almost all text, links, and data without touching the component code.

**Navigate to `data/index.tsx` to modify:**

-   **Navigation**: Links, Logo text.
-   **Hero Section**: Title, description, scroll text.
-   **Vision Section**: Heading, description, quote, features, mission statement.
-   **Tech Section**: Cards content (Perception, Reasoning, Action), icons (SVG paths).
-   **Specs Section**: Performance metrics numbers and labels.
-   **Roadmap Section**: Phases, descriptions, tags.
-   **Footer**: Contact info, credits, social links.

## 📁 Project Structure

-   `app/`: Next.js App Router pages and layout.
-   `components/`: Reusable UI components (Hero, Vision, Tech, etc.).
-   `data/`: Centralized data file (`index.tsx`).
-   `public/`: Static assets (images, fonts).

## 🎨 Customization

-   **Colors**: Defined in `app/globals.css` as CSS variables (`--color-void`, `--color-accent`, etc.) and configured in Tailwind.
-   **Fonts**: Loaded in `app/layout.tsx` using `next/font/google`.

## 📄 License

© 2025 AURORA CORE TECH. All rights reserved.

