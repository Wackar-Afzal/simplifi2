// Strapi CMS API Base URL
export const STRAPI_BASE_URL = "https://cms.simplifigoo.com/api";
// export const STRAPI_BASE_URL = "https://cms.simplifigo.com/api";

// API Endpoints
export const API_ENDPOINTS = {
  HOME: `${STRAPI_BASE_URL}/home-simplifipays`,
  EMBED_READY: `${STRAPI_BASE_URL}/simplifipay-embed-reads`,
  CARD_AS_SERVICE: `${STRAPI_BASE_URL}/simplifipay-card-as-services`,
  SLACK: "/api/slack",
};

// For backward compatibility
export const API_URL = API_ENDPOINTS.CARD_AS_SERVICE;
