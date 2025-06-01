## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Make sure you have **Node.js** and a package manager like **npm**, **pnpm**, or **yarn** installed.

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/minhazurrony/b2b-analytics.git

   cd b2b-analytics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**

   Create a .env.local file in the root directory and add your mock API server URL:

   ```bash
   NEXT_PUBLIC_API_BASE_URL=MOCK_API_SERVER_URL
   ```

   > 💡 If you haven't changed the mock server port in the `package.json` scripts, the default is `http://localhost:4000`.

### Running the Project

Start both the Next.js app and the mock API server (in separate terminals):

```bash
# Start the development server
npm run dev

# Start the mock API server
npm run mock-server
```

Open http://localhost:3000 in your browser to view the app.

## 📁 Project Structure

This project uses a modular folder structure tailored for a Next.js 13+ application using the App Router. Below is a brief overview:

- `src/app/`: Contains route-based files including `layout.js` for wrapping the app UI and `page.js` as the main entry point.
- `src/assets/`: Holds all static media like images. The `logo.jsx` is likely an SVG or JSX logo component.
- `src/components/`: Houses reusable UI and custom components, split into:
  - `ui/`: General UI elements.
  - `custom/`: More specific or application-specific components.
- `src/lib/`: Utilities and helper functions to keep logic separate from UI.
- `.env.*`: Environment-specific configuration.
- `components.json`, `db.json`: Custom config or mock data.
- `next.config.mjs`: Next.js configuration for routing, plugins, etc.
- `postcss.config.mjs`, `eslint.config.mjs`: Configs for PostCSS and linting.

This structure promotes separation of concerns and maintainability in a scalable frontend project.

## 🚀 Technology Used

This project is built using the following technologies and packages:

### Framework & Language

- [Next.js](https://nextjs.org/) – React framework for production

### Styling

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) – Reusable and accessible UI components

### Charts & Data Visualization

- [Recharts](https://recharts.org/) – Composable charting library built on React

### API & Mocking

- [json-server](https://github.com/typicode/json-server) – Mock REST API for local development

### Others

- [Lucide](https://lucide.dev/) – Icon library

## ⚠️ Limitations & Trade-offs

This project was developed as part of a hiring assignment and focuses on delivering core functionality and clean code architecture. Due to time constraints and scope prioritization, the following aspects were intentionally skipped or minimally addressed:

- **Responsive design**: The UI is not fully optimized for mobile and tablet viewports.
- **API call optimizations**: Features like caching caching not implemented.
- **Error handling**: Basic error boundaries and user feedback for failed requests are limited.
- **Accessibility (a11y)**: Not all UI elements were tested or enhanced for screen reader compatibility.

These areas would be addressed and improved in a full production-ready implementation.
