# GitHub Pages Deployment

## Quick Deploy

1. **Enable GitHub Pages** in your repository settings
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (or main)
   - Folder: / (root)

2. **Automatic Deployment** (Recommended)
   - The GitHub Actions workflow will automatically deploy on every push to main
   - Your site will be available at: `https://hetp04.github.io/Phrazeapp/`

3. **Manual Deployment**
   ```bash
   # Build the project
   npm run build
   
   # Create .nojekyll file
   touch dist/.nojekyll
   
   # Push dist folder to gh-pages branch
   git subtree push --prefix dist origin gh-pages
   ```

## Why GitHub Pages is Better for Videos

- ✅ **Simpler configuration** - no complex MIME type issues
- ✅ **Better video support** - serves static files directly
- ✅ **No build errors** - straightforward deployment
- ✅ **Free hosting** - included with GitHub

## Video Files

Your videos are already in the `public/` folder and will be served correctly:
- `video.mp4` - Main demo video
- `anim.mp4` - Animation video  
- `ant.mp4` - Features video
- `hi.mp4` - Features video

## After Deployment

Your videos should work perfectly at: `https://hetp04.github.io/Phrazeapp/`

## Current Status
Last updated: $(date) - Testing GitHub Actions deployment
