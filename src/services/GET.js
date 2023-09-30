import axios from 'axios';

import { backendConfig } from '~/configs';

export async function fetchCategories() {
  console.log('Fetch categories');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/categories',
  });
  return res;
}

export async function fetchItems() {
  console.log('Fetch items');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/items',
  });
  return res;
}

export async function fetchStores() {
  console.log('Fetch stores');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/stores',
  });
  return res;
}

export async function fetchUsers() {
  console.log('Fetch users');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/users',
  });
  return res;
}

export async function fetchOrders() {
  console.log('Fetch orders');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/orders',
  });
  return res;
}

export async function fetchMe(token) {
  console.log('Fetch me');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/users/me',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
}
