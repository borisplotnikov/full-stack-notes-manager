// frontend > src > utils > apiConfig.js

// import { ERROR_MESSAGES } from '../constants';

export const getapiBaseUrl = () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    if (!apiBaseUrl) {
        // throw new Error(ERROR_MESSAGES.CONFIG.MISSING_API_BASE_URL);
    }

    try {
        new URL(apiBaseUrl);
    } catch {
        // throw new Error(ERROR_MESSAGES.CONFIG.INVALID_API_BASE_URL(apiBaseUrl));
    }

    return apiBaseUrl;
};