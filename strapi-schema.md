# Strapi Content Types Schema

This document outlines the content types you need to create in Strapi for the SimpliFi website.

**Note:** You already have Strapi running at `https://cms.simplifigo.com/api` with multiple content types. This schema shows what you need to add for blogs and press releases.

## Content Types to Create

### 1. Blog Content Type

**Collection Name:** `blogs`

**Fields:**
```javascript
{
  "title": {
    "type": "string",
    "required": true,
    "unique": true
  },
  "slug": {
    "type": "uid",
    "targetField": "title",
    "required": true,
    "unique": true
  },
  "excerpt": {
    "type": "text",
    "required": false
  },
  "content": {
    "type": "richtext",
    "required": true
  },
  "featured_image": {
    "type": "media",
    "multiple": false,
    "required": false,
    "allowedTypes": ["images"]
  },
  "author": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "api::author.author"
  },
  "tags": {
    "type": "relation",
    "relation": "manyToMany",
    "target": "api::tag.tag"
  },
  "status": {
    "type": "enumeration",
    "enum": ["draft", "published", "archived"],
    "default": "draft"
  },
  "published_at": {
    "type": "datetime",
    "required": false
  },
  "seo_title": {
    "type": "string",
    "required": false
  },
  "seo_description": {
    "type": "text",
    "required": false
  }
}
```

### 2. Press Release Content Type

**Collection Name:** `press-releases`

**Fields:**
```javascript
{
  "title": {
    "type": "string",
    "required": true,
    "unique": true
  },
  "slug": {
    "type": "uid",
    "targetField": "title",
    "required": true,
    "unique": true
  },
  "excerpt": {
    "type": "text",
    "required": false
  },
  "content": {
    "type": "richtext",
    "required": true
  },
  "featured_image": {
    "type": "media",
    "multiple": false,
    "required": false,
    "allowedTypes": ["images"]
  },
  "author": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "api::author.author"
  },
  "tags": {
    "type": "relation",
    "relation": "manyToMany",
    "target": "api::tag.tag"
  },
  "status": {
    "type": "enumeration",
    "enum": ["draft", "published", "archived"],
    "default": "draft"
  },
  "published_at": {
    "type": "datetime",
    "required": false
  },
  "press_type": {
    "type": "enumeration",
    "enum": ["partnership", "funding", "product_launch", "company_news"],
    "default": "company_news"
  },
  "seo_title": {
    "type": "string",
    "required": false
  },
  "seo_description": {
    "type": "text",
    "required": false
  }
}
```

### 3. Author Content Type

**Collection Name:** `authors`

**Fields:**
```javascript
{
  "name": {
    "type": "string",
    "required": true,
    "unique": true
  },
  "email": {
    "type": "email",
    "required": false,
    "unique": true
  },
  "bio": {
    "type": "text",
    "required": false
  },
  "avatar": {
    "type": "media",
    "multiple": false,
    "required": false,
    "allowedTypes": ["images"]
  },
  "social_links": {
    "type": "json",
    "required": false
  }
}
```

### 4. Tag Content Type

**Collection Name:** `tags`

**Fields:**
```javascript
{
  "name": {
    "type": "string",
    "required": true,
    "unique": true
  },
  "slug": {
    "type": "uid",
    "targetField": "name",
    "required": true,
    "unique": true
  },
  "description": {
    "type": "text",
    "required": false
  },
  "color": {
    "type": "string",
    "required": false
  }
}
```

## API Permissions

Make sure to enable the following permissions in Strapi:

### Public Permissions
- **Blogs**: `find`, `findOne`
- **Press Releases**: `find`, `findOne`
- **Authors**: `find`, `findOne`
- **Tags**: `find`, `findOne`

### Authenticated Permissions (if needed)
- **Blogs**: `create`, `update`, `delete`
- **Press Releases**: `create`, `update`, `delete`
- **Authors**: `create`, `update`, `delete`
- **Tags**: `create`, `update`, `delete`

## Environment Variables

Add these to your `.env.local` file:

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=your_api_token_here
```

## Migration from JSON

To migrate existing JSON content to Strapi:

1. Create the content types in Strapi
2. Use the Strapi admin panel to import your existing blog and press release content
3. Update the API token in your environment variables
4. Test the integration with the new service layer

The fallback system ensures your site continues to work even if Strapi is unavailable.
