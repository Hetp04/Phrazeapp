#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Create .nojekyll file
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# Serve the built version locally
echo "Serving built version locally..."
echo "Your site will be available at: http://localhost:8000"
echo "This simulates GitHub Pages deployment"
echo ""
echo "Press Ctrl+C to stop the server"

# Use Python to serve the dist folder
cd dist
python3 -m http.server 8000
