import axios from "axios"

export function ProductData(value) {
  return {
    type: 'ProductData',
    payload:value,
  }
};
