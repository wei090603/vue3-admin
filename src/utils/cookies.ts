import Cookies from 'js-cookie';
const TokenKey = `${import.meta.env.VITE_BASE_PREFIX}token`;

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
