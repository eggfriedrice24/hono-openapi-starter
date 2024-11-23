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

# Ask the user to choose a package manager
echo "📦 Which package manager would you like to use?"
echo "1) npm"
echo "2) yarn"
echo "3) pnpm"
read -p "Enter the number of your choice: " package_manager_choice

# Install dependencies based on the user's choice
case $package_manager_choice in
    1)
        if [ -f package.json ]; then
            echo "📦 Installing dependencies with npm..."
            npm install
        else
            echo "❌ No package.json found. Skipping dependency installation."
        fi
        ;;
    2)
        if [ -f yarn.lock ]; then
            echo "📦 Installing dependencies with yarn..."
            yarn install
        else
            echo "❌ No yarn.lock found. Skipping dependency installation."
        fi
        ;;
    3)
        if [ -f pnpm-lock.yaml ]; then
            echo "📦 Installing dependencies with pnpm..."
            pnpm install
        else
            echo "❌ No pnpm-lock.yaml found. Skipping dependency installation."
        fi
        ;;
    *)
        echo "❌ Invalid choice. Skipping dependency installation."
        ;;
esac

# Success message
echo "✅ Setup complete! 🎉 You can now configure your new repository and start development."

# Remove the script itself
echo "🗑️ Removing setup.sh script..."
rm -- "$0"
