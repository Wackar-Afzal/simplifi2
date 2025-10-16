// Content Service - Strapi with JSON Fallback
import { blogs } from '@/utils/blogs/blogs.js';
import { pressReleases } from '@/utils/press/press-combined.js';
import { API_ENDPOINTS } from '@/varConstant.js';

// Strapi Configuration - Using your existing setup
const STRAPI_URL = 'https://cms.simplifigo.com/api';
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map();

/**
 * Generic function to fetch from Strapi with fallback
 * Following your existing pattern from page.js
 */
async function fetchWithFallback(endpoint, fallbackData, cacheKey, populateParams = '') {
  console.log(`=== FETCH WITH FALLBACK: ${cacheKey} ===`);
  console.log('Endpoint:', endpoint);
  console.log('Populate Params:', populateParams);
  
  // Check cache first
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log('Using cached data for:', cacheKey);
      return cached.data;
    }
  }

  try {
    // Try to fetch from Strapi using your existing pattern
    const queryParams = populateParams ? `?${populateParams}` : '';
    const fullUrl = `${endpoint}${queryParams}`;
    console.log('=== FULL URL DEBUG ===');
    console.log('Endpoint:', endpoint);
    console.log('Query Params:', queryParams);
    console.log('Full URL:', fullUrl);
    console.log('URL Length:', fullUrl.length);
    console.log('========================');
    
    const response = await fetch(fullUrl, {
      next: { revalidate: 300 }, // 5 minutes revalidation
      headers: STRAPI_API_TOKEN ? {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      } : {}
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status}`);
    }

    const jsonResponse = await response.json();
    console.log('Raw JSON response:', JSON.stringify(jsonResponse, null, 2));
    
    const data = jsonResponse?.data || jsonResponse;
    console.log('Processed data:', JSON.stringify(data, null, 2));
    
    // Cache the successful response
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });

    return data;
  } catch (error) {
    console.error(`=== STRAPI FETCH FAILED: ${cacheKey} ===`);
    console.error('Error:', error);
    console.error('Error message:', error.message);
    console.error('Using fallback data instead');
    console.error('==========================================');
    
    // Use fallback data
    cache.set(cacheKey, {
      data: fallbackData,
      timestamp: Date.now(),
      isFallback: true
    });

    return fallbackData;
  }
}

/**
 * Transform Strapi blog data to match existing structure
 */
function transformStrapiBlog(strapiBlog) {
  // Check if this is fallback JSON data (has img property) or Strapi data (has featured_image)
  const isFallbackData = strapiBlog.img && !strapiBlog.featured_image;
  
  return {
    id: strapiBlog.id,
    img: isFallbackData 
      ? `${strapiBlog.img}` 
      : (strapiBlog.featured_image?.url ? `${STRAPI_URL}${strapiBlog.featured_image.url}` : '/images/default-blog.jpg'),
    alt: isFallbackData 
      ? strapiBlog.alt || strapiBlog.title 
      : (strapiBlog.featured_image?.alternativeText || strapiBlog.title),
    subtitle: strapiBlog.excerpt || strapiBlog.description || strapiBlog.subtitle,
    title: strapiBlog.title,
    buttonText: "READ MORE",
    buttonLink: `/blog/${strapiBlog.slug}`,
    date: isFallbackData 
      ? strapiBlog.date 
      : new Date(strapiBlog.published_at || strapiBlog.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
    slug: strapiBlog.slug,
    path: `/blog/${strapiBlog.slug}`,
    image: isFallbackData 
      ? `${strapiBlog.img}` 
      : (strapiBlog.featured_image?.url ? `${STRAPI_URL}${strapiBlog.featured_image.url}` : ''),
    content: strapiBlog.content || '',
    author: strapiBlog.author?.name || 'SimpliFi Team',
    tags: strapiBlog.tags?.map(tag => tag.name) || [],
    status: strapiBlog.status || 'published'
  };
}

/**
 * Transform Strapi blog data from new endpoint
 */
function transformStrapiBlogNew(strapiBlog) {
  // Check if this is fallback JSON data (has img as string) or Strapi data (has img as object)
  const isFallbackData = typeof strapiBlog.img === 'string';
  const isNewStrapiData = strapiBlog.img && typeof strapiBlog.img === 'object' && strapiBlog.img.url;
  
  // Determine image URL based on data source
  let imgUrl = '/images/default-blog.jpg';
  if (isFallbackData) {
    imgUrl = `${strapiBlog.img}`;
  } else if (isNewStrapiData) {
    imgUrl = strapiBlog.img.url;
  }
  
  return {
    id: strapiBlog.id,
    img: imgUrl,
    alt: isFallbackData 
      ? strapiBlog.title 
      : (strapiBlog.img?.alternativeText || strapiBlog.title),
    subtitle: strapiBlog.subtitle,
    title: strapiBlog.title,
    buttonText: strapiBlog.buttonText || "READ MORE",
    buttonLink: strapiBlog.buttonLink || `/blog/${strapiBlog.slug}`,
    date: isFallbackData 
      ? strapiBlog.date 
      : new Date(strapiBlog.published_at || strapiBlog.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
    slug: strapiBlog.slug,
    path: strapiBlog.path || `/blog/${strapiBlog.slug}`,
    image: imgUrl,
    content: strapiBlog.content || '',
    author: strapiBlog.author?.name || 'SimpliFi Team',
    tags: strapiBlog.tags?.map(tag => tag.name) || [],
    status: strapiBlog.status || 'published'
  };
}

/**
 * Transform Strapi media item data
 */
function transformStrapiMediaItem(strapiMedia) {
  // Check if this is fallback JSON data (has img as string) or Strapi data (has img as object)
  const isFallbackData = typeof strapiMedia.img === 'string';
  const isNewStrapiData = strapiMedia.img && typeof strapiMedia.img === 'object' && strapiMedia.img.url;
  
  // Determine image URL based on data source
  let imgUrl = '/images/default-media.jpg';
  if (isFallbackData) {
    imgUrl = `${strapiMedia.img}`;
  } else if (isNewStrapiData) {
    imgUrl = strapiMedia.img.url;
  }
  
  return {
    id: strapiMedia.id,
    img: imgUrl,
    alt: isFallbackData 
      ? strapiMedia.title 
      : (strapiMedia.img?.alternativeText || strapiMedia.title),
    subtitle: strapiMedia.subtitle,
    title: strapiMedia.title,
    buttonText: strapiMedia.buttonText || "READ MORE",
    buttonLink: strapiMedia.buttonLink || strapiMedia.path, // External link
    date: isFallbackData 
      ? strapiMedia.date 
      : new Date(strapiMedia.published_at || strapiMedia.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
    slug: strapiMedia.slug,
    path: strapiMedia.path, // External URL
    image: imgUrl,
    content: strapiMedia.content || '', // Usually null for media items
    author: strapiMedia.author?.name || 'External Media',
    tags: strapiMedia.tags?.map(tag => tag.name) || [],
    status: strapiMedia.status || 'published',
    isExternal: true // Flag to indicate this is an external link
  };
}

/**
 * Transform Strapi press release data
 */
function transformStrapiPressRelease(strapiPress) {
  // Check if this is fallback JSON data (has img as string) or Strapi data (has img as object or featured_image)
  const isFallbackData = typeof strapiPress.img === 'string';
  const isNewStrapiData = strapiPress.img && typeof strapiPress.img === 'object' && strapiPress.img.url;
  
  // Determine image URL based on data source
  let imgUrl = '/images/default-press.jpg';
  if (isFallbackData) {
    imgUrl = `${strapiPress.img}`;
  } else if (isNewStrapiData) {
    imgUrl = strapiPress.img.url;
  } else if (strapiPress.featured_image?.url) {
    imgUrl = `${STRAPI_URL}${strapiPress.featured_image.url}`;
  }
  
  return {
    id: strapiPress.id,
    img: imgUrl,
    alt: isFallbackData 
      ? strapiPress.title 
      : (strapiPress.img?.alternativeText || strapiPress.featured_image?.alternativeText || strapiPress.title),
    subtitle: strapiPress.excerpt || strapiPress.description || strapiPress.subtitle,
    title: strapiPress.title,
    buttonText: "READ MORE",
    buttonLink: `/press/${strapiPress.slug}`,
    date: isFallbackData 
      ? strapiPress.date 
      : new Date(strapiPress.published_at || strapiPress.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
    slug: strapiPress.slug,
    path: `/press/${strapiPress.slug}`,
    image: imgUrl,
    content: strapiPress.content || '',
    author: strapiPress.author?.name || 'SimpliFi Team',
    tags: strapiPress.tags?.map(tag => tag.name) || [],
    status: strapiPress.status || 'published'
  };
}

// Blog Services
export const blogService = {
  /**
   * Get all blogs with fallback
   */
  async getAllBlogs() {
    const fallbackData = {
      blogs: {
        hero: blogs.blogs.hero,
        posts: {
          slides: blogs.blogs.posts.slides
        }
      }
    };

    // Use your existing API endpoint pattern
    const populateParams = 'populate[featured_image][populate]=*&populate[author][populate]=*&populate[tags][populate]=*&sort=publishedAt:desc';
    const data = await fetchWithFallback(API_ENDPOINTS.BLOGS, fallbackData, 'all-blogs', populateParams);
    
    if (Array.isArray(data)) {
      // Transform Strapi data to match your existing structure
      return {
        blogs: {
          hero: blogs.blogs.hero, // Keep existing hero from fallback
          posts: {
            slides: data.map(transformStrapiBlog)
          }
        }
      };
    }

    // Return fallback data
    return data;
  },

  /**
   * Get blog by slug
   */
  async getBlogBySlug(slug) {
    const fallbackBlog = blogs.blogs.posts.slides.find(blog => blog.slug === slug);
    
    if (!fallbackBlog) {
      return null;
    }

    const fallbackData = [transformStrapiBlog({ ...fallbackBlog, id: fallbackBlog.id })];
    
    // Use your existing API endpoint pattern with filters
    const populateParams = `filters[slug][$eq]=${slug}&populate[featured_image][populate]=*&populate[author][populate]=*&populate[tags][populate]=*`;
    const data = await fetchWithFallback(API_ENDPOINTS.BLOGS, fallbackData, `blog-${slug}`, populateParams);
    
    if (Array.isArray(data) && data.length > 0) {
      return transformStrapiBlog(data[0]);
    }

    return fallbackBlog;
  },

  /**
   * Get related blogs
   */
  async getRelatedBlogs(currentSlug, limit = 3) {
    const allBlogs = await this.getAllBlogs();
    return allBlogs.blogs.posts.slides
      .filter(blog => blog.slug !== currentSlug)
      .slice(0, limit);
  },

  /**
   * Get all blogs from new Strapi endpoint
   */
  async getAllBlogsNew() {
    console.log('=== BLOGS API CALL ===');
    console.log('API Endpoint:', API_ENDPOINTS.BLOGS_NEW);
    console.log('STRAPI_BASE_URL:', 'https://cms.simplifigo.com/api');
    console.log('Expected URL:', 'https://cms.simplifigo.com/api/simplifipay-blogs');
    
    // Test if base URL is accessible
    try {
      const baseTest = await fetch('https://cms.simplifigo.com/api');
      console.log('Base URL test status:', baseTest.status);
    } catch (error) {
      console.error('Base URL test failed:', error);
    }
    
    const fallbackData = {
      blogs: {
        hero: blogs.blogs.hero,
        posts: {
          slides: blogs.blogs.posts.slides
        }
      }
    };

    // Use the new Strapi endpoint with proper population parameters
    const populateParams = 'populate[hero][populate]=*&populate[posts][populate][slides][populate]=*&sort=publishedAt:desc&pagination[limit]=100';
    console.log('Populate Params:', populateParams);
    console.log('Full URL:', `${API_ENDPOINTS.BLOGS_NEW}?${populateParams}`);
    
    const data = await fetchWithFallback(API_ENDPOINTS.BLOGS_NEW, fallbackData, 'all-blogs-new', populateParams);
    
    if (Array.isArray(data) && data.length > 0) {
      const strapiData = data[0]; // Get the first (and likely only) item
      
      // Transform the Strapi data structure to match your existing structure
      return {
        blogs: {
          hero: strapiData.hero || blogs.blogs.hero,
          posts: {
            slides: strapiData.posts?.slides?.map(transformStrapiBlogNew) || []
          }
        }
      };
    }
    return fallbackData;
  },

  /**
   * Get blog by slug from new Strapi endpoint
   */
  async getBlogBySlugNew(slug) {
    const fallbackBlog = blogs.blogs.posts.slides.find(blog => blog.slug === slug);
    if (!fallbackBlog) { return null; }
    const fallbackData = [transformStrapiBlogNew({ ...fallbackBlog, id: fallbackBlog.id })];
    
    const populateParams = `filters[slug][$eq]=${slug}&populate[hero][populate]=*&populate[posts][populate][slides][populate]=*`;
    const data = await fetchWithFallback(API_ENDPOINTS.BLOGS_NEW, fallbackData, `blog-new-${slug}`, populateParams);
    
    if (Array.isArray(data) && data.length > 0) {
      const strapiData = data[0];
      const matchingSlide = strapiData.posts?.slides?.find(slide => slide.slug === slug);
      if (matchingSlide) {
        return transformStrapiBlogNew(matchingSlide);
      }
    }
    return fallbackBlog;
  }
};

// Press Release Services
export const pressService = {
  /**
   * Get all press releases
   */
  async getAllPressReleases() {
    const fallbackData = {
      pressReleases: {
        hero: pressReleases.pressReleases.hero,
        pressReleases: {
          slides: pressReleases.pressReleases.pressReleases.slides
        }
      }
    };

    // Use your existing API endpoint pattern
    const populateParams = 'populate[featured_image][populate]=*&populate[author][populate]=*&populate[tags][populate]=*&sort=publishedAt:desc';
    const data = await fetchWithFallback(API_ENDPOINTS.PRESS_RELEASES, fallbackData, 'all-press', populateParams);
    
    if (Array.isArray(data)) {
      // Transform Strapi data to match your existing structure
      return {
        pressReleases: {
          hero: pressReleases.pressReleases.hero, // Keep existing hero from fallback
          pressReleases: {
            slides: data.map(transformStrapiPressRelease)
          }
        }
      };
    }

    return data;
  },

  /**
   * Get press release by slug
   */
  async getPressReleaseBySlug(slug) {
    const fallbackPress = pressReleases.pressReleases.pressReleases.slides.find(pr => pr.slug === slug);
    
    if (!fallbackPress) {
      return null;
    }

    const fallbackData = [transformStrapiPressRelease({ ...fallbackPress, id: fallbackPress.id })];
    
    // Use your existing API endpoint pattern with filters
    const populateParams = `filters[slug][$eq]=${slug}&populate[featured_image][populate]=*&populate[author][populate]=*&populate[tags][populate]=*`;
    const data = await fetchWithFallback(API_ENDPOINTS.PRESS_RELEASES, fallbackData, `press-${slug}`, populateParams);
    
    if (Array.isArray(data) && data.length > 0) {
      return transformStrapiPressRelease(data[0]);
    }

    return fallbackPress;
  },

  /**
   * Get related press releases
   */
  async getRelatedPressReleases(currentSlug, limit = 3) {
    const allPress = await this.getAllPressReleases();
    return allPress.pressReleases.pressReleases.slides
      .filter(pr => pr.slug !== currentSlug)
      .slice(0, limit);
  },

  /**
   * Get all press releases from new Strapi endpoint
   */
  async getAllPressReleasesNew() {
    const fallbackData = {
      pressReleases: {
        hero: pressReleases.pressReleases.hero,
        pressReleases: {
          slides: pressReleases.pressReleases.pressReleases.slides
        }
      },
      media: {
        hero: pressReleases.pressReleases.hero, // Use same hero for media
        media: {
          slides: [] // Empty fallback for media
        }
      }
    };

    // Use the new Strapi endpoint with proper population parameters including media
    const populateParams = 'populate[hero][populate]=*&populate[pressReleases][populate][slides][populate]=*&populate[media][populate][slides][populate]=*&sort=publishedAt:desc&pagination[limit]=100';
    const data = await fetchWithFallback(API_ENDPOINTS.PRESS_RELEASES_NEW, fallbackData, 'all-press-new', populateParams);
    
    if (Array.isArray(data) && data.length > 0) {
      const strapiData = data[0]; // Get the first (and likely only) item
      
      // Transform the Strapi data structure to match your existing structure
      return {
        pressReleases: {
          hero: strapiData.hero || pressReleases.pressReleases.hero,
          pressReleases: {
            slides: strapiData.pressReleases?.slides?.map(transformStrapiPressRelease) || []
          }
        },
        media: {
          hero: strapiData.media?.hero || strapiData.hero || pressReleases.pressReleases.hero,
          media: {
            slides: strapiData.media?.slides?.map(transformStrapiMediaItem) || []
          }
        }
      };
    }

    return fallbackData;
  },

  /**
   * Get press release by slug from new Strapi endpoint
   */
  async getPressReleaseBySlugNew(slug) {
    const fallbackPress = pressReleases.pressReleases.pressReleases.slides.find(pr => pr.slug === slug);
    
    if (!fallbackPress) {
      return null;
    }

    const fallbackData = [transformStrapiPressRelease({ ...fallbackPress, id: fallbackPress.id })];
    
    // Use the new Strapi endpoint with filters
    const populateParams = `filters[slug][$eq]=${slug}&populate[hero][populate]=*&populate[pressReleases][populate][slides][populate]=*`;
    const data = await fetchWithFallback(API_ENDPOINTS.PRESS_RELEASES_NEW, fallbackData, `press-new-${slug}`, populateParams);
    
    if (Array.isArray(data) && data.length > 0) {
      const strapiData = data[0];
      const matchingSlide = strapiData.pressReleases?.slides?.find(slide => slide.slug === slug);
      if (matchingSlide) {
        return transformStrapiPressRelease(matchingSlide);
      }
    }

    return fallbackPress;
  },

  /**
   * Get all media items from new Strapi endpoint
   */
  async getAllMediaNew() {
    const fallbackData = {
      media: {
        hero: {
          heading: "SimpliFi in the media",
          descrip: "Latest press releases and company announcements"
        },
        media: {
          slides: [] // Empty fallback for media
        }
      }
    };

    // Use the new Strapi endpoint with proper population parameters for media only
    const populateParams = 'populate[hero][populate]=*&populate[media][populate][slides][populate]=*&sort=publishedAt:desc&pagination[limit]=100';
    const data = await fetchWithFallback(API_ENDPOINTS.PRESS_RELEASES_NEW, fallbackData, 'all-media-new', populateParams);
    
    if (Array.isArray(data) && data.length > 0) {
      const strapiData = data[0]; // Get the first (and likely only) item
      
      // Transform the Strapi data structure to match your existing structure
      return {
        media: {
          hero: strapiData.media?.hero || strapiData.hero || fallbackData.media.hero,
          media: {
            slides: strapiData.media?.slides?.map(transformStrapiMediaItem) || []
          }
        }
      };
    }

    return fallbackData;
  },

  /**
   * Get media item by slug from new Strapi endpoint
   */
  async getMediaBySlugNew(slug) {
    const fallbackData = [];
    
    // Use the new Strapi endpoint with filters for media
    const populateParams = `filters[media.slides.slug][$eq]=${slug}&populate[hero][populate]=*&populate[media][populate][slides][populate]=*`;
    const data = await fetchWithFallback(API_ENDPOINTS.PRESS_RELEASES_NEW, fallbackData, `media-new-${slug}`, populateParams);
    
    if (Array.isArray(data) && data.length > 0) {
      const strapiData = data[0];
      const matchingSlide = strapiData.media?.slides?.find(slide => slide.slug === slug);
      if (matchingSlide) {
        return transformStrapiMediaItem(matchingSlide);
      }
    }

    return null;
  }
};

// Utility functions
export const contentUtils = {
  /**
   * Check if content is from fallback
   */
  isFallbackContent(cacheKey) {
    const cached = cache.get(cacheKey);
    return cached?.isFallback || false;
  },

  /**
   * Clear cache
   */
  clearCache() {
    cache.clear();
  },

  /**
   * Get cache status
   */
  getCacheStatus() {
    const status = {};
    for (const [key, value] of cache.entries()) {
      status[key] = {
        timestamp: value.timestamp,
        isFallback: value.isFallback || false,
        age: Date.now() - value.timestamp
      };
    }
    return status;
  }
};
