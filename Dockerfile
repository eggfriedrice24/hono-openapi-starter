# Use the Node.js base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package manager lock file and package.json for dependency installation
COPY pnpm-lock.yaml package.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies without modifying lock files
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application (TypeScript -> JavaScript)
RUN pnpm build

# Expose the application port
EXPOSE 2222

# Set environment variables (override with docker-compose if needed)
ENV NODE_ENV=production
ENV PORT=2222

# Start the application
CMD ["pnpm", "start"]
