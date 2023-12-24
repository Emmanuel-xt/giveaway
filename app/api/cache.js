// cache.js (Shared Module)

// In-memory cache for user data
let cachedUsers = null;

export const getCachedUsers = () => cachedUsers;

export const setCachedUsers = (users) => {
  cachedUsers = users;
};

export const clearCachedUsers = () => {
  cachedUsers = null;
};
