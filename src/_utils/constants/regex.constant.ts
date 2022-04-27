export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
export const STRING_REGEX = /^[a-zA-Z ]+$/i;
export const PHONE_REGEX = /^[0][4][0-9]{2} [0-9]{3} [0-9]{3}/;
export const AU_PHONE_REGEX =
  /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
export const NUMBER_REGEX = /^[0-9]{1}$/;
