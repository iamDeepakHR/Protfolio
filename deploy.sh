#!/bin/bash

# Deepak H R Portfolio Deployment Script
# This script helps deploy the portfolio to various platforms

echo "🚀 Deepak H R Portfolio Deployment Script"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Function to build the project
build_project() {
    echo "📦 Building project..."
    npm run build
    
    if [ $? -eq 0 ]; then
        echo "✅ Build successful!"
    else
        echo "❌ Build failed!"
        exit 1
    fi
}

# Function to deploy to Vercel
deploy_vercel() {
    echo "🚀 Deploying to Vercel..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        echo "📥 Installing Vercel CLI..."
        npm install -g vercel
    fi
    
    # Deploy to Vercel
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployed to Vercel successfully!"
    else
        echo "❌ Vercel deployment failed!"
        exit 1
    fi
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "🚀 Deploying to Netlify..."
    
    # Check if Netlify CLI is installed
    if ! command -v netlify &> /dev/null; then
        echo "📥 Installing Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    # Build and deploy
    build_project
    netlify deploy --prod --dir=dist
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployed to Netlify successfully!"
    else
        echo "❌ Netlify deployment failed!"
        exit 1
    fi
}

# Function to deploy to GitHub Pages
deploy_github() {
    echo "🚀 Deploying to GitHub Pages..."
    
    # Build the project
    build_project
    
    # Check if gh-pages is installed
    if ! npm list gh-pages &> /dev/null; then
        echo "📥 Installing gh-pages..."
        npm install --save-dev gh-pages
    fi
    
    # Add deploy script to package.json if not exists
    if ! grep -q '"deploy":' package.json; then
        echo "📝 Adding deploy script to package.json..."
        npm pkg set scripts.deploy="gh-pages -d dist"
    fi
    
    # Deploy to GitHub Pages
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployed to GitHub Pages successfully!"
        echo "🌐 Your site should be available at: https://yourusername.github.io/your-repo-name"
    else
        echo "❌ GitHub Pages deployment failed!"
        exit 1
    fi
}

# Function to create a simple HTTP server for testing
test_local() {
    echo "🧪 Testing locally..."
    
    build_project
    
    # Check if serve is installed
    if ! command -v serve &> /dev/null; then
        echo "📥 Installing serve..."
        npm install -g serve
    fi
    
    echo "🌐 Starting local server on http://localhost:5000"
    echo "Press Ctrl+C to stop the server"
    serve -s dist -l 5000
}

# Main menu
echo ""
echo "Select deployment option:"
echo "1) Deploy to Vercel"
echo "2) Deploy to Netlify"
echo "3) Deploy to GitHub Pages"
echo "4) Test locally"
echo "5) Just build (no deploy)"
echo "6) Exit"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        deploy_vercel
        ;;
    2)
        deploy_netlify
        ;;
    3)
        deploy_github
        ;;
    4)
        test_local
        ;;
    5)
        build_project
        echo "✅ Build completed! Check the 'dist' folder."
        ;;
    6)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment process completed!"
echo "📧 Contact: deepakgowda6363@gmail.com"
echo "🌐 Portfolio: https://deepak-hr-portfolio.vercel.app"
