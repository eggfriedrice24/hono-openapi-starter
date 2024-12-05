# Use the Node.js base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and lockfile first for better caching
COPY pnpm-lock.yaml package.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all project files to the container
COPY . .

# Build the application (TypeScript -> JavaScript in dist/)
RUN pnpm build

# Expose the port the app runs on
EXPOSE 2222

# Start the application
CMD ["pnpm", "start"]
