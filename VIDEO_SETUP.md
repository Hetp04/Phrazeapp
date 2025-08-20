# Video Setup Guide

## Overview
This project uses MP4 videos that are stored in the `public/` folder and served through Vercel.

## Video Files
- `video.mp4` - Main demonstration video
- `anim.mp4` - Animation video
- `ant.mp4` - Ant video for features
- `hi.mp4` - Hi video for features

## Current Configuration

### Vercel Configuration
The `vercel.json` file includes:
- Proper MIME type headers for MP4, MOV, and WebM files
- CORS headers for video access
- Accept-Ranges header for video streaming
- Cache control for optimal performance

### Vite Configuration
The `vite.config.js` includes:
- `base: './'` for relative asset paths
- `copyPublicDir: true` to ensure videos are copied to build output
- Asset naming with hashes for caching

## Video Paths
Videos are referenced using multiple source paths to ensure compatibility:
```jsx
<video>
  <source src="video.mp4" type="video/mp4" />
  <source src="/video.mp4" type="video/mp4" />
  <source src="./video.mp4" type="video/mp4" />
</video>
```

## Troubleshooting

### Videos Not Loading on Vercel
1. Check that videos are in the `public/` folder
2. Verify Vercel deployment includes the public folder
3. Check browser console for CORS or network errors
4. Use the "Test Video Paths" button to debug path issues

### Common Issues
- **CORS errors**: Check Vercel headers configuration
- **404 errors**: Ensure videos are in public folder
- **MIME type errors**: Verify Content-Type headers in vercel.json

### Debug Tools
- Video status indicator shows loading state
- Test button checks multiple video paths
- Console logging for detailed error information

## Local Development
Videos work locally because they're served from the public folder. On Vercel, ensure:
1. Videos are properly uploaded to the public folder
2. Build process copies videos to dist folder
3. Vercel serves videos with correct headers

## Next Steps
If videos still don't work:
1. Check Vercel deployment logs
2. Verify video file sizes and formats
3. Consider using a CDN for video hosting
4. Test with different video formats (WebM, OGV)
