export const APP_NAME = "AutoCV";

export const SERVER_URL = "http://localhost:8080";

// AUTH URLS
export const LOGIN_URL = "/api/v1/auth/login";
export const LOGIN_URL_GOOGLE = "/api/v1/auth/login_google";
export const REGISTER_URL = "/api/v1/auth/register";
export const REGISTER_URL_GOOGLE = "/api/v1/auth/register_google";

// RESUME URLS
export const RESUME_CREATE_URL = "/api/v1/resume/create";
export const RESUME_FETCHALL_URL = "/api/v1/resume/fetchall";

//Payment URL

export const PAYMENT_URL = "/api/v1/payment/pay";

// CV OBJECT TEMPLATES

export const BASIC_DETAILS_TEMPLATE = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  intro: "",
};

export const EXPERIENCE_TEMPLATE = {
  organization: "",
  location: "",
  position: "",
  ctc: "",
  startDate: "",
  endDate: "",
  technologies: "",
};

export const PROJECT_TEMPLATE = {
  title: "",
  teamSize: "",
  duration: "",
  technologies: "",
  description: "",
};

export const SKILL_TEMPLATE = {
  name: "",
  percentage: "",
};
export const SOCIAL_PROFILES_TEMPLATE = {
  platform: "",
  profileLink: "",
};

export const EDUCATION_TEMPLATE = {
  degreeName: "",
  institution: "",
  percentage: "",
};
