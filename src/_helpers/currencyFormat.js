/* eslint-disable import/prefer-default-export */
export const numberFormat = (value) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
}).format(value);
