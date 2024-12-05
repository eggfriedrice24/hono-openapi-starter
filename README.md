# Hono OpenAPI Starter

🚀 Starter kit for building fully documented / typesafe APIs with [HonoJS](https://hono.dev/), [Zod](https://github.com/colinhacks/zod/) and [Scalar](https://github.com/ScalaR/ScalaR/), complete with OpenAPI support, a database layer using [Drizzle ORM](https://orm.drizzle.team/), and other cool stuff.

---

## Features

- 🛠 **TypeScript**: Fully typed for a hands down best DX ever.
- 🌐 **OpenAPI**: Automatically generate OpenAPI specs using Zod.
- 🗄 **Drizzle ORM**: Typesafe database interactions with schema-based migrations.
- 🔧 **Middleware**: Preconfigured with essential middleware (e.g., error handling, logging).
- 🖼 **Project Structure**: Clean, scalable architecture for building production-ready APIs.
- 🌟 **Modern Tooling**: Prettier, ESLint, and TypeScript for consistent code quality.

---

## File Structure

Here’s an overview of the project structure:

```plaintext
.
├── drizzle.config.ts         # Drizzle ORM configuration
├── package.json              # Dependencies and project metadata
├── pnpm-lock.yaml            # Lockfile for PNPM
├── prettier.config.js        # Prettier configuration
├── README.md                 # Project documentation
├── setup.sh                  # Project setup script
├── tsconfig.json             # TypeScript configuration
├── src/                      # Source code
│   ├── db/                   # Database configurations and migrations
│   │   ├── migrations/       # SQL migration files
│   │   ├── seeds/            # Seed data files
│   │   └── schema.ts         # Database schema
│   ├── lib/                  # Utility functions and constants
│   ├── middlewares/          # Middleware implementations
│   ├── openapi/              # OpenAPI schemas and helpers
│   │   ├── helpers/          # OpenAPI helper functions
│   │   └── schemas/          # OpenAPI schemas
│   └── routes/               # API route handlers
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16+)
- **PNPM** (recommended) or **Yarn/NPM**
- **PostgreSQL** (or other supported database)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/hono-openapi-starter.git
   cd hono-openapi-starter
   ```

2. Run the setup script:
   ```bash
   ./setup.sh
   ```
   The script will:
   - Remove `.git`
   - Initialize a new Git repository
   - Install dependencies

3. Configure your `.env` file:
   ```bash
   cp .env.example .env
   # Update database credentials, etc.
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

---

## Scripts

- **Development**: Start the app in development mode:
  ```bash
  pnpm dev
  ```
- **Build**: Compile TypeScript files:
  ```bash
  pnpm build
  ```
---

## Project Structure in Depth

### `src/`

- **`app.ts`**: Sets up the Hono app with middleware and routes.
- **`db/`**:
  - `schema.ts`: Defines the database schema using Drizzle ORM.
  - `migrations/`: Stores SQL migration files.
- **`middlewares/`**: Custom middleware (e.g., error handling, logging).
- **`openapi/`**:
  - `schemas/`: Defines reusable OpenAPI schemas with Zod.
  - `helpers/`: Helpers for creating OpenAPI specs.
- **`routes/`**:
  - Contains route definitions and handlers, organized by feature.

### Configuration Files

- **`drizzle.config.ts`**: Configuration for Drizzle migrations.
- **`tsconfig.json`**: TypeScript project settings.
- **`prettier.config.js`**: Prettier formatting rules.

---

## OpenAPI Integration

Define your schemas with Zod, and they’ll be automatically included in your OpenAPI documentation.

Example (in `openapi/schemas`):
```typescript
import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  completed: z.boolean(),
});
```

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- [Hono Framework](https://hono.dev/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Zod](https://github.com/colinhacks/zod/)
- [Syntax](https://youtube.com/@syntaxfm/)
