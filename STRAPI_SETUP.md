# Strapi + JSON Fallback Setup Guide

This guide explains how to extend your existing Strapi setup for blogs and press releases with JSON fallback.

## 🚀 Your Current Setup

You already have:
- ✅ **Strapi CMS**: `https://cms.simplifigo.com/api`
- ✅ **Multiple Content Types**: Home, Features, Capabilities, etc.
- ✅ **JSON Fallback**: Working with `homeText.json`
- ✅ **API Endpoints**: Defined in `varConstant.js`

## 📝 What You Need to Add

### 1. Environment Setup

Add to your existing `.env.local` file:

```bash
# Optional: API Token for authenticated requests (if needed)
NEXT_PUBLIC_STRAPI_API_TOKEN=your_strapi_api_token_here
```

**Note:** Your current setup works without authentication tokens, so this is optional.

### 3. Create Content Types in Strapi

Follow the schema defined in `strapi-schema.md` to create:

- **Blogs** content type
- **Press Releases** content type  
- **Authors** content type
- **Tags** content type

### 4. Set API Permissions

In Strapi Admin Panel:
1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Select **Public** role
3. Enable permissions for:
   - `blogs`: `find`, `findOne`
   - `press-releases`: `find`, `findOne`
   - `authors`: `find`, `findOne`
   - `tags`: `find`, `findOne`

### 5. Generate API Token

1. Go to **Settings** → **API Tokens**
2. Click **Create new API Token**
3. Name: `SimpliFi Frontend`
4. Token type: `Full access` (or customize as needed)
5. Copy the generated token to your `.env.local`

## 📁 File Structure

```
simplifi2/
├── src/
│   ├── services/
│   │   └── contentService.js          # Main service layer
│   ├── config/
│   │   └── strapi.js                  # Strapi configuration
│   ├── app/
│   │   ├── blogs/
│   │   │   ├── page.jsx               # Blog listing (updated)
│   │   │   └── [slug]/page.jsx        # Blog detail (updated)
│   │   └── press/
│   │       └── [slug]/page.jsx        # Press detail (updated)
│   └── utils/
│       ├── blogs/
│       │   └── blogs.js               # JSON fallback
│       └── press/
│           └── press-combined.js      # JSON fallback
├── strapi-schema.md                   # Content type schemas
└── .env.local                         # Environment variables
```

## 🔄 How It Works

### Content Service Layer

The `contentService.js` provides a unified interface:

```javascript
// Always tries Strapi first, falls back to JSON
const blogs = await blogService.getAllBlogs();
const blog = await blogService.getBlogBySlug('my-blog-slug');
```

### Fallback Logic

1. **Primary**: Attempts to fetch from Strapi API
2. **Fallback**: Uses JSON files if Strapi is unavailable
3. **Caching**: 5-minute cache for performance
4. **Indicators**: Shows users when fallback is active

### Data Transformation

Strapi data is automatically transformed to match your existing JSON structure:

```javascript
// Strapi response → Your format
{
  id: 123,
  title: "Blog Title",
  slug: "blog-title",
  content: "<p>HTML content</p>",
  // ... other fields
}
```

## 🛠 Development Workflow

### Adding New Content

1. **Via Strapi** (Primary):
   - Create content in Strapi admin panel
   - Content appears automatically on website

2. **Via JSON** (Fallback):
   - Edit `src/utils/blogs/blogs.js` or `src/utils/press/press-combined.js`
   - Use existing format

### Testing Fallback

1. **Stop Strapi server**: `Ctrl+C` in Strapi terminal
2. **Refresh website**: Should show fallback indicator
3. **Check console**: Should see "Strapi fetch failed" warnings

### Cache Management

```javascript
import { contentUtils } from '@/services/contentService';

// Clear cache
contentUtils.clearCache();

// Check cache status
console.log(contentUtils.getCacheStatus());
```

## 🚀 Production Deployment

### Strapi Hosting Options

1. **Railway**: Easy deployment with database
2. **Heroku**: Traditional PaaS
3. **DigitalOcean**: VPS with full control
4. **Self-hosted**: Your own server

### Environment Variables

```bash
# Production .env.local
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
NEXT_PUBLIC_STRAPI_API_TOKEN=your_production_token
```

### Performance Optimization

1. **CDN**: Use CloudFlare or similar for Strapi assets
2. **Database**: Use PostgreSQL for production
3. **Caching**: Enable Strapi caching plugins
4. **Images**: Use AWS S3 or similar for media storage

## 🔧 Troubleshooting

### Common Issues

**Strapi not responding:**
- Check if Strapi server is running
- Verify API token permissions
- Check network connectivity

**Fallback not working:**
- Ensure JSON files exist in correct paths
- Check import paths in `contentService.js`
- Verify fallback data structure

**Content not updating:**
- Clear browser cache
- Clear service cache: `contentUtils.clearCache()`
- Check Strapi content status (published vs draft)

### Debug Mode

Enable debug logging:

```javascript
// In contentService.js, add:
console.log('Fetching from:', endpoint);
console.log('Fallback data:', fallbackData);
```

## 📊 Monitoring

### Health Checks

```javascript
// Check if Strapi is healthy
const healthCheck = async () => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blogs?pagination[limit]=1`);
    return response.ok;
  } catch {
    return false;
  }
};
```

### Analytics

Track content performance:
- Strapi admin panel shows content views
- Add Google Analytics to track page views
- Monitor fallback usage frequency

## 🎯 Next Steps

1. **Migrate existing content** from JSON to Strapi
2. **Set up content workflows** with drafts and approvals
3. **Add image optimization** for better performance
4. **Implement search functionality** using Strapi's built-in search
5. **Add content scheduling** for future publications

---

**Need help?** Check the Strapi documentation or create an issue in your project repository.
