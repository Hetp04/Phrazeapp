#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Create a simple .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch dist/.nojekyll

echo "Build complete! Push the dist folder to gh-pages branch or deploy manually."
echo "Your site will be available at: https://hetp04.github.io/Phrazeapp/"
