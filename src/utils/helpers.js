import { camelCase } from 'lodash';

// Utility function to convert an object keys to camelCase
export const camelizeKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((v) => camelizeKeys(v));
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

// Unitily funtion to generate a reject promise after passed amount of seconds
const timeout = (seconds) => {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${seconds} second`));
    }, seconds * 1000);
  });
};

// Utility function to fetch the API, handle any response error return it in JSON
export const getJSON = async (url) => {
  try {
    const response = await Promise.race([fetch(url), timeout(import.meta.env.VITE_TIMEOUT_SEC)]);
    const data = await response.json(); // Parse JSON response

    if (!response.ok) {
      throw new Error(`${data.message} (${response.status})`);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Extract recipe ID from URL hash
export const getRecipeIdFromHash = () => {
  return window.location.hash.slice(1);
};
