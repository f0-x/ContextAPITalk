import axios from 'axios';

// Default axios configuration
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function fetchDatas(endpoint: string, data?: any) {
  try {
    const response = await axios.get(endpoint, data);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error: any) {
    if (error.response) {
      const errorData = error.response.data;
      return errorData;
    }
    if (!error.response) {
      return null;
    }
  }
}
