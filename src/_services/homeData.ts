import datas from '../data/home.json';
import {
  CMS,
  GET_HOMEPAGE_BANNER,
  GET_HOMEPAGE_CATEGORIES,
  GET_HOMEPAGE_CTA,
  GET_HOMEPAGE_FAQ,
  GET_HOMEPAGE_PARTNER,
  GET_HOMEPAGE_PAYMENT,
  GET_HOMEPAGE_REVIEWS,
  GET_HOMEPAGE_WHYUS,
  NEWSLETTER_ENDPOINT,
} from '_utils/constants/endpoint.constant';
import { fetchDatas } from '_utils/helpers/fetch';
import { fetchData, subscribeFormData } from '_utils/helpers/fetch.helper';

export async function GetHomeBanner() {
  const response = await fetchData(`${CMS}${GET_HOMEPAGE_BANNER}`);
  return response || {};
}

export async function GetHomeCTA() {
  const response = await fetchData(`${CMS}${GET_HOMEPAGE_CTA}`);
  return response || {};
}

export async function GetHomeWhyus() {
  const response = await fetchData(`${CMS}${GET_HOMEPAGE_WHYUS}`);
  return response || {};
}

export async function GetHomeCategory() {
  const response = await fetchData(`${GET_HOMEPAGE_CATEGORIES}`);
  return response || {};
}

export async function GetHomeFags() {
  const response = await fetchData(`${GET_HOMEPAGE_FAQ}`);
  return response || {};
}

export async function GetHomeReviews() {
  const response = await fetchDatas(`${GET_HOMEPAGE_REVIEWS}`);
  return response || {};
}

export async function GetHomePartner() {
  const response = await fetchDatas(`${GET_HOMEPAGE_PARTNER}`);
  return response || {};
}

export async function GetHomePayment() {
  const response = await fetchData(`${CMS}${GET_HOMEPAGE_PAYMENT}`);
  return response || {};
}

export async function sendNewsletterFormData(data: any) {
  const message = await subscribeFormData(`${NEWSLETTER_ENDPOINT}`, data);
  return message;
}

export async function GetHomeData() {
  try {
    return {
      bannerData: await GetHomeBanner(),
      partnerData: datas?.partner,
      ctaData: await GetHomeCTA(),
      collectionData: await GetHomeCategory(),
      whyUsData: await GetHomeWhyus(),
      testimonialData: await GetHomeReviews(),
      faqData: await GetHomeFags(),
      paymentData: await GetHomePayment(),
    };
  } catch (error) {
    return error;
  }
}
