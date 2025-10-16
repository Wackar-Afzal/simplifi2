// Strapi Configuration
import { STRAPI_BASE_URL } from '../varConstant';
export const strapiConfig = {
  url: process.env.NEXT_PUBLIC_STRAPI_URL || STRAPI_BASE_URL,
  apiToken: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '',
  
  // API endpoints
  endpoints: {
    blogs: '/blogs',
    pressReleases: '/press-releases',
    media: '/media',
    authors: '/authors',
    tags: '/tags'
  },

  // Default populate options
  populate: {
    default: '*',
    withAuthor: 'author,author.avatar',
    withMedia: 'featured_image,featured_image.formats',
    withTags: 'tags,tags.name',
    full: 'author,author.avatar,featured_image,featured_image.formats,tags'
  }
};

// Environment check
export const isStrapiEnabled = () => {
  return !!strapiConfig.apiToken && strapiConfig.url !== STRAPI_BASE_URL;
};
