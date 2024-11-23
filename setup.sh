#!/bin/bash

# Remove existing .git directory to avoid pushing to the starter kit repository
echo "🗑️  Removing existing .git directory..."
rm -rf .git

# Initialize a new Git repository
echo "🚀 Initializing a new Git repository..."
git init

# Prompt the user to add a remote repository
echo "🔗 Don't forget to add a remote repository!"
echo "   Example: git remote add origin <your-repo-url>"

# Install dependencies
if [ -f package.json ]; then
    echo "📦 Installing dependencies with npm..."
    npm install
elif [ -f yarn.lock ]; then
    echo "📦 Installing dependencies with yarn..."
    yarn install
elif [ -f pnpm-lock.yaml ]; then
    echo "📦 Installing dependencies with pnpm..."
    pnpm install
else
    echo "❌ No package.json or lock file found. Skipping dependency installation."
fi

# Success message
echo "✅ Setup complete! 🎉 You can now configure your new repository and start development."

# Remove the script itself
echo "🗑️ Removing setup.sh script..."
rm -- "$0"
