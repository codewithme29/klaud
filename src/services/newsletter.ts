import { apiClient } from './api';

export const newsletterService = {
  subscribe: async (email: string) => {
    return apiClient.post('/newsletter/subscribe', { email });
  },
};
