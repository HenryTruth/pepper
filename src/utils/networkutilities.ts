// src/utils/networkUtils.ts
import NetInfo from "@react-native-community/netinfo";

export const checkNetworkConnectivity = async () => {
  const netInfo = await NetInfo.fetch();
  return netInfo.isConnected;
};

export const handleApiError = (error: any) => {
  if (!error.response) {
    return 'Network error. Please check your internet connection.';
  }
  switch (error.response.status) {
    case 400:
      return 'Bad request. Please check your input.';
    case 401:
      return 'Unauthorized. Please check your API key.';
    case 404:
      return 'Resource not found. Please try again later.';
    case 429:
      return 'Too many requests. Please try again later.';
    case 500:
      return 'Server error. Please try again later.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
};