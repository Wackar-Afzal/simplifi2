// Strapi CMS API Base URL
export const STRAPI_BASE_URL = "https://cms.simplifigo.com/api";
// export const STRAPI_BASE_URL = "https://cms.simplifigo.com/api";

// API Endpoints
export const API_ENDPOINTS = {
  HOME: `${STRAPI_BASE_URL}/home-simplifipays`,
  EMBED_READY: `${STRAPI_BASE_URL}/simplifipay-embed-reads`,
  CARD_AS_SERVICE: `${STRAPI_BASE_URL}/simplifipay-card-as-services`,
  FEATURES: `${STRAPI_BASE_URL}/simplfipay-feautres`,
  CAPABILITIES: `${STRAPI_BASE_URL}/simplifipay-capabilities`,
  USE_CASES: `${STRAPI_BASE_URL}/simplifipay-use-cases`,
  INDUSTRIES: `${STRAPI_BASE_URL}/simplifipay-industries`,
  ABOUT: `${STRAPI_BASE_URL}/simplifipay-abouts`,
  CONTACT: `${STRAPI_BASE_URL}/simplifipay-contacts`,
  BLOGS: `${STRAPI_BASE_URL}/blogs`,
  BLOGS_NEW: `${STRAPI_BASE_URL}/simplifipay-blogs`,
  PRESS_RELEASES: `${STRAPI_BASE_URL}/press-releasess`,
  PRESS_RELEASES_NEW: `${STRAPI_BASE_URL}/simplifipay-pressrelases`,
  SLACK: "/api/slack",
};

// For backward compatibility
export const API_URL = API_ENDPOINTS.CARD_AS_SERVICE;
