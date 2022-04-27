import axios from 'axios';

// Default axios configuration
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 100000;

export async function fetchData(endpoint: string, data?: any) {
  try {
    const response = await axios.get(endpoint, data);
    if (response.status === 200) {
      return response.data.payload;
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

export async function submitFormData(endpoint: string, data?: any) {
  try {
    const response = await axios.post(endpoint, data);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    throw new Error(response.data.message);
  } catch (error: any) {
    const errorData = error.response?.data;
    return errorData;
  }
}

export async function subscribeFormData(endpoint: string, data?: any) {
  try {
    const response = await axios.post(endpoint, data);
    if (response.status === 200 || response.status === 201) {
      return response.data.data;
    }
    throw new Error(response.data.data.message);
  } catch (error: any) {
    const errorData = error.response.data.data;
    return errorData;
  }
}
