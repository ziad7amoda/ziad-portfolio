# Ziad Hamoda — Interactive Developer Portfolio

![Screenshot of the portfolio](<img width="1920" height="1080" alt="Screenshot (517)" src="https://github.com/user-attachments/assets/a68c8563-c2d6-4f3f-8e90-f69cbd703b4d" />
)

A modern, highly interactive, and performant developer portfolio built to showcase engineering capabilities and design sensibilities. Designed with a dark-mode-first "techy" aesthetic, emphasizing tactile feedback, smooth hardware-accelerated animations, and responsive micro-interactions.

## 🚀 Live Demo

[**ziad-hamoda.vercel.app**](https://ziad-portfolio-roan.vercel.app/) *(Replace with your actual Vercel URL once deployed)*

## ✨ Key Features

- **Advanced Animations:** Fluid entrances, scrolling interactions, and state transitions powered by `framer-motion`.
- **Dynamic Theming System:** A floating palette allowing users to instantly snap between custom accent colors (Emerald, Neon Pink, Cyber Yellow, Ocean Blue) utilizing underlying CSS variables.
- **3D Parallax Tilt:** Depth-sensing interface cards (`TiltWrapper`) that respond organically to cursor movement for a premium tactile feel.
- **Interactive Physics Engine ("Easter Egg"):** A hidden module integrated with `matter-js`. Triggered via the footer, it injects a 2D constraint-based physics simulation where UI elements yield to gravity and become fully draggable rigid bodies.
- **Magnetic Buttons:** Custom cursor-attracting call-to-action buttons providing satisfying UX friction.
- **Responsive Architecture:** Fully optimized for mobile, tablet, and ultra-wide displays without compromising animation fidelity.
- **Infinite Marquee:** A dual-row auto-scrolling tech stack carousel built with native CSS transforms.

## 💻 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Physics Engine:** [Matter.js](https://brm.io/matter-js/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🛠️ Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/ziad7amoda/ziad-portfolio.git
cd ziad-portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

* **`src/app/`**: Next.js App Router core pages and global CSS.
* **`src/components/`**: Reusable isolated UI elements (e.g., `TiltWrapper`, `GravityOverlay`, `HeroVisual`).
* **`src/data/`**: Centralized, single-source-of-truth datastores containing project details, experience, and configuration (`portfolio.ts`).
* **`public/`**: Static assets, including project screenshots and downloadable resumes.

## 🤝 Contributing

This is a personal portfolio repository, but feel free to fork it, study the physics and animation implementations, and use it as inspiration for your own projects!

## 📄 License

This project is open-sourced under the MIT License.
