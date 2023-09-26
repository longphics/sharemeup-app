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

export async function fetchUser() {
  console.log('Fetch user');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/user',
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
