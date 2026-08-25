# Piyush — Software Engineer Portfolio

A production-ready personal portfolio website built to showcase my engineering experience, technical skills, projects, and professional profile through a modern, responsive, and performance-focused web application.

The project is structured as a full-stack application with a **Next.js frontend** and a separate **Hono + Bun API**, backed by a relational database.

---

## ✨ Live Application

**Portfolio:**
https://portfolio-web-gamma-henna.vercel.app

**API:**
https://portfolio-api-oum7.onrender.com

---

## 📌 Overview

This portfolio was built as more than a static personal website.

The goal was to create a real-world application with:

* Modern frontend architecture
* Responsive UI
* Dark/light theme support
* Interactive navigation
* Animated UI interactions
* Functional contact form
* Dedicated backend API
* Server-side validation
* Rate limiting
* Request protection
* CORS configuration
* Database persistence
* Automated testing
* Production deployment
* SEO fundamentals

The frontend and backend are separated so that the application follows a more realistic full-stack architecture rather than putting all functionality inside the frontend.

---

# 🛠️ Tech Stack

## Frontend

| Technology     | Purpose                                      |
| -------------- | -------------------------------------------- |
| Next.js        | React framework and application architecture |
| React          | UI development                               |
| TypeScript     | Static typing and safer development          |
| Tailwind CSS   | Styling and responsive UI                    |
| Motion         | UI animations and transitions                |
| Phosphor Icons | Interface icons                              |
| next-themes    | Theme management                             |

## Backend

| Technology        | Purpose                               |
| ----------------- | ------------------------------------- |
| Bun               | JavaScript/TypeScript runtime         |
| Hono              | Lightweight REST API framework        |
| TypeScript        | Type-safe backend development         |
| Zod               | Request validation                    |
| Drizzle ORM       | Database access and schema management |
| PostgreSQL        | Relational database                   |
| hono-rate-limiter | API rate limiting                     |

## Testing

| Technology | Purpose                      |
| ---------- | ---------------------------- |
| Vitest     | Unit and integration testing |

## Deployment

| Platform   | Application |
| ---------- | ----------- |
| Vercel     | Frontend    |
| Render     | Backend API |
| PostgreSQL | Database    |

---

# 🏗️ Architecture

The application follows a separated frontend/backend architecture.

```text
                    ┌─────────────────────────┐
                    │        Browser          │
                    │                         │
                    │      Next.js App        │
                    │      React + TS         │
                    └────────────┬────────────┘
                                 │
                                 │ HTTP Request
                                 ▼
                    ┌─────────────────────────┐
                    │       Hono API          │
                    │        Bun Runtime      │
                    │                         │
                    │  CORS                  │
                    │  Rate Limiting         │
                    │  Request Limits        │
                    │  Validation            │
                    │  Error Handling        │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       Drizzle ORM      │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       PostgreSQL        │
                    │                         │
                    │    Contact Messages     │
                    └─────────────────────────┘
```

---

# 📂 Project Structure

```text
portfolio/
│
├── apps/
│   │
│   ├── web/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── globals.css
│   │   │   ├── robots.ts
│   │   │   └── sitemap.ts
│   │   │
│   │   ├── components/
│   │   │   ├── effects/
│   │   │   ├── layout/
│   │   │   ├── theme/
│   │   │   └── ui/
│   │   │
│   │   ├── constants/
│   │   ├── lib/
│   │   ├── providers/
│   │   └── public/
│   │       ├── icons/
│   │       └── resume.pdf
│   │
│   └── api/
│       └── src/
│           ├── config/
│           ├── db/
│           ├── lib/
│           ├── middleware/
│           ├── routes/
│           ├── validators/
│           └── __tests__/
│
├── package.json
├── bun.lock
└── README.md
```

---

# 🎨 Frontend

The frontend is built with **Next.js + React + TypeScript**.

The UI focuses on a clean, premium and responsive presentation rather than relying on excessive visual effects.

### Key frontend features

* Responsive layout
* Desktop and mobile navigation
* Active section detection
* Dark/light theme
* Theme persistence
* Animated navigation transitions
* Custom cursor effect
* Responsive contact form
* Accessible form controls
* Resume viewer
* SEO metadata
* Open Graph metadata
* Sitemap
* Robots configuration

---

# 🧭 Navigation

The desktop navigation tracks the currently visible section using the browser's `IntersectionObserver` API.

This allows the navigation to automatically highlight the section currently visible to the user.

```text
About
Projects
Skills
Experience
Contact
```

The active navigation indicator is animated using Motion.

---

# 🌗 Theme System

The application supports:

```text
Light Mode
Dark Mode
System Preference
```

Theme management is handled using `next-themes`.

The application also uses hydration-safe rendering to prevent server/client markup mismatches.

---

# ✨ UI Effects

The project includes a custom cursor interaction system.

The cursor effect uses:

* Pointer events
* `requestAnimationFrame`
* Position interpolation
* Velocity tracking
* Orbital particle movement
* GPU-friendly transforms

The animation is implemented using direct DOM transforms to keep the interaction lightweight.

The effect also checks for fine pointer support so that it does not unnecessarily run on touch-only devices.

---

# 📩 Contact Form

The contact form is connected to the backend API.

### Request flow

```text
User submits form
        ↓
Client-side validation
        ↓
POST /api/contacts
        ↓
CORS validation
        ↓
Request limits
        ↓
Rate limiting
        ↓
Zod validation
        ↓
Database insert
        ↓
Success response
```

The frontend handles:

* Required field validation
* Email validation
* Message length validation
* Loading state
* Server errors
* Success state
* Accessible error messages

---

# 🔐 Backend API

The backend is implemented separately using **Hono running on Bun**.

The API contains multiple layers of protection before a request reaches the database.

### API middleware

```text
Request
  │
  ├── CORS
  │
  ├── Request Size / Limits
  │
  ├── Rate Limiting
  │
  ├── Validation
  │
  ├── Route Handler
  │
  └── Database
```

This structure keeps security and validation concerns outside the main business logic where possible.

---

# 📡 API Endpoints

## Health Check

```http
GET /health
```

Example response:

```json
{
  "status": "OK"
}
```

---

## API Root

```http
GET /
```

Example response:

```json
{
  "message": "Portfolio API"
}
```

---

## Create Contact

```http
POST /api/contacts
```

Request:

```json
{
  "name": "Piyush",
  "email": "piyush@example.com",
  "message": "Hello, I would like to discuss a project."
}
```

Successful response:

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

---

# ✅ Validation

The contact API uses **Zod** for server-side validation.

Validation includes:

### Name

* Minimum length
* Maximum length
* Whitespace trimming

### Email

* Valid email format
* Maximum length
* Whitespace trimming

### Message

* Minimum length
* Maximum length
* Whitespace trimming

Server-side validation ensures that the API cannot rely only on frontend validation.

---

# 🛡️ API Security & Reliability

Several protections were implemented around the API.

### CORS

The API allows requests only from the configured frontend origin in production.

```text
Production
Frontend → API

Development
localhost:3000 → localhost:3001
```

### Rate Limiting

Contact submissions are rate limited to reduce abuse and spam.

### Request Limits

Incoming requests are restricted to prevent unnecessarily large payloads.

### Centralized Error Handling

API errors are handled through a centralized middleware rather than exposing raw internal errors.

---

# 🗄️ Database

The backend uses:

```text
PostgreSQL
     ↓
Drizzle ORM
     ↓
Hono API
```

Drizzle provides a type-safe interface for interacting with the database while keeping the database schema close to the application code.

Contact submissions are persisted in the database instead of being handled only in memory.

---

# 🧪 Testing

The API uses **Vitest** for automated testing.

Test coverage includes:

```text
Health endpoint
Contact validation
Contact API
Database integration
Rate limiting
```

Run tests:

```bash
bun run --cwd apps/api test
```

Run tests in watch mode:

```bash
bun run --cwd apps/api test:watch
```

---

# 🔍 Type Checking

Backend TypeScript can be checked using:

```bash
bun run --cwd apps/api typecheck
```

This ensures that the backend contains no TypeScript compilation errors before deployment.

---

# 🚀 Local Development

## Prerequisites

Install:

* Node.js
* Bun
* PostgreSQL

Check Bun:

```bash
bun --version
```

---

## Install Dependencies

From the project root:

```bash
bun install
```

---

## Environment Variables

Create the required environment files according to the environment.

Example API configuration:

```env
PORT=3001
DATABASE_URL=your_database_url
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

For production, configure the corresponding environment variables in the deployment platform.

**Never commit real secrets or credentials to Git.**

---

# ▶️ Run Frontend

```bash
bun run --cwd apps/web dev
```

Frontend:

```text
http://localhost:3000
```

---

# ▶️ Run API

```bash
bun run --cwd apps/api dev
```

API:

```text
http://localhost:3001
```

---

# 🏭 Production Deployment

## Frontend — Vercel

The Next.js application is deployed on Vercel.

```text
GitHub
   ↓
Vercel
   ↓
Next.js Production Build
   ↓
Live Portfolio
```

---

## Backend — Render

The Hono API runs on Bun and is deployed separately on Render.

```text
GitHub
   ↓
Render
   ↓
Bun Runtime
   ↓
Hono API
```

Live API:

```text
https://portfolio-api-oum7.onrender.com
```

---

# 🔎 SEO

The application includes foundational SEO configuration through Next.js metadata.

Implemented features include:

* Page title
* Meta description
* Keywords
* Author metadata
* Open Graph metadata
* Twitter card metadata
* Robots configuration
* XML sitemap

The project also exposes:

```text
/robots.txt
/sitemap.xml
```

These provide search engines with information about how the website can be crawled and discovered.

---

# 📄 Resume

The latest resume is served from:

```text
/public/resume.pdf
```

and is accessible through:

```text
/resume.pdf
```

The resume is opened in a new browser tab from the portfolio navigation.

---

# ♿ Accessibility

The UI includes accessibility considerations such as:

* Semantic HTML
* Navigation labels
* Form labels
* `aria-invalid`
* `aria-describedby`
* Accessible error messages
* Keyboard focus states
* Reduced unnecessary interaction on touch devices

---

# 📱 Responsive Design

The application is designed for:

```text
Mobile
Tablet
Laptop
Desktop
```

The navigation and layout adapt according to screen size, with separate mobile and desktop navigation experiences.

---

# 🧠 Engineering Decisions

### Why Next.js?

Next.js provides the React application framework, routing architecture, server-side capabilities, metadata APIs, and production optimization needed for a modern portfolio.

### Why Hono?

Hono provides a lightweight API layer that works particularly well with modern JavaScript runtimes such as Bun.

### Why Bun?

Bun provides a fast runtime and package manager while supporting the TypeScript-based backend architecture.

### Why PostgreSQL?

PostgreSQL provides a reliable relational database suitable for persistent application data.

### Why Drizzle?

Drizzle provides a type-safe ORM approach while keeping SQL concepts relatively close to the application.

### Why Zod?

Frontend validation improves user experience, but server-side validation is mandatory for API security. Zod provides a consistent schema-based validation layer.

### Why separate frontend and backend?

Separating the applications creates a cleaner architecture and makes the backend independently deployable and reusable.

---

# 📈 Future Improvements

Potential future improvements include:

* Email notifications for new contact submissions
* Admin dashboard for managing messages
* Authentication for administrative functionality
* Better analytics
* Advanced SEO structured data
* Automated deployment checks
* CI/CD pipeline
* Automated database migrations
* Monitoring and logging
* Additional automated test coverage

---

# 👨‍💻 Author

**Piyush Gajghate**

Software Engineer focused on building reliable, performant, and user-friendly digital products.

---

## 📄 License

This project is a personal portfolio project.

The source code is available for learning and reference, while personal content, branding, resume, and other portfolio-specific assets belong to the author.
